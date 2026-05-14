import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Segment {
  text: string;
  className?: string;
}

interface Props {
  segments: Segment[];
  className?: string;
}

/**
 * Takes an array of {text, className} segments, splits each into individual words
 * while preserving per-segment styling, and animates each word with a staggered
 * pull-up (y:20 to y:0) on viewport entry.
 */
export default function WordsPullUpMultiStyle({ segments, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const allWords: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((word) => {
      if (word.length > 0) allWords.push({ word, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((entry, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block mr-[0.18em] ${entry.className || ''}`}
        >
          {entry.word}
        </motion.span>
      ))}
    </div>
  );
}
