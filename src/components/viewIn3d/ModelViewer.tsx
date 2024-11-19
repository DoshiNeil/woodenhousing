'use client';
import React, { useEffect, useRef } from "react";

// Define the props interface for the component
interface ModelViewerProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "manual";
  ar?: boolean;
  "ar-modes"?: string;
  "camera-controls"?: boolean;
  "auto-rotate"?: boolean;
  "rotation-per-second"?: string;
  "field-of-view"?: string;
  "max-camera-orbit"?: string;
  "min-camera-orbit"?: string;
  "environment-image"?: string;
  exposure?: string;
  "shadow-intensity"?: string;
  "shadow-softness"?: string;
  onLoad?: () => void;
  onError?: (error: any) => void;
  ref?: React.RefObject<HTMLElement>;
}

// Define type for the model-viewer element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": Partial<ModelViewerProps>;
    }
  }
}

const ModelViewer = React.forwardRef<HTMLElement, ModelViewerProps>(
  ({ onLoad, onError, ...props }, ref) => {
    const localRef = useRef<HTMLElement>(null);
    const modelViewerRef = (ref || localRef) as React.RefObject<HTMLElement>;

    useEffect(() => {
      const modelViewer = modelViewerRef.current;

      if (modelViewer) {
        if (onLoad) {
          modelViewer.addEventListener("load", onLoad);
        }
        if (onError) {
          modelViewer.addEventListener("error", onError);
        }
      }

      return () => {
        if (modelViewer) {
          if (onLoad) {
            modelViewer.removeEventListener("load", onLoad);
          }
          if (onError) {
            modelViewer.removeEventListener("error", onError);
          }
        }
      };
    }, [onLoad, onError, modelViewerRef]);

    return <model-viewer ref={modelViewerRef} {...props} />;
  },
);

ModelViewer.displayName = "ModelViewer";

export default ModelViewer;
