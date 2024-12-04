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
        <a
          href="#contact"
          aria-label="Work With Us section"
          className="mt-8 group w-fit"
        >
          <div
            className="
              px-8 py-3
              bg-gradient-to-r from-gray-800 to-gray-800
              text-white font-semibold
              rounded-lg shadow-md
              relative
              overflow-hidden
              transition-all duration-300 transform-gpu
              hover:scale-105 hover:shadow-lg hover:bg-gray-700
            "
            style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
              padding: 'clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 2rem)',
            }}
          >
            {/** me bon tekstin white  */} 
            <span className="relative z-10 group-hover:text-gray-900">
              Start Your Project
            </span>
            <div
              className="
                absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600
                opacity-0 group-hover:opacity-100
                transition-all duration-500
              "
            ></div>
          </div>
        </a>
      </div>

      {/* Stylish Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center z-30">
        <div className="flex flex-col items-center">
          <p className="text-xs sm:text-sm text-gray-100 mb-2 animate-fade">
            Scroll Down
          </p>
          <div className="relative w-10 h-10 flex justify-center items-center">
            <div className="absolute w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full animate-bounce delay-400"></div>
            <svg
              className="w-8 h-8 text-white animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
