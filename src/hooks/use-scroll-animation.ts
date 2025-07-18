
'use client';

import { useState, useEffect, useRef } from 'react';

type IntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useScrollAnimation(options: IntersectionObserverOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
