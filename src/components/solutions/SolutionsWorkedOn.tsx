import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function SolutionsWorkedOn() {
  return (
    <section id="solutions" className="bg-white pt-16 md:pt-24 pb-0 md:pb-0">
      <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondaryBlack mb-4 tracking-tight">
              Solutions We Worked On
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-4xl leading-relaxed">
              From environmental monitoring and sustainable plantation management to agricultural intelligence and HPC infrastructure, our solutions transform complex data and technical challenges into practical, scalable systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Full-width Image */}
        <ScrollReveal delay={0.2}>
          <div className="w-full relative h-[250px] sm:h-[350px] md:h-[600px] rounded-xl overflow-hidden mb-0 shadow-lg">
            <Image 
              src="/assets/solutions/solutions we worked on.svg" 
              alt="Solutions We Worked On" 
              fill 
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Serena Green Section (White Background) */}
      <div id="serenagreen" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal>
                <h3 className="text-4xl md:text-5xl font-bold text-[#006D40] mb-3 tracking-tight">SERENA GREEN</h3>
                <h4 className="text-lg md:text-xl font-bold text-secondaryBlack mb-3">
                  Geospatial Intelligence for Forest &amp; Environmental Monitoring
                </h4>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  Serena Green is an enterprise geospatial and ESG intelligence platform that combines satellite Earth observation, GIS, machine learning, carbon modeling, and environmental data to help organizations monitor forests, afforestation, and environmental impact.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Forest &amp; Vegetation Monitoring</h5>
                    <p className="text-sm text-gray-500">Track forest coverage, vegetation health, and land-cover changes over time.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Carbon &amp; Ecological Analytics</h5>
                    <p className="text-sm text-gray-500">Estimate biomass, carbon stocks, and CO2 sequestration using data-driven models.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Environmental Monitoring</h5>
                    <p className="text-sm text-gray-500">Monitor plantation activities, energy, waste, and water-related environmental metrics.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Interactive Geospatial Intelligence</h5>
                    <p className="text-sm text-gray-500">Explore environmental data through satellite imagery, maps, dashboards, and time-based analysis.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.2} className="flex flex-col items-start justify-center">
                <div className="relative w-full mb-6 flex justify-center lg:justify-start">
                  <Image src="/assets/solutions/Serena Green Map Graphic.svg" alt="Serena Green Graphic" width={800} height={600} className="w-full h-auto object-contain" />
                </div>
                <Link
                  href="/solutions/serenagreen"
                  className="inline-flex h-11 items-center justify-center rounded-[4px] bg-[#e5e7eb] px-5 text-sm font-semibold text-secondaryBlack shadow-sm transition-colors hover:bg-gray-300"
                >
                  View Solution ↗
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* VERISAT Section (Light Gray Background) */}
      <div id="verisat" className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal className="flex flex-col items-start justify-center">
                <div className="relative w-full mb-6 flex justify-center lg:justify-start">
                  <Image src="/assets/solutions/Verisat graphic.svg" alt="VERISAT Graphic" width={800} height={600} className="w-full h-auto object-contain" />
                </div>
                <Link
                  href="/solutions/verisat"
                  className="inline-flex h-11 items-center justify-center rounded-[4px] bg-white border border-gray-200 px-5 text-sm font-semibold text-secondaryBlack shadow-sm transition-colors hover:bg-gray-50"
                >
                  View Solution ↗
                </Link>
              </ScrollReveal>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <h3 className="text-4xl md:text-5xl font-bold text-[#006D40] mb-3 tracking-tight">VERISAT</h3>
                <h4 className="text-lg md:text-xl font-bold text-secondaryBlack mb-3">
                  Verified Intelligence for Tree Plantations &amp; Carbon Monitoring
                </h4>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  VERISAT is a tree-plantation monitoring and carbon-stock reporting platform that combines satellite and drone imagery, multi-temporal analysis, carbon estimation, and MRV capabilities to provide verifiable insights into plantation outcomes.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Plantation Monitoring</h5>
                    <p className="text-sm text-gray-500">Track plantation sites, species, planting counts, and survival performance.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Satellite &amp; Drone Analysis</h5>
                    <p className="text-sm text-gray-500">Analyze imagery to identify changes in green coverage and plantation conditions.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Carbon Stock Estimation</h5>
                    <p className="text-sm text-gray-500">Calculate site- and species-level carbon stocks using IPCC-based methodologies.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">MRV &amp; Evidence Management</h5>
                    <p className="text-sm text-gray-500">Maintain evidence records, spatial verification, and confidence-based monitoring for transparent reporting.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* SUPERCOMPUTERS Section (Dark Background) */}
      <div id="supercomputers" className="bg-[#050505] py-16 md:py-24 text-white">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal>
                <h3 className="text-4xl md:text-5xl font-bold text-[#6DC27F] mb-3 tracking-tight">SUPERCOMPUTERS</h3>
                <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                  Intelligent Infrastructure for High-Performance Computing
                </h4>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  Teraforge is an enterprise platform for refurbished HPC hardware that combines hardware discovery, configuration, compatibility validation, and technical quotation into a single system.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">HPC Hardware Configuration</h5>
                    <p className="text-sm text-gray-400">Explore and configure AI workstations, GPU servers, and high-performance computing systems.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Compatibility Intelligence</h5>
                    <p className="text-sm text-gray-400">Automatically validate hardware configurations against technical, thermal, power, and physical constraints.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">3D Configuration</h5>
                    <p className="text-sm text-gray-400">Visualize hardware builds through a procedural 3D configurator based on real component dimensions.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Enterprise Quotation</h5>
                    <p className="text-sm text-gray-400">Generate detailed technical quotations with configuration specifications and derived performance metrics.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.2} className="flex flex-col items-start justify-center">
                <div className="relative w-full mb-6 flex justify-center lg:justify-start">
                  <Image src="/assets/solutions/Supercomputers graphic.svg" alt="SUPERCOMPUTERS Graphic" width={800} height={600} className="w-full h-auto object-contain" />
                </div>
                <Link
                  href="/solutions/supercomputers"
                  className="inline-flex h-11 items-center justify-center rounded-[4px] bg-[#1a1a1a] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
                >
                  View Solution ↗
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* AGROVIA Section (White Background) */}
      <div id="agrovia" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal>
                <h3 className="text-4xl md:text-5xl font-bold text-[#006D40] mb-3 tracking-tight">AGROVIA</h3>
                <h4 className="text-lg md:text-xl font-bold text-secondaryBlack mb-3">
                  Connected Intelligence for Modern Agriculture
                </h4>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  FAMS is an agricultural advisory and service management platform that connects AI-powered crop intelligence with field agents, service center managers, agronomists, and farmers.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">AI-Assisted Crop Monitoring</h5>
                    <p className="text-sm text-gray-500">Validate satellite-detected crop anomalies and support informed agricultural decisions.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Field Verification</h5>
                    <p className="text-sm text-gray-500">Connect AI-generated advisories with on-ground field agents for real-world verification.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Offline-First Operations</h5>
                    <p className="text-sm text-gray-500">Continue essential agricultural workflows in areas with limited or intermittent connectivity.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Agricultural Service Management</h5>
                    <p className="text-sm text-gray-500">Manage machinery, agricultural inputs, pricing, fulfillment, and farmer requests through a unified platform.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.2} className="flex flex-col items-start justify-center">
                <div className="relative w-full mb-6 flex justify-center lg:justify-start">
                  <Image src="/assets/solutions/Agrovia Graphic.svg" alt="AGROVIA Graphic" width={800} height={600} className="w-full h-auto object-contain" />
                </div>
                <Link
                  href="/solutions/agrovia"
                  className="inline-flex h-11 items-center justify-center rounded-[4px] bg-[#e5e7eb] px-5 text-sm font-semibold text-secondaryBlack shadow-sm transition-colors hover:bg-gray-300"
                >
                  View Solution ↗
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* OGDCL Section (Light Gray Background) */}
      <div id="ogdcl" className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal className="flex flex-col items-start justify-center">
                <div className="relative w-full mb-6 flex justify-center lg:justify-start">
                  <Image src="/assets/solutions/OGDCL graphic.svg" alt="OGDCL Graphic" width={800} height={600} className="w-full h-auto object-contain" />
                </div>
                <Link
                  href="/solutions/ogdcl"
                  className="inline-flex h-11 items-center justify-center rounded-[4px] bg-white border border-gray-200 px-5 text-sm font-semibold text-secondaryBlack shadow-sm transition-colors hover:bg-gray-50"
                >
                  View Solution ↗
                </Link>
              </ScrollReveal>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <h3 className="text-4xl md:text-5xl font-bold text-[#006D40] mb-3 tracking-tight">OGDCL</h3>
                <h4 className="text-lg md:text-xl font-bold text-secondaryBlack mb-3">
                  Sustainability &amp; Plantation Monitoring
                </h4>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  A web-based platform designed to manage and monitor large-scale plantation and reforestation programs. The system combines satellite imagery, geographic site mapping, plantation data, and carbon analytics to provide organizations with a clear view of environmental progress.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Plantation Site Management</h5>
                    <p className="text-sm text-gray-500">Manage plantation sites through structured organizational and geographic hierarchies.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Tree Survival &amp; Carbon Tracking</h5>
                    <p className="text-sm text-gray-500">Monitor tree survival rates, species composition, and estimated carbon stock.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Satellite-Based Analysis</h5>
                    <p className="text-sm text-gray-500">Visualize site boundaries, vegetation classifications, and environmental changes through satellite imagery.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="text-base font-bold text-secondaryBlack mb-1">Reporting &amp; Administration</h5>
                    <p className="text-sm text-gray-500">Generate site-level and category-level insights while managing data through role-based administration.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* NAZAR Section (Dark Background) */}
      <div id="nazar" className="bg-[#050505] py-16 md:py-24 text-white border-b border-gray-800">
        <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal>
                <h3 className="text-4xl md:text-5xl font-bold text-[#6DC27F] mb-3 tracking-tight">NAZAR</h3>
                <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                  Real-Time Intelligence for Autonomous Aerial Operations
                </h4>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  SURAGH is a real-time tactical command and aerial reconnaissance platform for monitoring autonomous UAV fleets. It combines live telemetry, geospatial visualization, sensor data, and edge alerts into a centralized operational view.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Real-Time Fleet Monitoring</h5>
                    <p className="text-sm text-gray-400">Track autonomous UAVs, flight paths, status, battery levels, and live telemetry from a centralized dashboard.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Tactical Geospatial Visualization</h5>
                    <p className="text-sm text-gray-400">Monitor UAV locations and movement through an interactive map with real-time flight trails and operational data.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Sensor &amp; Edge Monitoring</h5>
                    <p className="text-sm text-gray-400">Monitor onboard sensors and receive alerts for low battery, sensor faults, and other critical conditions.</p>
                  </div>
                  <div className="border-b border-gray-800 pb-3">
                    <h5 className="text-base font-bold text-white mb-1">Resilient Fleet Operations</h5>
                    <p className="text-sm text-gray-400">Maintain reliable fleet visibility with automatic reconnection and real-time updates, even during connectivity interruptions.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.2} className="flex flex-col items-start justify-center">
                <div className="relative w-full mb-6 flex justify-center lg:justify-start">
                  <Image src="/assets/solutions/Nazar Graphic.svg" alt="NAZAR Graphic" width={800} height={600} className="w-full h-auto object-contain" />
                </div>
                <Link
                  href="/solutions/nazar"
                  className="inline-flex h-11 items-center justify-center rounded-[4px] bg-[#1a1a1a] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
                >
                  View Solution ↗
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
