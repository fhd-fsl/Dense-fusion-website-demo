import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'src', 'components', 'industries', 'climate');

const replacements = {
  'ClimateHero.tsx': [
    ['Advanced Computing\n                <br className="hidden md:block" /> for Mission-Critical\n                <br className="hidden md:block" /> Operations', 
     'Computing for a\n                <br className="hidden md:block" /> Changing\n                <br className="hidden md:block" /> Climate'],
    ['DenseFusion combines AI and high-performance computing to help climate organizations process complex data, accelerate intelligence, and support faster, more informed decisions.',
     'DenseFusion accelerates climate research and environmental analysis with HPC-powered modeling, simulation, and AI-driven data processing.']
  ],
  'ClimateChallenges.tsx': [
    ['Industry Challenges', 'Climate Research Challenges'],
    ['The defense sector faces unprecedented challenges', 'The environmental sector faces unprecedented challenges'],
    ['Data Overload & Silos', 'Massive Climate Datasets'],
    ['Defense agencies generate massive amounts of data from satellites, drones, and ground sensors, but analyzing it in real-time is difficult due to siloed systems.', 
     'Climate modeling requires analyzing petabytes of historical weather data, ocean currents, and atmospheric conditions, which traditional infrastructure cannot handle.'],
    ['Security & Compliance', 'Complex Simulations'],
    ['Mission-critical data must be processed in highly secure, air-gapped environments to prevent cyber threats and ensure compliance with strict climate regulations.', 
     'Simulating global climate systems over decades requires immense, sustained computational power and highly optimized software stacks.'],
    ['Speed to Intelligence', 'Urgency of Action'],
    ['In tactical environments, seconds matter. Traditional computing systems often lack the processing power needed to convert raw data into actionable intelligence fast enough.',
     'As extreme weather events become more frequent, researchers need real-time modeling capabilities to provide actionable warnings and mitigation strategies immediately.']
  ],
  'ClimateHowItHelps.tsx': [
    ['How DenseFusion Helps', 'How DenseFusion Helps'],
    ['We provide defense organizations', 'We provide environmental organizations'],
    ['Secure, Scalable HPC', 'High-Performance Supercomputing'],
    ['We design and deploy high-performance computing clusters that can operate in secure, air-gapped environments, ensuring that sensitive data remains protected while delivering maximum processing power.',
     'We provide customized supercomputing environments specifically designed to run massive climate simulations and global circulation models efficiently.'],
    ['AI-Powered Intelligence', 'AI-Enhanced Climate Forecasting'],
    ['Our AI integration services allow defense agencies to run advanced machine learning models on massive datasets, accelerating object detection, natural language processing, and predictive analytics.',
     'We integrate machine learning into traditional climate models to dramatically accelerate simulation speeds and improve the accuracy of localized weather predictions.'],
    ['Tactical Edge Computing', 'Data Optimization & Storage'],
    ['We bring supercomputing capabilities to the tactical edge, enabling real-time data processing and decision-making in remote or disconnected environments.',
     'We design tiered storage and data processing solutions that allow researchers to securely store, share, and analyze petabytes of environmental data seamlessly.']
  ],
  'ClimateUseCases.tsx': [
    ['Climate Use Cases', 'Climate Use Cases'],
    ['Geospatial Intelligence (GEOINT)', 'Global Climate Modeling'],
    ['Processing high-resolution satellite imagery and radar data in real-time to track movements, identify anomalies, and map terrains.',
     'Running ultra-high-resolution simulations of the Earth’s atmosphere, oceans, and ice caps to predict long-term climate shifts.'],
    ['Predictive Maintenance', 'Extreme Weather Forecasting'],
    ['Using AI to analyze sensor data from military vehicles and aircraft, predicting component failures before they occur to ensure mission readiness.',
     'Utilizing AI to predict the path and intensity of hurricanes, floods, and wildfires with higher accuracy, giving communities more time to prepare.'],
    ['Autonomous Systems', 'Carbon Footprint Tracking'],
    ['Training and deploying AI models for autonomous drones, ground vehicles, and maritime vessels to operate safely in complex environments.',
     'Analyzing industrial emissions data and satellite imagery to accurately measure carbon footprints and track the effectiveness of reduction initiatives.'],
    ['Cybersecurity & Threat Detection', 'Renewable Energy Optimization'],
    ['Leveraging machine learning to analyze network traffic patterns, instantly identifying and neutralizing cyber threats and intrusions.',
     'Processing meteorological data to optimize the placement and output forecasting for solar farms and wind turbine networks.']
  ],
  'ClimateOutcomes.tsx': [
    ['Key Outcomes', 'Key Outcomes'],
    ['Measurable impact for climate organizations.', 'Measurable impact for environmental organizations.'],
    ['Faster Intelligence', 'Accelerated Research'],
    ['Reduce data processing time from hours to minutes, enabling real-time situational awareness.',
     'Reduce simulation times from months to days, accelerating the pace of critical climate research and discovery.'],
    ['Enhanced Security', 'Improved Accuracy'],
    ['Maintain total control over mission-critical data with secure, on-premises or hybrid HPC deployments.',
     'AI-enhanced models provide higher resolution forecasts, leading to better disaster preparedness and resource allocation.'],
    ['Mission Readiness', 'Actionable Policy Insights'],
    ['Ensure critical assets are always operational through AI-driven predictive maintenance.',
     'Empower governments and NGOs with data-backed insights to drive effective climate policies and sustainability efforts.']
  ],
  'ClimateApproach.tsx': [
    ['Our Approach to Climate', 'Our Approach to Climate'],
    ['We understand that climate operations require more than just raw compute power', 'We understand that climate research requires more than just raw compute power']
  ],
  'ClimateFAQ.tsx': [
    ['Climate Operations', 'Climate Research'],
    ['Can DenseFusion deploy solutions in air-gapped environments?', 'Can you help us optimize our existing climate models?'],
    ['Yes. We specialize in designing and deploying on-premises HPC and AI clusters that operate entirely disconnected from the public internet, ensuring maximum security for classified data.',
     'Yes. Our Software Stack Optimization services are specifically designed to fine-tune climate models and AI frameworks, reducing runtime and resource consumption on your existing hardware.'],
    ['How do you handle legacy system integration?', 'How much data can your HPC clusters handle?'],
    ['We conduct thorough feasibility studies to understand your current infrastructure, then design customized deployment plans that integrate modern HPC resources with your existing legacy systems to minimize disruption.',
     'Our HPC solutions are designed to scale seamlessly. We deploy parallel file systems and tiered storage architectures capable of handling tens of petabytes of environmental data without bottlenecks.'],
    ['Do you provide training for military personnel?', 'Do you provide training for research teams?'],
    ['Absolutely. Our Training & Enablement services ensure that your IT and operational teams have the skills required to manage, optimize, and scale the new computing environments effectively.',
     'Absolutely. We provide comprehensive training to ensure your scientists, researchers, and IT teams can effectively utilize the cluster, submit jobs, and manage the AI tools we deploy.']
  ]
};

for (const [filename, changes] of Object.entries(replacements)) {
  const filepath = path.join(DIR, filename);
  if (!fs.existsSync(filepath)) continue;
  
  let content = fs.readFileSync(filepath, 'utf8');
  for (const [target, replacement] of changes) {
    content = content.split(target).join(replacement);
  }
  fs.writeFileSync(filepath, content, 'utf8');
}
console.log("Injected climate text.");
