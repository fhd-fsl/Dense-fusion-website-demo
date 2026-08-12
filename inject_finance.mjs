import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'src', 'components', 'industries', 'finance');

const replacements = {
  'FinanceHero.tsx': [
    ['Advanced Computing\n                <br className="hidden md:block" /> for Mission-Critical\n                <br className="hidden md:block" /> Operations', 
     'High-Performance Computing\n                <br className="hidden md:block" /> for Financial\n                <br className="hidden md:block" /> Intelligence'],
    ['DenseFusion combines AI and high-performance computing to help finance organizations process complex data, accelerate intelligence, and support faster, more informed decisions.',
     'DenseFusion provides scalable AI and HPC solutions designed to process complex financial models, manage risk, and accelerate algorithmic analytics.']
  ],
  'FinanceChallenges.tsx': [
    ['Industry Challenges', 'Financial Challenges'],
    ['The defense sector faces unprecedented challenges', 'The financial sector faces unprecedented challenges'],
    ['Data Overload & Silos', 'High-Frequency Processing'],
    ['Defense agencies generate massive amounts of data from satellites, drones, and ground sensors, but analyzing it in real-time is difficult due to siloed systems.', 
     'Financial institutions must process millions of market transactions per second, requiring ultra-low latency and immense computational throughput.'],
    ['Security & Compliance', 'Regulatory Compliance'],
    ['Mission-critical data must be processed in highly secure, air-gapped environments to prevent cyber threats and ensure compliance with strict finance regulations.', 
     'Firms face ever-tightening regulatory requirements, necessitating secure, auditable data environments that prevent fraud and ensure data privacy.'],
    ['Speed to Intelligence', 'Complex Risk Modeling'],
    ['In tactical environments, seconds matter. Traditional computing systems often lack the processing power needed to convert raw data into actionable intelligence fast enough.',
     'Traditional infrastructure struggles to run complex Monte Carlo simulations and risk models fast enough to adapt to rapidly changing market conditions.']
  ],
  'FinanceHowItHelps.tsx': [
    ['How DenseFusion Helps', 'How DenseFusion Helps'],
    ['We provide defense organizations', 'We provide financial organizations'],
    ['Secure, Scalable HPC', 'Ultra-Low Latency Infrastructure'],
    ['We design and deploy high-performance computing clusters that can operate in secure, air-gapped environments, ensuring that sensitive data remains protected while delivering maximum processing power.',
     'We deploy high-performance computing architectures specifically optimized for high-frequency trading and rapid data processing.'],
    ['AI-Powered Intelligence', 'AI-Driven Predictive Analytics'],
    ['Our AI integration services allow defense agencies to run advanced machine learning models on massive datasets, accelerating object detection, natural language processing, and predictive analytics.',
     'Our AI integration services enable banks and hedge funds to deploy predictive models that analyze market trends and automate investment strategies.'],
    ['Tactical Edge Computing', 'Secure Financial Cloud Solutions'],
    ['We bring supercomputing capabilities to the tactical edge, enabling real-time data processing and decision-making in remote or disconnected environments.',
     'We design secure, compliant hybrid computing environments that protect sensitive financial data while allowing seamless scaling during market peaks.']
  ],
  'FinanceUseCases.tsx': [
    ['Finance Use Cases', 'Finance Use Cases'],
    ['Geospatial Intelligence (GEOINT)', 'Algorithmic Trading'],
    ['Processing high-resolution satellite imagery and radar data in real-time to track movements, identify anomalies, and map terrains.',
     'Using ultra-low latency infrastructure to execute complex trading algorithms at microsecond speeds, maximizing market opportunities.'],
    ['Predictive Maintenance', 'Risk Management & Simulation'],
    ['Using AI to analyze sensor data from military vehicles and aircraft, predicting component failures before they occur to ensure mission readiness.',
     'Running large-scale Monte Carlo simulations to assess portfolio risk and ensure compliance with stress-testing regulations.'],
    ['Autonomous Systems', 'Fraud Detection & Prevention'],
    ['Training and deploying AI models for autonomous drones, ground vehicles, and maritime vessels to operate safely in complex environments.',
     'Deploying real-time machine learning models to analyze transaction patterns, instantly detecting and neutralizing fraudulent activities.'],
    ['Cybersecurity & Threat Detection', 'Personalized Banking Experiences'],
    ['Leveraging machine learning to analyze network traffic patterns, instantly identifying and neutralizing cyber threats and intrusions.',
     'Utilizing AI to process customer data and deliver highly personalized financial products, dynamic pricing, and automated customer support.']
  ],
  'FinanceOutcomes.tsx': [
    ['Key Outcomes', 'Key Outcomes'],
    ['Measurable impact for finance organizations.', 'Measurable impact for financial organizations.'],
    ['Faster Intelligence', 'Reduced Latency'],
    ['Reduce data processing time from hours to minutes, enabling real-time situational awareness.',
     'Execute trades and process transactions at unprecedented speeds, gaining a critical competitive edge in the market.'],
    ['Enhanced Security', 'Uncompromised Security'],
    ['Maintain total control over mission-critical data with secure, on-premises or hybrid HPC deployments.',
     'Protect sensitive financial data and maintain strict regulatory compliance with enterprise-grade security protocols.'],
    ['Mission Readiness', 'Optimized Risk Management'],
    ['Ensure critical assets are always operational through AI-driven predictive maintenance.',
     'Rapidly simulate complex market scenarios to make informed decisions and safeguard institutional assets.']
  ],
  'FinanceApproach.tsx': [
    ['Our Approach to Finance', 'Our Approach to Banking & Finance'],
    ['We understand that finance operations require more than just raw compute power', 'We understand that financial operations require more than just raw compute power']
  ],
  'FinanceFAQ.tsx': [
    ['Finance Operations', 'Financial Operations'],
    ['Can DenseFusion deploy solutions in air-gapped environments?', 'How does DenseFusion ensure regulatory compliance?'],
    ['Yes. We specialize in designing and deploying on-premises HPC and AI clusters that operate entirely disconnected from the public internet, ensuring maximum security for classified data.',
     'We design our financial HPC solutions with security and compliance as foundational principles. Our architectures support strict auditing, encryption, and data governance frameworks required by financial regulators.'],
    ['How do you handle legacy system integration?', 'Can you support high-frequency trading (HFT) infrastructure?'],
    ['We conduct thorough feasibility studies to understand your current infrastructure, then design customized deployment plans that integrate modern HPC resources with your existing legacy systems to minimize disruption.',
     'Yes. We specialize in building ultra-low latency compute environments, optimizing both hardware and network fabrics to ensure trades are executed at microsecond speeds.'],
    ['Do you provide training for military personnel?', 'Do you provide support for quantitative analysts?'],
    ['Absolutely. Our Training & Enablement services ensure that your IT and operational teams have the skills required to manage, optimize, and scale the new computing environments effectively.',
     'Absolutely. We help integrate complex AI frameworks and financial modeling software directly into your computing clusters, providing your quants with optimized environments for their research.']
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
console.log("Injected finance text.");
