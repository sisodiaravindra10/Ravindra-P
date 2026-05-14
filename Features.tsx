import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const ICON_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85';
const ICON_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85';
const ICON_3 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85';

interface FeatureCardProps {
  index: number;
  num: string;
  iconSrc: string;
  title: string;
  items: string[];
}

function FeatureCard({ index, num, iconSrc, title, items }: FeatureCardProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.article
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#212121] rounded-2xl md:rounded-3xl p-6 lg:p-8 flex flex-col h-full"
    >
      <img
        src={iconSrc}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-6 object-cover"
        loading="lazy"
      />
      <h3 className="text-primary text-base md:text-lg lg:text-xl m-0">
        <span className="text-gray-500 mr-2 font-normal">{num}</span>
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 text-primary text-[10px] sm:text-xs uppercase tracking-[0.14em] hover:gap-3 transition-all"
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
      </a>
    </motion.article>
  );
}

export default function Features() {
  const videoRef = useRef<HTMLDivElement>(null);
  const videoInView = useInView(videoRef, { once: true, margin: '-100px' });

  return (
    <section
      id="approach"
      className="min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 relative"
    >
      {/* subtle background noise */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl mx-auto leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Senior-grade workflows for visionary teams.',
                  className: 'text-primary',
                },
              ]}
            />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl mx-auto leading-tight mt-2">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Built for systems. Powered by code.',
                  className: 'text-gray-500',
                },
              ]}
            />
          </div>
        </div>

        {/* 4-column grid: video + 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
          {/* Card 1 — video */}
          <motion.div
            ref={videoRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={videoInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#212121] rounded-2xl md:rounded-3xl relative overflow-hidden h-64 md:h-80 lg:h-full"
          >
            <video
              src={HERO_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
              <span style={{ color: '#E1E0CC' }} className="text-lg md:text-xl">
                Design, in code.
              </span>
            </div>
          </motion.div>

          <FeatureCard
            index={1}
            num="01"
            iconSrc={ICON_1}
            title="Design Systems."
            items={[
              'Figma variables, tokens, motion, and components.',
              'Markdown-based AI documentation that LLMs can read.',
              '20+ modules at Zop.Dev built on one source of truth.',
              'Zero off-system overrides shipped to production.',
            ]}
          />

          <FeatureCard
            index={2}
            num="02"
            iconSrc={ICON_2}
            title="AI-Augmented Workflows."
            items={[
              'Claude Code as the daily implementation engine.',
              'Figma MCP bridges design tokens directly to code.',
              'Prompt engineering tuned for design intent fidelity.',
            ]}
          />

          <FeatureCard
            index={3}
            num="03"
            iconSrc={ICON_3}
            title="Production Velocity."
            items={[
              'Brief to high-fidelity prototype in a single session.',
              '75 to 80% production fidelity from the first frame.',
              'AI-readable systems compress days into minutes.',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
