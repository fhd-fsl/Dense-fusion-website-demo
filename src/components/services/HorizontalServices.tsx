"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const servicesData = [
  {
    id: 1,
    title: "Supercomputing Consulting",
    description: "Assess your computing environment and develop a scalable HPC strategy that maximizes performance, efficiency, and long-term value.",
    bullets: [
      "HPC Strategy & Feasibility Studies",
      "Advanced Infrastructure Planning",
      "Network Fabric Optimization"
    ],
    image: "/assets/services/services-card-1.svg"
  },
  {
    id: 2,
    title: "HPC Infrastructure Design",
    description: "Design and deploy reliable HPC infrastructure tailored for AI, research, simulation, and data-intensive workloads.",
    bullets: [
      "Custom HPC cluster design",
      "GPU & CPU architecture",
      "High-speed networking"
    ],
    image: "/assets/services/services-card-2.svg"
  },
  {
    id: 3,
    title: "AI + HPC Integration",
    description: "Combine AI and HPC to train larger models faster, process massive datasets, and scale intelligent applications with confidence.",
    bullets: [
      "Distributed AI training",
      "Generative AI deployment",
      "Large language models (LLMs)"
    ],
    image: "/assets/services/services-card-3.svg"
  },
  {
    id: 4,
    title: "Software Stack Optimization",
    description: "Optimize your software ecosystem to improve speed, scalability, and resource utilization across HPC workloads.",
    bullets: [
      "HPC software stack optimization",
      "AI framework tuning",
      "Compiler & library optimization"
    ],
    image: "/assets/services/services-card-4.svg"
  },
  {
    id: 5,
    title: "Domain-Specific Solutions",
    description: "Develop intelligent solutions designed to address complex challenges across specialized industries and research domains.",
    bullets: [
      "Geospatial intelligence & GIS",
      "Climate & environmental modeling",
      "Bioinformatics pipelines"
    ],
    image: "/assets/services/services-card-5.svg"
  },
  {
    id: 6,
    title: "Training & Enablement",
    description: "Equip your teams with the knowledge and skills needed to successfully deploy, manage, and optimize AI and HPC environments.",
    bullets: [
      "HPC bootcamps",
      "Cluster administration training",
      "Certification programs"
    ],
    image: "/assets/services/services-card-6.svg"
  }
];

export default function HorizontalServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Wheel state
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 150; // amount of wheel scroll needed to change slide

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) { // 50px threshold for drag
      if (diff > 0 && activeIndex < servicesData.length - 1) {
        setActiveIndex(curr => curr + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(curr => curr - 1);
      }
    }
  };

  // Auto-rotate slides
  useEffect(() => {
    if (isHovered || isDragging) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isDragging]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only process horizontal wheel scrolls, or allow vertical if they are hovering over the cards?
      // Since the user didn't want vertical scrolling blocked, we will only listen to horizontal deltaX
      // (like from a trackpad swipe) to change cards.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault(); // Prevent native back/forward navigation on trackpad
        scrollAccumulator.current += e.deltaX;
        
        if (scrollAccumulator.current > SCROLL_THRESHOLD) {
          setActiveIndex(curr => Math.min(curr + 1, servicesData.length - 1));
          scrollAccumulator.current = 0;
        } else if (scrollAccumulator.current < -SCROLL_THRESHOLD) {
          setActiveIndex(curr => Math.max(curr - 1, 0));
          scrollAccumulator.current = 0;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeIndex]);

  return (
    <section className="bg-white py-16 md:py-24 relative border-y border-gray-100">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12 flex flex-col">
        
        <ScrollReveal>
          {/* Top Heading */}
          <div className="mb-8 md:mb-12">
            <div className="h-6 mb-2 transition-opacity duration-300">
              {activeIndex > 0 && (
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {servicesData[activeIndex].title} - {activeIndex + 1}
                </p>
              )}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black tracking-tight">
              Comprehensive Technology Services
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
              Whether you're building an AI platform, deploying HPC infrastructure, or modernizing research and enterprise workflows, DenseFusion provides the expertise and technology to deliver measurable results.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          {/* Discrete Slider Card Container */}
          <div 
            ref={containerRef}
            className="w-full bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden relative cursor-grab active:cursor-grabbing touch-pan-y"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={(e) => {
              setIsHovered(false);
              handleDragEnd(e);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            {/* Grid stack used so parent height perfectly fits the tallest child */}
            <div className="grid">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id}
                  className={`col-start-1 row-start-1 flex flex-col md:flex-row transition-all duration-500 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0 z-10 pointer-events-auto' 
                      : activeIndex > index 
                        ? 'opacity-0 -translate-x-12 z-0 pointer-events-none'
                        : 'opacity-0 translate-x-12 z-0 pointer-events-none'
                  }`}
                >
                  {/* Left Content (Text) */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white pointer-events-none md:pointer-events-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-gradientGreen1 from-15% via-gradientGreen2 via-55% to-lightGreen">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="flex flex-col gap-4 mb-10">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 shrink-0">
                            <Image src="/assets/services/tick.svg" alt="Check" width={20} height={20} />
                          </div>
                          <span className="text-gray-800 text-sm md:text-base font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link href="#" className="inline-flex items-center text-gray-600 hover:text-[#1b8e44] text-sm font-semibold transition-colors duration-300">
                        Explore Service 
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Content (Image) */}
                  <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative bg-gray-50 pointer-events-none">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom Separated Progress Bar */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
            {servicesData.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="py-4 focus:outline-none flex-1 max-w-[120px] group flex items-center"
              >
                <div 
                  className={`rounded-full transition-all duration-300 w-full ${
                    activeIndex === index 
                      ? 'bg-[#1b8e44] h-1.5' 
                      : 'bg-gray-300 h-1 group-hover:bg-[#1b8e44]/50 group-hover:h-1.5'
                  }`}
                />
              </button>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
