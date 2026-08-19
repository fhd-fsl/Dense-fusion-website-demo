import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionsWorkedOn() {
  return (
    <section id="solutions" className="bg-white pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-4 tracking-tight">
              Solutions We Worked On
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-4xl leading-relaxed">
              Our solutions harness advanced geospatial technologies and satellite imagery to deliver accurate insights, enable long-term monitoring, and help organizations understand environmental and urban transformations.
            </p>
          </div>
        </ScrollReveal>

        {/* Full-width Image */}
        <ScrollReveal delay={0.2}>
          <div className="w-full relative h-[250px] sm:h-[350px] md:h-[600px] rounded-xl overflow-hidden mb-24 shadow-lg">
            <Image 
              src="/assets/solutions/solutions we worked on.svg" 
              alt="Solutions We Worked On" 
              fill 
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* PlantX Section (White Background) */}
      <div id="plantx" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent mb-3 tracking-tight">PlantX</h3>
                <h4 className="text-base font-bold text-secondaryBlack mb-2">
                  AI-Powered Monitoring for Land & Environmental Change
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  PlantX is an advanced geospatial platform designed to analyze satellite imagery and monitor changes across landscapes over time. It helps organizations understand land-use patterns, environmental changes, and urban development through visual and data-driven insights.
                </p>
                
                <div className="flex flex-col gap-3">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Land Cover Monitoring</h5>
                    <p className="text-sm text-gray-500">Track changes in vegetation, built-up areas, water bodies, and other land-cover types.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Satellite Imagery Analysis</h5>
                    <p className="text-sm text-gray-500">Analyze satellite imagery to identify and visualize changes across geographic areas.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Urban Growth Monitoring</h5>
                    <p className="text-sm text-gray-500">Understand how cities and surrounding landscapes evolve over time.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Historical Change Analysis</h5>
                    <p className="text-sm text-gray-500">Compare data across multiple years to identify long-term environmental and urban trends.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.2} className="flex flex-col items-start justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl mb-6">
                  <Image src="/assets/solutions/PlantX Map Graphic.svg" alt="PlantX Graphic" fill className="object-cover" />
                </div>
                <Link href="/solutions/plantx" className="group relative inline-flex items-center gap-1 rounded text-sm font-bold text-[#006D40]">
                  <span className="relative">
                    View PlantX Case study <span aria-hidden="true">&rarr;</span>
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#006D40] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Serena Green Section (Light Gray Background) */}
      <div className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal className="flex flex-col items-start justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl mb-6">
                  <Image src="/assets/solutions/Serena Green Map Graphic.svg" alt="Serena Green Graphic" fill className="object-cover" />
                </div>
                <Link href="/solutions/serenagreen" className="group relative inline-flex items-center gap-1 rounded text-sm font-bold text-secondaryBlack">
                  <span className="relative">
                    View Serena Green Case study <span aria-hidden="true">&rarr;</span>
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-secondaryBlack transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
              </ScrollReveal>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#006D40] to-[#6DC27F] bg-clip-text text-transparent mb-3 tracking-tight">Serena Green</h3>
                <h4 className="text-base font-bold text-secondaryBlack mb-2">
                  Monitoring Forests for a Greener Future
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Serena Green leverages cutting-edge geospatial intelligence to monitor global forest cover and combat climate challenges. Our satellite-based platform tracking change detection enables teams to inspect deforestation trends with precision.
                </p>
                
                <div className="flex flex-col gap-3">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Forest Monitoring</h5>
                    <p className="text-sm text-gray-500">Evaluate global forest health, density index, and regional carbon absorption trends.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Afforestation Monitoring</h5>
                    <p className="text-sm text-gray-500">Measure and verify ongoing tree plantation and rehabilitation project bounds over time.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Satellite-Based Analysis</h5>
                    <p className="text-sm text-gray-500">Harness deep optical and radar satellite imagery for cloud-penetrative landscape observation.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Change Detection</h5>
                    <p className="text-sm text-gray-500">Establish algorithmic base triggers that flag illegal logging or rapid cover depletion.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Carbon Eye Section (Dark Background) */}
      <div className="bg-[#050505] py-16 md:py-24 text-white">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal>
                <h3 className="text-4xl md:text-5xl font-bold text-[#6DC27F] mb-3 tracking-tight">Carbon Eye</h3>
                <h4 className="text-base font-bold text-white mb-2">
                  Data-Driven Insights for Carbon & Environmental Monitoring
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Carbon Eye provides enterprise and defense teams with deep carbon estimation models. Powered by advanced spatial datasets, the system calculates vegetation density, environmental trends, and emission models.
                </p>
                
                <div className="flex flex-col gap-3">
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Carbon Monitoring</h5>
                    <p className="text-sm text-gray-400">Deploy biomass calculations that estimate total forest and crop carbon storage capacity.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Satellite-Based Insights</h5>
                    <p className="text-sm text-gray-400">Run automatic radiometric calibrations over dense regions for precise raw ground assessment.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Environmental Trend Analysis</h5>
                    <p className="text-sm text-gray-400">Compare multiple seasonal records to distinguish periodic weather impact from actual decline.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Geospatial Intelligence</h5>
                    <p className="text-sm text-gray-400">Overlay global transport, urban infrastructure, and industrial borders to map point-source carbon plumes.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.2} className="flex flex-col items-start justify-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl mb-6">
                  <Image src="/assets/solutions/CarbonEye Map Graphic.svg" alt="Carbon Eye Graphic" fill className="object-cover" />
                </div>
                <Link href="/solutions/carboneye" className="group relative inline-flex items-center gap-1 rounded text-sm font-bold text-white">
                  <span className="relative">
                    View Carbon Eye Case study <span aria-hidden="true">&rarr;</span>
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
