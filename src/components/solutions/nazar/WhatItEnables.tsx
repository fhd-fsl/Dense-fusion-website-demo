import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/solutions/nazar/Drone-2 Streamline Micro.svg",
    title: "Live Fleet Monitoring",
    description: "Monitor multiple UAVs through real-time flight status, GPS position, telemetry, and sensor data.",
  },
  {
    icon: "/assets/solutions/nazar/map.svg",
    title: "Tactical Geospatial View",
    description: "Track live flight paths and drone locations through an interactive map-based command interface.",
  },
  {
    icon: "/assets/solutions/nazar/Radio-Tower-Signal-3 Streamline Nova.svg",
    title: "Telemetry Intelligence",
    description: "Monitor battery, speed, heading, altitude, signal strength, flight attitude, and system uptime.",
  },
  {
    icon: "/assets/solutions/nazar/Speed-Fill Streamline Sharp-Fill-Streamline-Material-Free.svg",
    title: "Sensor Monitoring",
    description: "View LiDAR measurements and sensor quality data alongside live flight information.",
  },
  {
    icon: "/assets/solutions/nazar/Threat-Document Streamline Core.svg",
    title: "Edge Alert Detection",
    description: "Identify low battery conditions, sensor faults, and other edge-level alerts in real time.",
  },
  {
    icon: "/assets/solutions/nazar/Shield-Check Streamline Core.svg",
    title: "Resilient Fleet Operations",
    description: "Maintain reliable monitoring with automatic reconnection and clear offline or disconnected states.",
  },
];

export default function WhatItEnables() {
  return (
    <section className="bg-[#1b7948] py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What Nazar Enables
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Intelligent Monitoring For Aerial Operations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-[#eaf4ed]">
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                </div>
                <h3 className="text-xl font-bold text-secondaryBlack mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
