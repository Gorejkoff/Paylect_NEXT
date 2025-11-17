'use client'

import { useRef, useEffect, useState } from 'react';

export default function useResizeObserver() {
   const ref = useRef(null);
   const [dimensions, setDimensions] = useState(null);


   useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const resizeObserver = new ResizeObserver(entries => {
         entries.forEach(entry => {
            const { width, height } = entry.contentRect;
            setDimensions({ width, height });
         });
      });

      resizeObserver.observe(element);

      return () => {
         resizeObserver.unobserve(element);
      };
   }, []);

   return [ref, dimensions];
};