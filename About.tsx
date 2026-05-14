import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const BODY_TEXT =
  'Over the last five years, I have worked with Zop.Dev in Bangalore, ScreenRoot in Goa, ArtWorksIT and FirstCry. Together, we have shipped 20+ feature modules, $53.5K+ in annualised savings, and a Figma-variables design system used across enterprise customers.';

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');

  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-6" id="about">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] p-8 md:p-16 lg:p-24 text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.18em] block mb-8">
          Product design
        </span>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Ravindra Sisodia,', className: 'font-normal' },
              { text: 'a designer fluent in code.', className: 'italic font-serif' },
              {
                text: 'I have skills in design systems, AI-augmented workflows, and interaction design.',
                className: 'font-normal',
              },
            ]}
          />
        </div>

        <p
          ref={ref}
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
          style={{ color: '#DEDBC8', lineHeight: 1.55 }}
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              totalChars={chars.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
