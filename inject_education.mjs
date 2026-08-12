import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'src', 'components', 'industries', 'education');

const replacements = {
  'EducationHero.tsx': [
    ['Advanced Computing\n                <br className="hidden md:block" /> for Mission-Critical\n                <br className="hidden md:block" /> Operations', 
     'Empowering Academic\n                <br className="hidden md:block" /> & Scientific\n                <br className="hidden md:block" /> Discovery'],
    ['DenseFusion combines AI and high-performance computing to help education organizations process complex data, accelerate intelligence, and support faster, more informed decisions.',
     'DenseFusion empowers universities and research institutions with advanced HPC and AI solutions to accelerate scientific discovery and collaborative research.']
  ],
  'EducationChallenges.tsx': [
    ['Industry Challenges', 'Academic & Research Challenges'],
    ['The defense sector faces unprecedented challenges', 'The academic and research sector faces unprecedented challenges'],
    ['Data Overload & Silos', 'Massive Research Datasets'],
    ['Defense agencies generate massive amounts of data from satellites, drones, and ground sensors, but analyzing it in real-time is difficult due to siloed systems.', 
     'Modern scientific research across genomics, physics, and astronomy generates petabytes of data that exceed the capabilities of traditional university IT infrastructure.'],
    ['Security & Compliance', 'Grant & Budget Constraints'],
    ['Mission-critical data must be processed in highly secure, air-gapped environments to prevent cyber threats and ensure compliance with strict education regulations.', 
     'Research institutions must constantly balance the need for cutting-edge computing power against tight research budgets and strict grant requirements.'],
    ['Speed to Intelligence', 'Collaborative Silos'],
    ['In tactical environments, seconds matter. Traditional computing systems often lack the processing power needed to convert raw data into actionable intelligence fast enough.',
     'Researchers often struggle to securely share massive datasets and compute resources across departments or with international collaborating institutions.']
  ],
  'EducationHowItHelps.tsx': [
    ['How DenseFusion Helps', 'How DenseFusion Helps'],
    ['We provide defense organizations', 'We provide academic institutions'],
    ['Secure, Scalable HPC', 'High-Performance Research Clusters'],
    ['We design and deploy high-performance computing clusters that can operate in secure, air-gapped environments, ensuring that sensitive data remains protected while delivering maximum processing power.',
     'We build customized, scalable HPC clusters that provide researchers with the raw computational power needed for complex simulations and data analysis.'],
    ['AI-Powered Intelligence', 'AI Integration for Science'],
    ['Our AI integration services allow defense agencies to run advanced machine learning models on massive datasets, accelerating object detection, natural language processing, and predictive analytics.',
     'We integrate machine learning frameworks directly into research environments, allowing scientists to accelerate discoveries in drug development, materials science, and more.'],
    ['Tactical Edge Computing', 'Shared Compute Infrastructure'],
    ['We bring supercomputing capabilities to the tactical edge, enabling real-time data processing and decision-making in remote or disconnected environments.',
     'We design multi-tenant architectures that allow universities to efficiently share high-performance computing resources across multiple departments securely.']
  ],
  'EducationUseCases.tsx': [
    ['Education Use Cases', 'Education & Research Use Cases'],
    ['Geospatial Intelligence (GEOINT)', 'Genomics & Bioinformatics'],
    ['Processing high-resolution satellite imagery and radar data in real-time to track movements, identify anomalies, and map terrains.',
     'Accelerating DNA sequencing and protein folding simulations to drive breakthroughs in personalized medicine and agricultural biotechnology.'],
    ['Predictive Maintenance', 'Astrophysics & Cosmology'],
    ['Using AI to analyze sensor data from military vehicles and aircraft, predicting component failures before they occur to ensure mission readiness.',
     'Processing massive datasets from radio telescopes and space observatories to model galaxy formation and map the universe.'],
    ['Autonomous Systems', 'Materials Science'],
    ['Training and deploying AI models for autonomous drones, ground vehicles, and maritime vessels to operate safely in complex environments.',
     'Simulating quantum mechanics and molecular dynamics to discover new, sustainable materials for energy storage and manufacturing.'],
    ['Cybersecurity & Threat Detection', 'Social Sciences & NLP'],
    ['Leveraging machine learning to analyze network traffic patterns, instantly identifying and neutralizing cyber threats and intrusions.',
     'Utilizing large language models and sentiment analysis to process vast amounts of historical and social data to understand human behavior trends.']
  ],
  'EducationOutcomes.tsx': [
    ['Key Outcomes', 'Key Outcomes'],
    ['Measurable impact for education organizations.', 'Measurable impact for academic institutions.'],
    ['Faster Intelligence', 'Accelerated Discovery'],
    ['Reduce data processing time from hours to minutes, enabling real-time situational awareness.',
     'Reduce simulation and data processing times drastically, allowing researchers to publish findings faster and secure more grants.'],
    ['Enhanced Security', 'Cost-Effective Scaling'],
    ['Maintain total control over mission-critical data with secure, on-premises or hybrid HPC deployments.',
     'Maximize IT budgets with optimized compute clusters that serve multiple departments efficiently without unnecessary overhead.'],
    ['Mission Readiness', 'Enhanced Collaboration'],
    ['Ensure critical assets are always operational through AI-driven predictive maintenance.',
     'Break down departmental silos with secure, shared computing environments that foster interdisciplinary research.']
  ],
  'EducationApproach.tsx': [
    ['Our Approach to Education', 'Our Approach to Education & Research'],
    ['We understand that education operations require more than just raw compute power', 'We understand that academic research requires more than just raw compute power']
  ],
  'EducationFAQ.tsx': [
    ['Education Operations', 'Academic Research'],
    ['Can DenseFusion deploy solutions in air-gapped environments?', 'Do your solutions support common research software?'],
    ['Yes. We specialize in designing and deploying on-premises HPC and AI clusters that operate entirely disconnected from the public internet, ensuring maximum security for classified data.',
     'Yes. We optimize our HPC clusters to run industry-standard scientific software and AI frameworks out-of-the-box, ensuring researchers can get to work immediately.'],
    ['How do you handle legacy system integration?', 'How can multiple departments share the same cluster?'],
    ['We conduct thorough feasibility studies to understand your current infrastructure, then design customized deployment plans that integrate modern HPC resources with your existing legacy systems to minimize disruption.',
     'We implement advanced workload managers (like Slurm) and secure multi-tenant architectures that ensure fair resource allocation and data privacy between different research groups.'],
    ['Do you provide training for military personnel?', 'Do you provide training for students and faculty?'],
    ['Absolutely. Our Training & Enablement services ensure that your IT and operational teams have the skills required to manage, optimize, and scale the new computing environments effectively.',
     'Absolutely. We provide comprehensive onboarding and documentation to ensure faculty, grad students, and university IT can fully leverage the new computing infrastructure.']
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
console.log("Injected education text.");
