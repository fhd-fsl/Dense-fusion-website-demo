import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'src', 'components', 'industries', 'agriculture');

const replacements = {
  'AgricultureHero.tsx': [
    ['Advanced Computing\n                <br className="hidden md:block" /> for Mission-Critical\n                <br className="hidden md:block" /> Operations', 
     'Smarter Agriculture\n                <br className="hidden md:block" /> Through AI\n                <br className="hidden md:block" /> & HPC'],
    ['DenseFusion combines AI and high-performance computing to help agriculture organizations process complex data, accelerate intelligence, and support faster, more informed decisions.',
     'DenseFusion uses AI, geospatial data, and high-performance computing to improve agricultural monitoring, resource management, and predictive decision-making for modern farming.']
  ],
  'AgricultureChallenges.tsx': [
    ['Industry Challenges', 'Agricultural Challenges'],
    ['The defense sector faces unprecedented challenges', 'The agricultural sector faces unprecedented challenges'],
    ['Data Overload & Silos', 'Climate Volatility'],
    ['Defense agencies generate massive amounts of data from satellites, drones, and ground sensors, but analyzing it in real-time is difficult due to siloed systems.', 
     'Unpredictable weather patterns and climate change severely impact crop yields, making it critical for farmers to adapt quickly to environmental changes.'],
    ['Security & Compliance', 'Resource Optimization'],
    ['Mission-critical data must be processed in highly secure, air-gapped environments to prevent cyber threats and ensure compliance with strict agriculture regulations.', 
     'Farms must optimize water, fertilizer, and land usage to maximize yield while minimizing environmental impact and operational costs.'],
    ['Speed to Intelligence', 'Data-Driven Farming'],
    ['In tactical environments, seconds matter. Traditional computing systems often lack the processing power needed to convert raw data into actionable intelligence fast enough.',
     'Modern farms generate terabytes of data from sensors, drones, and satellites, requiring immense compute power to analyze and turn into actionable insights.']
  ],
  'AgricultureHowItHelps.tsx': [
    ['How DenseFusion Helps', 'How DenseFusion Helps'],
    ['We provide defense organizations', 'We provide agricultural organizations'],
    ['Secure, Scalable HPC', 'Precision Agriculture Analytics'],
    ['We design and deploy high-performance computing clusters that can operate in secure, air-gapped environments, ensuring that sensitive data remains protected while delivering maximum processing power.',
     'We provide the computing power needed to process massive agricultural datasets, enabling precision farming that optimizes yields and reduces resource waste.'],
    ['AI-Powered Intelligence', 'AI-Driven Predictive Modeling'],
    ['Our AI integration services allow defense agencies to run advanced machine learning models on massive datasets, accelerating object detection, natural language processing, and predictive analytics.',
     'We deploy AI models that forecast weather impacts, predict crop diseases, and determine optimal harvest times to maximize agricultural output.'],
    ['Tactical Edge Computing', 'Edge Computing for Farms'],
    ['We bring supercomputing capabilities to the tactical edge, enabling real-time data processing and decision-making in remote or disconnected environments.',
     'We bring edge computing to remote farmlands, allowing real-time processing of drone and sensor data right where the crops are grown.']
  ],
  'AgricultureUseCases.tsx': [
    ['Agriculture Use Cases', 'Agriculture Use Cases'],
    ['Geospatial Intelligence (GEOINT)', 'Crop Monitoring & Health Analysis'],
    ['Processing high-resolution satellite imagery and radar data in real-time to track movements, identify anomalies, and map terrains.',
     'Processing drone and satellite imagery to assess crop health, detect pest infestations, and identify nutrient deficiencies early.'],
    ['Predictive Maintenance', 'Yield Prediction'],
    ['Using AI to analyze sensor data from military vehicles and aircraft, predicting component failures before they occur to ensure mission readiness.',
     'Utilizing machine learning models combining historical data, current weather, and soil conditions to accurately forecast crop yields.'],
    ['Autonomous Systems', 'Smart Irrigation Systems'],
    ['Training and deploying AI models for autonomous drones, ground vehicles, and maritime vessels to operate safely in complex environments.',
     'AI-driven platforms that analyze soil moisture and weather forecasts in real-time to optimize water distribution across fields.'],
    ['Cybersecurity & Threat Detection', 'Supply Chain Optimization'],
    ['Leveraging machine learning to analyze network traffic patterns, instantly identifying and neutralizing cyber threats and intrusions.',
     'Analyzing logistics data to streamline the journey of agricultural products from farm to table, reducing spoilage and transit times.']
  ],
  'AgricultureOutcomes.tsx': [
    ['Key Outcomes', 'Key Outcomes'],
    ['Measurable impact for agriculture organizations.', 'Measurable impact for agricultural organizations.'],
    ['Faster Intelligence', 'Increased Crop Yields'],
    ['Reduce data processing time from hours to minutes, enabling real-time situational awareness.',
     'Data-driven insights ensure crops receive exactly what they need, significantly boosting overall production.'],
    ['Enhanced Security', 'Resource Efficiency'],
    ['Maintain total control over mission-critical data with secure, on-premises or hybrid HPC deployments.',
     'Reduce water and fertilizer usage through precise, targeted application driven by advanced analytics.'],
    ['Mission Readiness', 'Sustainable Farming'],
    ['Ensure critical assets are always operational through AI-driven predictive maintenance.',
     'Implement sustainable practices by minimizing environmental impact and adapting effectively to climate changes.']
  ],
  'AgricultureApproach.tsx': [
    ['Our Approach to Agriculture', 'Our Approach to Agriculture'],
    ['We understand that agriculture operations require more than just raw compute power', 'We understand that agricultural operations require more than just raw compute power']
  ],
  'AgricultureFAQ.tsx': [
    ['Agriculture Operations', 'Agriculture Operations'],
    ['Can DenseFusion deploy solutions in air-gapped environments?', 'How does edge computing help remote farms?'],
    ['Yes. We specialize in designing and deploying on-premises HPC and AI clusters that operate entirely disconnected from the public internet, ensuring maximum security for classified data.',
     'Edge computing allows data from farm sensors and drones to be processed locally in real-time, eliminating the need for constant, high-bandwidth internet connectivity.'],
    ['How do you handle legacy system integration?', 'Can AI really predict crop diseases?'],
    ['We conduct thorough feasibility studies to understand your current infrastructure, then design customized deployment plans that integrate modern HPC resources with your existing legacy systems to minimize disruption.',
     'Yes, by training computer vision models on thousands of images of healthy and diseased crops, AI can identify early signs of infection from drone or smartphone photos before it spreads.'],
    ['Do you provide training for military personnel?', 'Do you provide training for agricultural staff?'],
    ['Absolutely. Our Training & Enablement services ensure that your IT and operational teams have the skills required to manage, optimize, and scale the new computing environments effectively.',
     'Absolutely. We provide training to ensure your agronomists and farm managers can effectively utilize and maintain the AI and computing tools we deploy.']
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
console.log("Injected agriculture text.");
