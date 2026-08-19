import ScrollReveal from "@/components/ScrollReveal";

export default function Overview() {
  return (
    <section className="bg-white py-20 md:py-32 text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <ScrollReveal>
          <p className="font-bold text-lg md:text-xl mb-4 tracking-wide bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent">
            Understanding How Landscapes Change
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondaryBlack mb-8 tracking-tight">
            Turning Satellite Data Into Actionable Intelligence
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Landscapes are constantly changing due to urbanization, development, environmental 
            shifts, and human activity. PlantX helps organizations monitor these changes by 
            transforming satellite imagery and geospatial data into clear, visual insights.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
