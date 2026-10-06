import ScrollReveal from "@/components/ScrollReveal";

export default function Overview() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-32 text-center">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <p className="font-semibold text-base md:text-lg mb-4 text-[#006D40]">
            Monitor Autonomous Fleets In Real Time
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-8 tracking-tight">
            From UAV Telemetry to Tactical Intelligence
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Nazar brings drone telemetry, flight paths, sensor data, and system alerts into a unified command interface, helping teams maintain real-time visibility across autonomous aerial operations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
