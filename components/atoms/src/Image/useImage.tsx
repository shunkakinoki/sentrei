import {
  ImgHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
} from "react";

export interface UseImageProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  // eslint-disable-next-line no-unused-vars
  onLoad?(event: SyntheticEvent<HTMLImageElement, Event>): void;
  // eslint-disable-next-line no-unused-vars
  onError?(error: string | SyntheticEvent<HTMLImageElement, Event>): void;
  ignoreFallback?: boolean;
  crossOrigin?: ImgHTMLAttributes<any>["crossOrigin"];
}

type Status = "loading" | "failed" | "pending" | "loaded";

type ImageEvent = SyntheticEvent<HTMLImageElement, Event>;

/**
 * Loads an image in the browser, and know the `status`.
 * @returns the status of the image loading progress
 */
export const UseImage = (props: UseImageProps) => {
  const { src, srcSet, onLoad, onError, crossOrigin, sizes, ignoreFallback } =
    props;

  const [status, setStatus] = useState<Status>("pending");

  useEffect(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);

  const imageRef = useRef<HTMLImageElement | null>();

  const load = useCallback(() => {
    if (!src) return;
    flush();

    const img = new Image();
    img.src = src;

    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }

    if (srcSet) {
      img.srcset = srcSet;
    }

    if (sizes) {
      img.sizes = sizes;
    }

    img.onload = event => {
      flush();
      setStatus("loaded");
      onLoad?.(event as unknown as ImageEvent);
    };
    img.onerror = error => {
      flush();
      setStatus("failed");
      onError?.(error as any);
    };

    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError]);

  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };

  useEffect(() => {
    if (ignoreFallback) return undefined;

    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);

  return ignoreFallback ? "loaded" : status;
};

export type UseImageReturn = ReturnType<typeof UseImage>;
