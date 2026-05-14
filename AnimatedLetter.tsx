import { motion, MotionValue, useTransform } from 'framer-motion';

interface Props {
  char: string;
  index: number;
  totalChars: number;
  scrollProgress: MotionValue<number>;
}

/**
 * One character whose opacity transitions from 0.2 to 1 based on scroll progress.
 * Each character has its own scroll range (charProgress ± window), creating
 * a progressive left-to-right reveal as the body scrolls into view.
 */
export default function AnimatedLetter({ char, index, totalChars, scrollProgress }: Props) {
  const charProgress = index / totalChars;
  const opacity = useTransform(
    scrollProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline">
      {char === ' ' ? ' ' : char}
    </motion.span>
  );
}
