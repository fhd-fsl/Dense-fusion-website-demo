import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'src', 'components', 'industries', 'government');

const replacements = {
  'GovernmentHero.tsx': [
    ['Advanced Computing\n                <br className="hidden md:block" /> for Mission-Critical\n                <br className="hidden md:block" /> Operations', 
     'Modern Computing\n                <br className="hidden md:block" /> for Smarter\n                <br className="hidden md:block" /> Government'],
    ['DenseFusion combines AI and high-performance computing to help government organizations process complex data, accelerate intelligence, and support faster, more informed decisions.',
     'DenseFusion combines AI and high-performance computing to help government organizations process complex data, improve operational efficiency, and support data-driven decision-making.']
  ],
  'GovernmentChallenges.tsx': [
    ['Industry Challenges', 'Government Challenges'],
    ['The defense sector faces unprecedented challenges', 'The public sector faces unprecedented challenges'],
    ['Data Overload & Silos', 'Legacy Infrastructure'],
    ['Defense agencies generate massive amounts of data from satellites, drones, and ground sensors, but analyzing it in real-time is difficult due to siloed systems.', 
     'Many government agencies rely on outdated IT infrastructure that struggles to handle modern data processing, leading to inefficiencies and higher operational costs.'],
    ['Security & Compliance', 'Data Security & Privacy'],
    ['Mission-critical data must be processed in highly secure, air-gapped environments to prevent cyber threats and ensure compliance with strict government regulations.', 
     'Public sector organizations must process sensitive citizen data while adhering to strict security protocols and ensuring complete privacy.'],
    ['Speed to Intelligence', 'Resource Allocation'],
    ['In tactical environments, seconds matter. Traditional computing systems often lack the processing power needed to convert raw data into actionable intelligence fast enough.',
     'Government entities need to optimize their limited resources and budgets while still providing high-quality digital services to the public.']
  ],
  'GovernmentHowItHelps.tsx': [
    ['How DenseFusion Helps', 'How DenseFusion Helps'],
    ['We provide defense organizations', 'We provide government organizations'],
    ['Secure, Scalable HPC', 'Modernized IT Infrastructure'],
    ['We design and deploy high-performance computing clusters that can operate in secure, air-gapped environments, ensuring that sensitive data remains protected while delivering maximum processing power.',
     'We design and deploy scalable, high-performance computing clusters that modernize government IT, enabling faster processing and reduced maintenance costs.'],
    ['AI-Powered Intelligence', 'AI-Driven Public Services'],
    ['Our AI integration services allow defense agencies to run advanced machine learning models on massive datasets, accelerating object detection, natural language processing, and predictive analytics.',
     'Our AI integration services help government agencies automate routine tasks, improve citizen services, and leverage data for smarter policy-making.'],
    ['Tactical Edge Computing', 'Secure Data Management'],
    ['We bring supercomputing capabilities to the tactical edge, enabling real-time data processing and decision-making in remote or disconnected environments.',
     'We provide secure, compliant computing environments that protect sensitive public data while ensuring interoperability across different agencies.']
  ],
  'GovernmentUseCases.tsx': [
    ['Government Use Cases', 'Government Use Cases'],
    ['Geospatial Intelligence (GEOINT)', 'Smart City Analytics'],
    ['Processing high-resolution satellite imagery and radar data in real-time to track movements, identify anomalies, and map terrains.',
     'Processing data from IoT sensors, traffic cameras, and public utilities to optimize city operations and improve urban planning.'],
    ['Predictive Maintenance', 'Fraud Detection & Compliance'],
    ['Using AI to analyze sensor data from military vehicles and aircraft, predicting component failures before they occur to ensure mission readiness.',
     'Using AI to analyze financial and administrative data to identify fraudulent activities and ensure compliance with government regulations.'],
    ['Autonomous Systems', 'Public Health & Safety'],
    ['Training and deploying AI models for autonomous drones, ground vehicles, and maritime vessels to operate safely in complex environments.',
     'Analyzing large-scale health data and environmental statistics to predict public health trends and coordinate emergency responses.'],
    ['Cybersecurity & Threat Detection', 'Citizen Service Portals'],
    ['Leveraging machine learning to analyze network traffic patterns, instantly identifying and neutralizing cyber threats and intrusions.',
     'Enhancing digital portals with AI-driven chatbots and automated processing to provide faster, more accessible services to citizens.']
  ],
  'GovernmentOutcomes.tsx': [
    ['Key Outcomes', 'Key Outcomes'],
    ['Measurable impact for government organizations.', 'Measurable impact for government organizations.'],
    ['Faster Intelligence', 'Increased Efficiency'],
    ['Reduce data processing time from hours to minutes, enabling real-time situational awareness.',
     'Automate manual processes and reduce administrative overhead, allowing staff to focus on critical tasks.'],
    ['Enhanced Security', 'Enhanced Security'],
    ['Maintain total control over mission-critical data with secure, on-premises or hybrid HPC deployments.',
     'Maintain total control over sensitive citizen data with secure, compliant HPC deployments.'],
    ['Mission Readiness', 'Better Decision Making'],
    ['Ensure critical assets are always operational through AI-driven predictive maintenance.',
     'Leverage data analytics to make informed, evidence-based policy and resource allocation decisions.']
  ],
  'GovernmentApproach.tsx': [
    ['Our Approach to Government', 'Our Approach to Government'],
    ['We understand that government operations require more than just raw compute power', 'We understand that government operations require more than just raw compute power']
  ],
  'GovernmentFAQ.tsx': [
    ['Government Operations', 'Government Operations'],
    ['Can DenseFusion deploy solutions in air-gapped environments?', 'How does DenseFusion ensure data security?'],
    ['Yes. We specialize in designing and deploying on-premises HPC and AI clusters that operate entirely disconnected from the public internet, ensuring maximum security for classified data.',
     'We design our HPC and AI clusters with strict security protocols, ensuring compliance with government regulations and protecting sensitive citizen data.'],
    ['How do you handle legacy system integration?', 'How do you handle legacy system integration?'],
    ['We conduct thorough feasibility studies to understand your current infrastructure, then design customized deployment plans that integrate modern HPC resources with your existing legacy systems to minimize disruption.',
     'We conduct thorough feasibility studies to understand your current infrastructure, then design customized deployment plans that integrate modern HPC resources with your existing legacy systems to minimize disruption.'],
    ['Do you provide training for military personnel?', 'Do you provide training for government personnel?'],
    ['Absolutely. Our Training & Enablement services ensure that your IT and operational teams have the skills required to manage, optimize, and scale the new computing environments effectively.',
     'Absolutely. Our Training & Enablement services ensure that your IT and administrative teams have the skills required to manage, optimize, and scale the new computing environments effectively.']
  ]
};

for (const [filename, changes] of Object.entries(replacements)) {
  const filepath = path.join(DIR, filename);
  if (!fs.existsSync(filepath)) continue;
  
  let content = fs.readFileSync(filepath, 'utf8');
  for (const [target, replacement] of changes) {
    // Escape target string for regex, except we don't want to escape newlines if we do it globally
    // Easier to just use split/join for exact string replacement
    content = content.split(target).join(replacement);
  }
  fs.writeFileSync(filepath, content, 'utf8');
}
console.log("Injected government text.");
