import { GoogleGenerativeAI } from "@google/generative-ai";

// Define interfaces for error types
interface GenerativeError {
  message: string;
  details?: unknown;
}

interface ApiError extends Error {
  status?: number;
  code?: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const image = data.get('image') as File;
    const prompt = data.get('prompt') as string;

    if (!image) {
      return Response.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Validate image size
    if (image.size > 4 * 1024 * 1024) {
      return Response.json(
        { error: 'Image size must be less than 4MB' },
        { status: 400 }
      );
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(image.type)) {
      return Response.json(
        { error: 'Invalid image format. Please upload a JPEG, PNG, or WebP image.' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    // Updated to use gemini-1.5-flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Convert File to base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');

    // Construct the image part for Gemini
    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: image.type
      }
    };

    // Construct the prompt
    const defaultPrompt = "Please analyze this pet's health condition and provide the following information:\n" +
      "1. Visible health issues or concerns\n" +
      "2. Potential breed identification\n" +
      "3. Severity assessment (if issues are found)\n" +
      "4. Recommendation for vet visit (if needed)\n" +
      "Please note that this is an initial assessment and not a replacement for professional veterinary care.";

    try {
      const result = await model.generateContent([
        prompt || defaultPrompt,
        imagePart
      ]);

      const response = await result.response;
      return Response.json({ analysis: response.text() });
    } catch (modelError) {
      const error = modelError as GenerativeError;
      console.error('Gemini API error:', error);
      return Response.json(
        { 
          error: `AI model error: ${error.message || 'Failed to analyze the image'}. Please try again.`,
          details: error
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    const err = error as ApiError;
    console.error('Analysis error:', err);
    return Response.json(
      { 
        error: 'Failed to process the image. Please try again.',
        details: err.message
      },
      { status: 500 }
    );
  }
}