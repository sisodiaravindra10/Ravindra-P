import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

/**
 * Splits text by spaces and slides each word up from y:20 with staggered delay.
 * If showAsterisk is true, adds a superscript "*" after the last character of the last word.
 */
export default function WordsPullUp({ text, className = '', showAsterisk = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block mr-[0.18em] relative"
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
