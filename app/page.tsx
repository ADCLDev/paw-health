// app/page.tsx
'use client'

import { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Upload, 
  X, 
  Camera as CameraIcon,
  Brain,
  Stethoscope,
  Info,
  ShieldAlert
} from 'lucide-react';

const HowItWorksCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 bg-blue-100 rounded-full">
        <Icon size={24} className="text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const validateImage = (file: File): string | null => {
    if (file.size > 4 * 1024 * 1024) {
      return 'Image size must be less than 4MB';
    }
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return 'Invalid image format. Please upload a JPEG, PNG, or WebP image.';
    }
    
    return null;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validationError = validateImage(file);
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setError('');
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const startCamera = async () => {
    try {
      console.log('Starting camera...');
      setShowCamera(true); // Set this first
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      console.log('Got stream:', stream);
      
      // Small delay to ensure ref is available
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
          console.log('Video element set up successfully');
        } else {
          console.log('Video ref still not available');
        }
      }, 100);
  
      setError('');
    } catch (err) {
      setError('Unable to access camera. Please check permissions.');
      console.error('Camera error:', err);
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
            setImage(file);
            setPreview(URL.createObjectURL(file));
            stopCamera();
          }
        }, 'image/jpeg', 0.8);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    setIsLoading(true);
    setError('');
    setAnalysis('');

    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Analysis failed');
      }

      setAnalysis(data.analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const resetImage = () => {
    setImage(null);
    setPreview('');
    setError('');
    setAnalysis('');
    if (showCamera) {
      stopCamera();
    }
  };

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Pet Health Analyzer</h1>
      
      <div className="mb-4 text-center text-sm text-gray-600">
        Upload or take a photo of your pet. For best results, ensure good lighting and that any areas of concern are clearly visible.
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        {showCamera ? (
          <div className="space-y-4 bg-gray-100 p-4 rounded-lg border">
            <video 
              ref={videoRef}
              autoPlay 
              playsInline
              onLoadedMetadata={() => console.log('Video metadata loaded')}
              className="w-full h-[400px] mx-auto rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={capturePhoto}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Take Photo
              </button>
              <button
                type="button"
                onClick={stopCamera}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : !preview ? (
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <div className="text-gray-600">Choose a method to add a photo:</div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={startCamera}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  <Camera size={20} />
                  Take Photo
                </button>
                <label
                  htmlFor="imageUpload"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                >
                  <Upload size={20} />
                  Upload Photo
                </label>
              </div>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Supported formats: JPEG, PNG, WebP (max 4MB)
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative w-full max-h-96 mx-auto">
              <Image
                src={preview}
                alt="Preview"
                width={800}
                height={600}
                className="mx-auto rounded-lg object-contain"
                style={{ maxHeight: '384px' }} // equivalent to max-h-96
              />
            </div>
            <button
              type="button"
              onClick={resetImage}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 mx-auto"
            >
              <X size={20} />
              Remove Photo
            </button>
          </div>
        )}
        </div>

        <button
          type="submit"
          disabled={!image || isLoading}
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Pet Health'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {analysis && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
          <div className="whitespace-pre-wrap">{analysis}</div>
          <div className="mt-4 text-sm text-gray-500">
            Note: This is an AI-powered initial assessment and should not replace professional veterinary care. 
            If you have concerns about your pet&apos;s health, please consult a veterinarian.
          </div>
        </div>
      )}

      {/* How It Works Section - Now below the analysis section */}
      <section className="mt-16 mb-8 border-t pt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HowItWorksCard
            icon={CameraIcon}
            title="Take a Photo"
            description="Upload an image or use your camera to take a clear photo of your pet&apos;s condition"
          />
          <HowItWorksCard
            icon={Brain}
            title="AI Analysis"
            description="Our advanced AI system analyzes the image to identify potential health concerns"
          />
          <HowItWorksCard
            icon={Stethoscope}
            title="Get Assessment"
            description="Receive a detailed initial assessment of your pet&apos;s visible health conditions"
          />
          <HowItWorksCard
            icon={Info}
            title="Next Steps"
            description="Get recommendations on whether a veterinary visit is needed"
          />
        </div>
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-start gap-3">
            <ShieldAlert className="text-yellow-600 mt-1 flex-shrink-0" />
            <div className="text-sm text-yellow-700">
              <strong>Important:</strong> This tool provides initial assessments only and is not a substitute for professional veterinary care. 
              Always consult with a qualified veterinarian for proper diagnosis and treatment of your pet&apos;s health conditions.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}