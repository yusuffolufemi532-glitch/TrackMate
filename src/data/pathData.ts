import {
  Scale,
  HeartPulse,
  Banknote,
  HardHat,
  Sprout,
  Palette,
  Laptop,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Brush,
  Puzzle,
  PenLine,
  Calculator,
  Cpu,
  HandHeart,
  MessageCircle,
  Wrench,
  ClipboardList,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

export interface Interest {
  id: string;
  label: string;
  emoji: string;
  icon: LucideIcon;
  accent: string;
}

export interface Strength {
  id: string;
  label: string;
  emoji: string;
  icon: LucideIcon;
  accent: string;
}

export interface Stage {
  id: string;
  label: string;
  description: string;
}

export interface TechConnection {
  title: string;
  description: string;
}

export interface StarterSkill {
  title: string;
  description: string;
}

export interface Opportunity {
  title: string;
  type: string;
  description: string;
  location: string;
}

export interface TryThis {
  title: string;
  description: string;
}

export interface PathResult {
  title: string;
  explanation: string;
  techConnections: TechConnection[];
  starterSkills: StarterSkill[];
  tryThis: TryThis;
  opportunities: Opportunity[];
}

export const interests: Interest[] = [
  { id: 'law', label: 'Law', emoji: '⚖️', icon: Scale, accent: 'slate' },
  { id: 'health', label: 'Health & Medicine', emoji: '🩺', icon: HeartPulse, accent: 'rose' },
  { id: 'finance', label: 'Accounting & Finance', emoji: '💰', icon: Banknote, accent: 'emerald' },
  { id: 'engineering', label: 'Engineering', emoji: '🏗️', icon: HardHat, accent: 'amber' },
  { id: 'agriculture', label: 'Agriculture', emoji: '🌾', icon: Sprout, accent: 'green' },
  { id: 'creative', label: 'Creative & Design', emoji: '🎨', icon: Palette, accent: 'fuchsia' },
  { id: 'technology', label: 'Technology', emoji: '💻', icon: Laptop, accent: 'blue' },
  { id: 'education', label: 'Education', emoji: '📚', icon: GraduationCap, accent: 'indigo' },
  { id: 'business', label: 'Business & Entrepreneurship', emoji: '💼', icon: Briefcase, accent: 'orange' },
  { id: 'exploring', label: "I'm still exploring", emoji: '🤔', icon: HelpCircle, accent: 'slate' },
];

export const strengths: Strength[] = [
  { id: 'creating', label: 'Creating or designing', emoji: '🎨', icon: Brush, accent: 'fuchsia' },
  { id: 'problem-solving', label: 'Solving problems', emoji: '🧩', icon: Puzzle, accent: 'blue' },
  { id: 'writing', label: 'Writing or explaining ideas', emoji: '✍️', icon: PenLine, accent: 'indigo' },
  { id: 'numbers', label: 'Working with numbers', emoji: '🔢', icon: Calculator, accent: 'emerald' },
  { id: 'tech', label: 'Exploring technology', emoji: '💻', icon: Cpu, accent: 'cyan' },
  { id: 'helping', label: 'Helping people', emoji: '🤝', icon: HandHeart, accent: 'rose' },
  { id: 'communicating', label: 'Communicating with people', emoji: '🗣️', icon: MessageCircle, accent: 'orange' },
  { id: 'building', label: 'Building or making things', emoji: '🔧', icon: Wrench, accent: 'amber' },
  { id: 'organizing', label: 'Organizing information', emoji: '📊', icon: ClipboardList, accent: 'slate' },
  { id: 'starting', label: 'Starting or improving things', emoji: '🚀', icon: Rocket, accent: 'violet' },
];

export const stages: Stage[] = [
  { id: 'ss2', label: 'SS2', description: 'Penultimate year of secondary school' },
  { id: 'ss3', label: 'SS3', description: 'Final year of secondary school' },
  { id: 'finished', label: 'Just finished secondary school', description: 'Recently completed secondary school' },
  { id: 'university', label: 'University student', description: 'Currently in university or polytechnic' },
  { id: 'other', label: 'Other', description: 'On a different path right now' },
];

export interface OnboardingSelections {
  interests: string[];
  strengths: string[];
  stage: string;
}

const interestLabels: Record<string, string> = {
  law: 'Law',
  health: 'Health & Medicine',
  finance: 'Accounting & Finance',
  engineering: 'Engineering',
  agriculture: 'Agriculture',
  creative: 'Creative & Design',
  technology: 'Technology',
  education: 'Education',
  business: 'Business & Entrepreneurship',
  exploring: 'Exploring',
};

const strengthLabels: Record<string, string> = {
  creating: 'Creating',
  'problem-solving': 'Problem Solving',
  writing: 'Writing',
  numbers: 'Numbers',
  tech: 'Technology',
  helping: 'Helping People',
  communicating: 'Communicating',
  building: 'Building',
  organizing: 'Organizing',
  starting: 'Initiative',
};

interface PathTemplate {
  techConnections: TechConnection[];
  starterSkills: StarterSkill[];
  tryThis: TryThis;
  opportunities: Opportunity[];
}

const pathTemplates: Record<string, PathTemplate> = {
  law: {
    techConnections: [
      { title: 'Legal Tech', description: 'Apps that help people understand legal rights and access legal services.' },
      { title: 'Digital Evidence & Forensics', description: 'Using technology to investigate and verify digital information.' },
      { title: 'Contract Automation', description: 'Software that helps create, review and manage contracts.' },
      { title: 'AI & Law Research', description: 'Tools that search legal databases and summarize case law.' },
    ],
    starterSkills: [
      { title: 'Critical Thinking', description: 'Analyzing arguments and evaluating information.' },
      { title: 'Research Skills', description: 'Finding and organizing reliable sources.' },
      { title: 'Digital Literacy', description: 'Using online legal databases and research tools.' },
      { title: 'Communication', description: 'Writing clearly and presenting ideas persuasively.' },
    ],
    tryThis: {
      title: 'Build a "Know Your Rights" quiz',
      description: 'Create a simple quiz that helps your classmates understand basic legal rights. You can use a free tool like Google Forms — no coding needed.',
    },
    opportunities: [
      { title: 'Young Lawyers Forum Mentorship', type: 'Programme', description: 'A mentorship programme that connects secondary students with young legal professionals for career guidance.', location: 'Online / Lagos' },
      { title: 'Law & Technology Essay Challenge', type: 'Competition', description: 'A national essay challenge exploring how technology is changing the legal profession in Nigeria.', location: 'Nationwide' },
    ],
  },
  health: {
    techConnections: [
      { title: 'Health Tech', description: 'Apps for telemedicine, appointments, and patient records.' },
      { title: 'Medical Data Analytics', description: 'Using data to track disease outbreaks and improve care.' },
      { title: 'Biomedical Engineering', description: 'Designing devices and software that support healthcare.' },
      { title: 'Health Awareness Platforms', description: 'Creating content and tools that educate communities.' },
    ],
    starterSkills: [
      { title: 'Biology & Science Basics', description: 'Understanding how the human body works.' },
      { title: 'Data Awareness', description: 'Reading charts and understanding health statistics.' },
      { title: 'Digital Communication', description: 'Sharing health information clearly and responsibly.' },
      { title: 'Empathy & Care', description: 'Understanding patient needs and providing support.' },
    ],
    tryThis: {
      title: 'Design a health awareness poster',
      description: 'Pick a health topic that matters to your community (like malaria prevention or hygiene) and design a simple digital poster using a free tool like Canva.',
    },
    opportunities: [
      { title: 'Health Tech Innovation Challenge', type: 'Competition', description: 'A challenge for students to propose simple tech solutions to healthcare problems in their communities.', location: 'Nationwide' },
      { title: 'MedReach Volunteer Programme', type: 'Programme', description: 'A youth volunteer programme that brings basic health education to secondary schools.', location: 'Lagos / Abuja' },
    ],
  },
  finance: {
    techConnections: [
      { title: 'FinTech', description: 'Apps for payments, savings, and financial inclusion.' },
      { title: 'Data Analytics', description: 'Analyzing financial data to find patterns and make decisions.' },
      { title: 'Accounting Technology', description: 'Software that automates bookkeeping and financial reporting.' },
      { title: 'Financial Modelling', description: 'Building spreadsheets and tools to forecast business performance.' },
    ],
    starterSkills: [
      { title: 'Excel / Spreadsheets', description: 'Organizing data, formulas, and basic calculations.' },
      { title: 'Data Analysis', description: 'Reading and interpreting numerical information.' },
      { title: 'Digital Productivity', description: 'Using online tools for finance and planning.' },
      { title: 'Basic Financial Concepts', description: 'Understanding budgeting, saving and investment basics.' },
    ],
    tryThis: {
      title: 'Design a personal expense tracker',
      description: 'Create a simple spreadsheet (or Google Sheet) to track your daily expenses for one week. Add columns for date, item, and amount. See what patterns you discover.',
    },
    opportunities: [
      { title: 'FinTech Teen Bootcamp', type: 'Programme', description: 'A weekend programme introducing secondary students to the world of financial technology and digital payments.', location: 'Lagos' },
      { title: 'Junior Accountant Competition', type: 'Competition', description: 'A national competition testing accounting knowledge and spreadsheet skills among secondary students.', location: 'Nationwide' },
    ],
  },
  engineering: {
    techConnections: [
      { title: 'Robotics & Automation', description: 'Programming machines to perform tasks.' },
      { title: 'CAD & 3D Modeling', description: 'Designing physical products and structures digitally.' },
      { title: 'IoT (Internet of Things)', description: 'Connecting physical devices to the internet to collect data.' },
      { title: 'Renewable Energy Tech', description: 'Designing solar, wind and smart-grid solutions.' },
    ],
    starterSkills: [
      { title: 'Physics & Math', description: 'Understanding forces, energy and calculations.' },
      { title: 'Design Thinking', description: 'Identifying problems and prototyping solutions.' },
      { title: 'Basic Programming', description: 'Writing simple code to control devices or process data.' },
      { title: 'Hands-on Building', description: 'Working with materials, tools and basic electronics.' },
    ],
    tryThis: {
      title: 'Build a simple circuit at home',
      description: 'Using a battery, some wire and a small bulb (or an LED), build a simple working circuit. Draw a diagram of how it works and explain it to a friend.',
    },
    opportunities: [
      { title: 'Robotics for Teens Workshop', type: 'Programme', description: 'A hands-on workshop where students build and program basic robots using kits.', location: 'Lagos / Port Harcourt' },
      { title: 'Future Engineers Challenge', type: 'Competition', description: 'A national challenge for secondary students to design simple engineering solutions to local problems.', location: 'Nationwide' },
    ],
  },
  agriculture: {
    techConnections: [
      { title: 'AgriTech', description: 'Apps for farming advice, weather alerts, and market prices.' },
      { title: 'Precision Farming', description: 'Using sensors and data to improve crop yields.' },
      { title: 'Supply Chain Tech', description: 'Tracking food from farm to market with digital tools.' },
      { title: 'Agricultural Drones', description: 'Using drones to monitor crops and land.' },
    ],
    starterSkills: [
      { title: 'Observation & Data', description: 'Tracking weather, growth patterns and costs.' },
      { title: 'Basic Business Skills', description: 'Understanding pricing, selling and profit.' },
      { title: 'Digital Tools', description: 'Using apps and spreadsheets for farm planning.' },
      { title: 'Problem Solving', description: 'Finding practical solutions to everyday farming challenges.' },
    ],
    tryThis: {
      title: 'Start a small growing project',
      description: 'Plant a small vegetable (like ugu or tomatoes) in a container at home. Track its growth daily in a notebook or spreadsheet. Note what helps it grow best.',
    },
    opportunities: [
      { title: 'AgriTech Youth Bootcamp', type: 'Programme', description: 'A programme introducing students to how technology is transforming agriculture in Nigeria.', location: 'Ibadan' },
      { title: 'Young Farmers Competition', type: 'Competition', description: 'A competition where students design simple solutions to improve food production or distribution.', location: 'Nationwide' },
    ],
  },
  creative: {
    techConnections: [
      { title: 'Digital Design', description: 'Creating graphics, branding and visual content using tools.' },
      { title: 'UI/UX Design', description: 'Designing how apps and websites look and feel.' },
      { title: 'Content Creation', description: 'Producing videos, animations and social media content.' },
      { title: 'Creative Coding', description: 'Using code to create art, music and interactive experiences.' },
    ],
    starterSkills: [
      { title: 'Design Tools', description: 'Learning Canva, Figma or basic design principles.' },
      { title: 'Visual Communication', description: 'Expressing ideas through images and layout.' },
      { title: 'Storytelling', description: 'Crafting narratives that connect with people.' },
      { title: 'Basic Photography', description: 'Understanding composition, lighting and editing.' },
    ],
    tryThis: {
      title: 'Redesign your school notice board',
      description: 'Take a look at your school notice board and redesign it digitally. Use a free tool like Canva to make it more engaging and organized. Show it to a friend for feedback.',
    },
    opportunities: [
      { title: 'Creative Tech Bootcamp', type: 'Programme', description: 'A weekend programme teaching digital design and content creation skills to secondary students.', location: 'Lagos' },
      { title: 'Young Designers Challenge', type: 'Competition', description: 'A competition where students design branding or posters for a local business or cause.', location: 'Nationwide' },
    ],
  },
  technology: {
    techConnections: [
      { title: 'Software Development', description: 'Building apps, websites and software tools.' },
      { title: 'Data Science', description: 'Analyzing data to find patterns and solve problems.' },
      { title: 'Cybersecurity', description: 'Protecting systems and information from threats.' },
      { title: 'AI & Machine Learning', description: 'Building systems that learn and make predictions.' },
    ],
    starterSkills: [
      { title: 'Basic Programming', description: 'Writing simple code in Python or JavaScript.' },
      { title: 'Logical Thinking', description: 'Breaking problems into steps and sequences.' },
      { title: 'Web Basics', description: 'Understanding how websites and the internet work.' },
      { title: 'Project Building', description: 'Turning an idea into a small working project.' },
    ],
    tryThis: {
      title: 'Build your first web page',
      description: 'Using free resources like freeCodeCamp or W3Schools, create a simple HTML page about yourself. Add a heading, a paragraph and a list of your favorite things.',
    },
    opportunities: [
      { title: '3MTT Fellowship', type: 'Programme', description: 'A national technology talent programme training young Nigerians in key digital and technical skills.', location: 'Nationwide / Online' },
      { title: 'Code Club Nigeria', type: 'Programme', description: 'After-school coding clubs where students learn to build simple apps and games.', location: 'Select schools' },
    ],
  },
  education: {
    techConnections: [
      { title: 'EdTech', description: 'Apps and platforms that make learning accessible and interactive.' },
      { title: 'Digital Content Creation', description: 'Creating educational videos, quizzes and lessons.' },
      { title: 'Learning Analytics', description: 'Using data to understand how students learn best.' },
      { title: 'E-Learning Platforms', description: 'Building tools that deliver education online.' },
    ],
    starterSkills: [
      { title: 'Communication', description: 'Explaining ideas clearly to different audiences.' },
      { title: 'Lesson Planning', description: 'Structuring information so others can learn it.' },
      { title: 'Digital Tools', description: 'Using presentations, videos and quizzes online.' },
      { title: 'Empathy & Patience', description: 'Understanding different learning needs and paces.' },
    ],
    tryThis: {
      title: 'Create a mini-lesson for a friend',
      description: 'Pick a topic you understand well and create a short 5-minute lesson about it. Use a slide presentation (Google Slides) or a short video. Teach it to a friend and ask for feedback.',
    },
    opportunities: [
      { title: 'Teach For Nigeria Youth Wing', type: 'Programme', description: 'A mentorship programme connecting students interested in education with teachers and education leaders.', location: 'Lagos / Online' },
      { title: 'EdTech Student Challenge', type: 'Competition', description: 'A competition where students propose simple tech solutions to improve learning in their school.', location: 'Nationwide' },
    ],
  },
  business: {
    techConnections: [
      { title: 'Digital Marketing', description: 'Promoting products and services using online tools.' },
      { title: 'E-Commerce', description: 'Selling products online through stores and platforms.' },
      { title: 'Business Analytics', description: 'Using data to understand customers and grow sales.' },
      { title: 'Startup Technology', description: 'Building and scaling a business using digital tools.' },
    ],
    starterSkills: [
      { title: 'Basic Business Planning', description: 'Writing a simple business idea and plan.' },
      { title: 'Social Media Skills', description: 'Creating content and engaging audiences online.' },
      { title: 'Customer Thinking', description: 'Understanding what people need and want.' },
      { title: 'Basic Finance', description: 'Tracking simple income and expenses.' },
    ],
    tryThis: {
      title: 'Start a mini business experiment',
      description: 'Identify something your schoolmates need (like snacks, study notes or a service). Create a simple plan: what is it, who will buy it, and how much will you charge? Try selling to 3 people.',
    },
    opportunities: [
      { title: 'JEN Teen Entrepreneur Camp', type: 'Programme', description: 'A bootcamp that teaches secondary students how to start and run a small business.', location: 'Lagos / Online' },
      { title: 'Young Entrepreneurs Pitch Competition', type: 'Competition', description: 'A competition where students pitch a simple business idea to a panel for feedback and prizes.', location: 'Nationwide' },
    ],
  },
  exploring: {
    techConnections: [
      { title: 'Digital Exploration', description: 'Trying out different tech tools to see what clicks.' },
      { title: 'Career Discovery Platforms', description: 'Online tools that help you learn about different fields.' },
      { title: 'Creative Coding', description: 'Exploring code as a way to express ideas and build things.' },
      { title: 'Online Learning', description: 'Using free courses to explore many interests.' },
    ],
    starterSkills: [
      { title: 'Curiosity', description: 'Asking questions and exploring new topics.' },
      { title: 'Self-Awareness', description: 'Noticing what you enjoy and what you are good at.' },
      { title: 'Digital Literacy', description: 'Navigating online tools and resources confidently.' },
      { title: 'Goal Setting', description: 'Setting small goals to explore different areas.' },
    ],
    tryThis: {
      title: 'Try three free online courses',
      description: 'Visit a platform like freeCodeCamp, Coursera or YouTube and try one short lesson each in three different areas (e.g. design, coding, business). Write down which one felt most exciting to you.',
    },
    opportunities: [
      { title: 'Career Discovery Day', type: 'Programme', description: 'A free event where students explore different career paths through hands-on workshops and mentor talks.', location: 'Lagos / Abuja / Online' },
      { title: 'Tech Exploration Bootcamp', type: 'Programme', description: 'A short programme that lets students try out different areas of technology to discover what they enjoy.', location: 'Online' },
    ],
  },
};

const strengthOverrides: Partial<Record<string, Partial<PathTemplate>>> = {
  tech: {
    techConnections: [
      { title: 'Software Development', description: 'Building apps, websites and software tools.' },
      { title: 'Data & Analytics', description: 'Working with data to discover insights and patterns.' },
      { title: 'Automation & Tools', description: 'Creating tools that make tasks faster and easier.' },
      { title: 'AI & Machine Learning', description: 'Exploring how machines can learn and assist.' },
    ],
  },
  creating: {
    techConnections: [
      { title: 'Digital Design', description: 'Creating visual content using design tools.' },
      { title: 'UI/UX Design', description: 'Designing how digital products look and feel.' },
      { title: 'Content Creation', description: 'Producing engaging digital content for audiences.' },
      { title: 'Creative Coding', description: 'Using code to create visual and interactive experiences.' },
    ],
  },
  'problem-solving': {
    techConnections: [
      { title: 'Data Science', description: 'Using data to understand and solve complex problems.' },
      { title: 'Systems Thinking', description: 'Understanding how different parts of a system connect.' },
      { title: 'Software Engineering', description: 'Designing solutions through code and logic.' },
      { title: 'Product Development', description: 'Building tools that solve real needs.' },
    ],
  },
  numbers: {
    techConnections: [
      { title: 'Data Analytics', description: 'Working with numbers to find patterns and insights.' },
      { title: 'Financial Technology', description: 'Applying numerical skills to money and markets.' },
      { title: 'Quantitative Research', description: 'Using data to answer questions and test ideas.' },
      { title: 'Business Intelligence', description: 'Helping organizations make data-driven decisions.' },
    ],
  },
  helping: {
    techConnections: [
      { title: 'Health Tech', description: 'Building tools that improve access to care and support.' },
      { title: 'EdTech', description: 'Creating platforms that make learning more accessible.' },
      { title: 'Social Impact Tech', description: 'Using technology to solve community challenges.' },
      { title: 'Community Platforms', description: 'Building digital spaces that connect and support people.' },
    ],
  },
  communicating: {
    techConnections: [
      { title: 'Digital Marketing', description: 'Reaching audiences through online content and campaigns.' },
      { title: 'Content Strategy', description: 'Planning and creating content that communicates clearly.' },
      { title: 'Technical Writing', description: 'Explaining complex topics in simple, accessible language.' },
      { title: 'Media & Broadcasting Tech', description: 'Using technology to produce and share stories.' },
    ],
  },
  building: {
    techConnections: [
      { title: 'Hardware & IoT', description: 'Building physical devices connected to the internet.' },
      { title: 'Robotics', description: 'Constructing and programming machines that interact with the world.' },
      { title: 'Product Engineering', description: 'Turning ideas into working physical or digital products.' },
      { title: '3D Printing & CAD', description: 'Designing and prototyping physical objects.' },
    ],
  },
  organizing: {
    techConnections: [
      { title: 'Data Management', description: 'Structuring and organizing information in useful ways.' },
      { title: 'Productivity Tools', description: 'Building or using tools that help people stay organized.' },
      { title: 'Project Management Tech', description: 'Using digital tools to plan and track work.' },
      { title: 'Knowledge Systems', description: 'Creating systems that store and share information.' },
    ],
  },
  starting: {
    techConnections: [
      { title: 'Startup Technology', description: 'Building and scaling new ventures with digital tools.' },
      { title: 'Product Development', description: 'Turning ideas into products people want.' },
      { title: 'Digital Business', description: 'Starting and running businesses online.' },
      { title: 'Innovation Labs', description: 'Exploring and testing new ideas in collaborative spaces.' },
    ],
  },
  writing: {
    techConnections: [
      { title: 'Technical Writing', description: 'Writing documentation and guides for tech products.' },
      { title: 'Content Creation', description: 'Creating written content for blogs, websites and platforms.' },
      { title: 'Copywriting & Branding', description: 'Writing persuasive content for digital brands.' },
      { title: 'Knowledge Sharing', description: 'Using digital platforms to share ideas and explanations.' },
    ],
  },
};

const genericOpportunities: Opportunity[] = [
  { title: 'Career Discovery Day', type: 'Programme', description: 'A free event where students explore different career paths through hands-on workshops and mentor talks.', location: 'Lagos / Abuja / Online' },
  { title: 'Youth Tech Bootcamp', type: 'Programme', description: 'A weekend bootcamp introducing secondary students to foundational technology and digital skills.', location: 'Online' },
];

export function generatePath(selections: OnboardingSelections): PathResult {
  const primaryInterest = selections.interests[0] || 'exploring';
  const secondaryInterest = selections.interests[1];
  const primaryStrength = selections.strengths[0];
  const secondaryStrength = selections.strengths[1];

  const baseTemplate = pathTemplates[primaryInterest] || pathTemplates.exploring;

  let techConnections = baseTemplate.techConnections;

  if (primaryStrength && strengthOverrides[primaryStrength]?.techConnections) {
    const strengthTechs = strengthOverrides[primaryStrength]!.techConnections!;
    techConnections = [
      ...techConnections.slice(0, 2),
      ...strengthTechs.slice(0, 2),
    ];
  }

  const interestName = interestLabels[primaryInterest] || 'Your Interests';
  const parts: string[] = [interestName];

  if (secondaryInterest && interestLabels[secondaryInterest]) {
    parts.push(interestLabels[secondaryInterest]);
  } else if (primaryStrength && strengthLabels[primaryStrength]) {
    parts.push(strengthLabels[primaryStrength]);
  }

  if (parts.length > 2) parts.splice(2);

  const pathTitle = parts.length === 1 ? parts[0] : parts.join(' + ');

  const primaryLabel = interestLabels[primaryInterest] || 'your interests';
  let explanation: string;

  if (secondaryInterest && interestLabels[secondaryInterest]) {
    explanation = `Your interest in ${primaryLabel} and ${interestLabels[secondaryInterest]} can work together. You don't have to choose between them — technology can help you combine both.`;
  } else if (primaryStrength && strengthLabels[primaryStrength]) {
    explanation = `Your interest in ${primaryLabel} and your enjoyment of ${strengthLabels[primaryStrength].toLowerCase()} can work together. Technology can strengthen the direction you're already drawn to.`;
  } else {
    explanation = `Your interest in ${primaryLabel} opens up exciting ways to use technology. You don't have to have it all figured out — this is a starting point to explore.`;
  }

  if (secondaryStrength && strengthLabels[secondaryStrength]) {
    explanation += ` Your tendency to ${strengthLabels[secondaryStrength].toLowerCase()} is a strength that will help you along the way.`;
  }

  return {
    title: pathTitle,
    explanation,
    techConnections,
    starterSkills: baseTemplate.starterSkills,
    tryThis: baseTemplate.tryThis,
    opportunities: baseTemplate.opportunities.length > 0 ? baseTemplate.opportunities : genericOpportunities,
  };
}

export const stepLabels = ['Discover', 'Connect', 'Explore', 'Build'] as const;
