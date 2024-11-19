'use client';
import React, { useEffect, useRef } from 'react';

// Define custom event type for model-viewer
interface CustomModelViewerElement extends HTMLElement {
  addEventListener(
    type: 'error',
    listener: (event: CustomEvent<{ type: string; message: string }>) => void
  ): void;
  addEventListener(
    type: 'load',
    listener: (event: Event) => void
  ): void;
  removeEventListener(
    type: 'error',
    listener: (event: CustomEvent<{ type: string; message: string }>) => void
  ): void;
  removeEventListener(
    type: 'load',
    listener: (event: Event) => void
  ): void;
}

// Define the props interface for the component
interface ModelViewerProps {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'manual';
  ar?: boolean;
  'ar-modes'?: string;
  'camera-controls'?: boolean;
  'auto-rotate'?: boolean;
  'rotation-per-second'?: string;
  'field-of-view'?: string;
  'max-camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'environment-image'?: string;
  exposure?: string;
  'shadow-intensity'?: string;
  'shadow-softness'?: string;
  onLoad?: () => void;
  onError?: (error: CustomEvent<{ type: string; message: string }>) => void;
  className?: string;
  style?: React.CSSProperties;
}

// Extend the JSX.IntrinsicElements interface
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'ar-modes'?: string;
    'camera-controls'?: boolean;
    'auto-rotate'?: boolean;
    'rotation-per-second'?: string;
    'field-of-view'?: string;
    'max-camera-orbit'?: string;
    'min-camera-orbit'?: string;
    'environment-image'?: string;
    'shadow-intensity'?: string;
    'shadow-softness'?: string;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'model-viewer': CustomModelViewerElement;
  }
}

const ModelViewer = React.forwardRef<CustomModelViewerElement, ModelViewerProps>(
  ({ onLoad, onError, ...props }, ref) => {
    const localRef = useRef<CustomModelViewerElement>(null);
    const modelViewerRef = (ref || localRef) as React.RefObject<CustomModelViewerElement>;

    useEffect(() => {
      const modelViewer = modelViewerRef.current;

      if (modelViewer) {
        if (onLoad) {
          modelViewer.addEventListener('load', onLoad);
        }
        if (onError) {
          modelViewer.addEventListener('error', onError);
        }
      }

      return () => {
        if (modelViewer) {
          if (onLoad) {
            modelViewer.removeEventListener('load', onLoad);
          }
          if (onError) {
            modelViewer.removeEventListener('error', onError);
          }
        }
      };
    }, [onLoad, onError, modelViewerRef]);

    // @ts-expect-error model-viewer not a JSX.intrinsicElement
    return <model-viewer ref={modelViewerRef} {...props} />;
  }
);

ModelViewer.displayName = 'ModelViewer';

export default ModelViewer;
