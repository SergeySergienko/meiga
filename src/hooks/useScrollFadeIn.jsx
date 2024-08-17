import { useEffect } from 'react';

export const useScrollFadeIn = () => {
  useEffect(() => {
    const photos = document.querySelectorAll('.photo');

    const animate = (entry) => {
      const ratio = entry.intersectionRatio;
      const scale = 0.8 + (1 - 0.8) * 2 * ratio;
      const opacity = ratio * 2;

      entry.target.style.transform = `scale(${scale})`;
      entry.target.style.opacity = opacity;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && entry.intersectionRatio <= 0.5) {
            requestAnimationFrame(() => animate(entry));
          }
        });
      },
      {
        threshold: Array.from(Array(51).keys(), (x) => x / 100),
      }
    );

    photos.forEach((photo) => {
      observer.observe(photo);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
};
