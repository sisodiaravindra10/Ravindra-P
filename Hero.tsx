import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const NAV_ITEMS = ['Work', 'About', 'Approach', 'Writing', 'Inquiries'];

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar hanging from top */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-20">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] sm:text-xs md:text-sm transition-colors"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E1E0CC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom-aligned content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14 z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
            {/* Left: giant heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] m-0"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="Ravindra" showAsterisk />
              </h1>
            </div>

            {/* Right: description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Ravindra is a senior product designer building at the intersection of design and code.
                Five years across B2B SaaS, FinTech, and enterprise. Now pioneering AI-augmented
                workflows with Claude Code and Figma MCP.
              </motion.p>

              <motion.a
                href="mailto:sisodia.ravindra10@gmail.com"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-1 py-1 w-fit transition-all"
              >
                <span className="text-black font-medium text-sm sm:text-base">Join the lab</span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
