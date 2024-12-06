import ImageSlider from '../components/ImageSlider';
import { useEffect, useState } from 'react';

const Hero = () => {
  const phrases = [
    "modern designs.",
    "timeless architecture.",
    "your dream spaces.",
  ];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < phrases[phraseIndex].length) {
        setCurrentPhrase((prev) => prev + phrases[phraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentPhrase((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting && charIndex === 0 ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <section
      className="relative h-screen w-full flex flex-col overflow-hidden bg-black"
      id="home"
    >
      {/* Background Image Slider */}
      <ImageSlider />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4 md:px-6 landscape:gap-2">
        <h1
          className="font-semibold text-white leading-snug md:leading-tight tracking-tight animate-fade-down"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
          }}
        >
          Envisioning Your Future Space
        </h1>
        <p
          className="mt-4 text-gray-300 leading-relaxed animate-fade-up"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            maxWidth: 'clamp(20rem, 80%, 40rem)',
          }}
        >
          Building <span className="text-white font-bold">{currentPhrase}</span>
        </p>
        <p
          className="mt-2 text-gray-400"
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
          }}
        >
          Let's create something beautiful together.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="#contact"
            aria-label="Start Your Project"
            className="group w-fit"
          >
            <div 
              className="
                bg-white/10 
                text-white font-medium 
                rounded-full 
                relative 
                overflow-hidden 
                transition-all duration-500 ease-out 
                hover:scale-[1.02] 
                border border-white/20 
                hover:border-white/40 
                backdrop-blur-sm
                text-base sm:text-lg
                px-6 sm:px-8 md:px-10
                py-2.5 sm:py-3 md:py-4
              "
            >
              <span className="relative z-10 group-hover:text-white whitespace-nowrap">
                Start Your Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
            </div>
          </a>
        </div>

        {/* Mobile version - shows below button */}
        <span className="text-white/90 text-sm animate-bounce mt-6 md:hidden">
          ↓ Explore Our Projects Below
        </span>

        {/* Desktop version - shows at bottom */}
        <div className="absolute bottom-8 w-full hidden md:flex justify-center z-30">
          <span className="text-white/90 text-sm animate-bounce">
            ↓ Explore Our Projects Below
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
