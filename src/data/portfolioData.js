// Portfolio Data - Kanishka Parganiha's Profile
export const personalInfo = {
  name: "Kanishka Parganiha",
  title: "Data Engineer",
  tagline: "Building Intelligent Data Pipelines at Scale",
  description: "Data Engineer at Amazon specializing in large-scale data pipelines, ML infrastructure, and automation systems. Processing 338M+ ASINs annually with $4.09M in savings. MS Industrial Engineering from Northeastern University.",
  email: "kanishkparganiha@gmail.com",
  phone: "617-821-4589",
  location: "Seattle, Washington",
  social: {
    github: "https://github.com/Kanishkparganiha",
    linkedin: "https://www.linkedin.com/in/kanishka-parganiha-99b926144/",
    twitter: "https://twitter.com/kanishkparganiha",
  },
  resumeLink: "/resume.pdf",
};

export const aboutMe = {
  bio: `I'm a Data Engineer at Amazon building intelligent, scalable data infrastructure that drives automation and reduces manual intervention at massive scale. With a Master's in Industrial Engineering from Northeastern University (GPA: 3.73), I specialize in designing ML data pipelines, LLM-powered agent systems, and high-throughput classification systems.

At Amazon, I've built the A2H pipeline processing 338M+ ASINs annually with 92.51% accuracy, contributing to $4.09M in annualized savings. My work spans AWS services (Glue, SageMaker, Redshift, Neptune), PySpark optimization, and real-time data processing.

Beyond my work at Amazon, I'm passionate about deep learning, reinforcement learning, and applying ML to finance and supply chain optimization. My open-source projects include NER with BERT (94.4% F1), Deep RL for inventory management, and autonomous AI agents.`,
  highlights: [
    "338M+ ASINs processed annually",
    "$4.09M annualized cost savings",
    "92.51% ML classification accuracy",
    "87.5% reduction in PySpark job execution time",
  ],
};

export const skills = {
  categories: [
    {
      name: "Data Processing",
      icon: "database",
      skills: [
        { name: "Apache Spark / PySpark", level: 95 },
        { name: "AWS Glue & EMR", level: 92 },
        { name: "AWS Step Functions", level: 94 },
        { name: "AWS Batch", level: 90 },
      ],
    },
    {
      name: "Cloud & ML",
      icon: "cloud",
      skills: [
        { name: "AWS (Lambda, S3, DynamoDB)", level: 95 },
        { name: "Amazon SageMaker", level: 90 },
        { name: "Amazon Neptune & Redshift", level: 92 },
        { name: "EC2, ECR, AWS CLI", level: 88 },
      ],
    },
    {
      name: "Programming",
      icon: "code",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL (MySQL, PostgreSQL)", level: 92 },
        { name: "PySpark & R", level: 90 },
        { name: "Bash Scripting", level: 85 },
      ],
    },
    {
      name: "AI & Architecture",
      icon: "tools",
      skills: [
        { name: "AI Agents & RAG", level: 90 },
        { name: "MCP (Model Context Protocol)", level: 88 },
        { name: "Flask & Docker", level: 85 },
        { name: "Tableau & QuickSight", level: 87 },
      ],
    },
  ],
};

export const projects = [
  // Amazon Projects
  {
    id: 1,
    title: "A2H Data Pipeline (ASIN Audit Helper)",
    description: "Managed and implemented the A2H data pipeline that processes over 338M ASINs annually for automated classification, reducing manual reviews by 75% and contributing to annualized savings of $4.09M. Scaled ML infrastructure using AWS Glue, DynamoDB, S3, and SageMaker achieving 92.51% accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["AWS Glue", "SageMaker", "DynamoDB", "S3", "PySpark"],
    github: null,
    demo: null,
    highlights: [
      "338M+ ASINs processed annually",
      "75% reduction in manual reviews",
      "$4.09M annualized savings",
    ],
    category: "amazon",
  },
  {
    id: 2,
    title: "Unified Image Labeling (UIL) Workflow",
    description: "Delivered automated workflow that reduced image review time from 3 weeks to 1-7 days while enabling ~186K+ image reviews in Q1 2025 and supporting the onboarding of 3k classes to the automation workflow.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
    tags: ["Image Processing", "Automation", "AWS", "ML Pipeline"],
    github: null,
    demo: null,
    highlights: [
      "Review time: 3 weeks → 1-7 days",
      "186K+ image reviews in Q1 2025",
      "3K classes onboarded",
    ],
    category: "amazon",
  },
  {
    id: 3,
    title: "EPR Compliance Data Pipelines",
    description: "Partnered with EPR, COPS, SPX, and WW Legal teams to deliver data pipelines for Extended Producer Responsibility compliance that processed parquet files affecting 23.1M active ASINs, 78K 3P Sellers, and $6.9B GMS across the DE catalog.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["Data Pipelines", "Compliance", "Parquet", "Cross-team"],
    github: null,
    demo: null,
    highlights: [
      "23.1M active ASINs processed",
      "78K 3P Sellers impacted",
      "$6.9B GMS across DE catalog",
    ],
    category: "amazon",
  },
  {
    id: 4,
    title: "PySpark & Redshift Optimization",
    description: "Reduced execution time of 15 PySpark jobs by 87.5% through spark parameter optimization. Deployed Vacuum/Analyze automation across 3 Redshift clusters, reclaiming 100TB+ and sorting 12B+ rows. Built 5 QuickSight dashboards for table health monitoring.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    tags: ["PySpark", "Redshift", "QuickSight", "Optimization"],
    github: null,
    demo: null,
    highlights: [
      "87.5% reduction in job execution time",
      "100TB+ space reclaimed",
      "12B+ rows sorted",
    ],
    category: "amazon",
  },
  // GitHub Open Source Projects
  {
    id: 5,
    title: "Named Entity Recognition with BERT",
    description: "NER implementation using BERT transformer model with PyTorch. Fine-tuned on MIT Movie Corpora achieving 94.4% F1 score for entity extraction from text.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
    tags: ["BERT", "PyTorch", "NLP", "Transformers", "NER"],
    github: "https://github.com/Kanishkparganiha/Named-Entity-Recognition-using-BERT-with-PyTorch",
    demo: null,
    highlights: [
      "94.4% F1 Score achieved",
      "20 GitHub stars",
      "MIT Movie Corpora dataset",
    ],
    category: "opensource",
  },
  {
    id: 6,
    title: "Deep RL for Inventory Management",
    description: "Deep Reinforcement Learning implementation for multi-echelon inventory management optimization. Uses DQN and policy gradient methods to optimize inventory decisions across supply chain networks.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    tags: ["Deep RL", "DQN", "Supply Chain", "Python", "TensorFlow"],
    github: "https://github.com/Kanishkparganiha/deep-reinforcement-learning-on-multi-echelon-inventory-management",
    demo: null,
    highlights: [
      "14 GitHub stars",
      "Multi-echelon optimization",
      "Policy gradient methods",
    ],
    category: "opensource",
  },
  {
    id: 7,
    title: "Agentic Roaring Kitty System",
    description: "Agentic version of the famous Roaring Kitty stock analysis strategy. Uses AI agents to automate value investing analysis and identify undervalued stocks with high short interest.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    tags: ["AI Agents", "Finance", "Python", "Stock Analysis", "LLM"],
    github: "https://github.com/Kanishkparganiha/agentic-roaring-kitty-system",
    demo: null,
    highlights: [
      "AI-powered stock analysis",
      "Value investing automation",
      "Short interest detection",
    ],
    category: "opensource",
  },
  {
    id: 8,
    title: "Autonomous Security Incident Response Agent",
    description: "ASIRA - Autonomous Security Incident Response Agent MVP. AI-powered system for automated detection, analysis, and response to security incidents using intelligent agents.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    tags: ["Security", "AI Agents", "Python", "Automation", "Incident Response"],
    github: "https://github.com/Kanishkparganiha/autonomous-security-incident-response-agent",
    demo: null,
    highlights: [
      "Automated incident detection",
      "AI-powered response",
      "Security automation",
    ],
    category: "opensource",
  },
  {
    id: 9,
    title: "CT Scan Segmentation with Mask R-CNN",
    description: "Instance segmentation of CT scan images using Mask R-CNN architecture. Medical imaging application for automated organ and anomaly detection in radiological scans.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    tags: ["Mask R-CNN", "Medical Imaging", "Deep Learning", "Computer Vision"],
    github: "https://github.com/Kanishkparganiha/Instance-segmentation-CT-scan-with-Mask-RCNN",
    demo: null,
    highlights: [
      "Medical image segmentation",
      "Mask R-CNN implementation",
      "CT scan analysis",
    ],
    category: "opensource",
  },
  {
    id: 10,
    title: "Data Warehouse on AWS Redshift",
    description: "Complete data warehouse implementation on AWS Redshift for a music streaming application. ETL pipelines, star schema design, and analytics queries for user behavior analysis.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
    tags: ["AWS Redshift", "ETL", "Data Warehouse", "SQL", "Python"],
    github: "https://github.com/Kanishkparganiha/data-warehouse-on-AWS-Redshift-for-Music-Application",
    demo: null,
    highlights: [
      "Star schema design",
      "ETL pipeline automation",
      "Analytics dashboard ready",
    ],
    category: "opensource",
  },
];

export const experience = [
  {
    id: 1,
    role: "Data Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    period: "April 2022 - Present",
    duration: "2+ years",
    description: "Building and optimizing large-scale data pipelines for Amazon's product safety and classification infrastructure. Leading ML pipeline development and cross-functional data initiatives.",
    achievements: [
      "Built A2H pipeline processing 338M+ ASINs annually, reducing manual reviews by 75% with $4.09M savings",
      "Scaled ML infrastructure with AWS Glue, DynamoDB, S3, SageMaker achieving 92.51% accuracy",
      "Delivered UIL workflow reducing image review time from 3 weeks to 1-7 days (186K+ reviews, 3K classes)",
      "Designed feature extraction pipeline for structured/unstructured data via SDCV APIs",
      "Optimized AWS batch processing with 45% reduction in processing time",
      "Reduced PySpark job execution time by 87.5% (15 jobs across 3 profiles, 5 regions)",
      "EPR compliance pipelines: 23.1M ASINs, 78K sellers, $6.9B GMS - recognized by PSC Tech Director",
      "Vacuum/Analyze automation: reclaimed 100TB+, sorted 12B+ rows across 3 Redshift clusters",
      "Built 5 QuickSight dashboards for Redshift table health monitoring",
    ],
  },
  {
    id: 2,
    role: "Fintech Data Science Intern",
    company: "Raise Green",
    location: "Boston, MA",
    period: "January 2021 - August 2021",
    duration: "8 months",
    description: "Built data infrastructure and analytics solutions for a sustainable fintech investing platform, focusing on investor reconciliation, customer segmentation, and full-stack development.",
    achievements: [
      "Built scalable web dashboard using Flask, Docker, Python on AWS EC2, reducing Investor Reconciliation by 75%",
      "Extracted trades data from Transact API for real-time financial reporting",
      "Performed EDA and Customer Segmentation using pandas and sklearn for Marketing personas",
      "Applied PCA and Lasso regression for feature selection and predictive modeling",
      "Conducted A/B testing experiments to optimize user engagement and conversion rates",
      "Developed frontend components using ReactJS and Material-UI for improved user experience",
      "Automated deployment pipelines and bash scripting for CI/CD workflows",
      "Deployed applications on Vercel for seamless production hosting",
      "Developed web-scraping pipeline with Selenium increasing marketplace webpage views by 150%",
    ],
  },
  {
    id: 3,
    role: "Senior MEP BIM Engineer",
    company: "Techture Structures Pvt Ltd",
    location: "Nagpur, Maharashtra, India",
    period: "July 2017 - June 2019",
    duration: "2 years",
    description: "Led Building Information Modeling team for MEP (Mechanical, Electrical, Plumbing) systems across industrial and commercial construction projects, driving digital transformation in construction documentation.",
    achievements: [
      "Led MEP coordination for multi-specialty projects using Autodesk Revit, Navisworks, and BIM 360",
      "Developed LOD-300 to LOD-500 models for mechanical, electrical, and plumbing systems",
      "Created photorealistic renderings and walkthroughs using Lumion for client presentations",
      "Automated repetitive modeling tasks using Dynamo visual programming",
      "Performed clash detection and resolution across architectural, structural, and MEP disciplines",
      "Managed a team of 10 engineers developing BIM 3D models for multi-specialty projects",
      "Created models from AutoCAD layouts, Point Cloud data using AutoDesk Revit",
      "Analyzed cooling energy simulation data using NumPy, Pandas, Matplotlib",
      "Presented data-driven findings to Engineering leadership for project optimization",
    ],
  },
  {
    id: 4,
    role: "Industrial Engineering Intern",
    company: "Hasdeo Thermal Power Plant",
    location: "Korba, Chhattisgarh, India",
    period: "May 2016 - July 2016",
    duration: "3 months",
    description: "Applied industrial engineering principles to optimize thermal power plant operations, focusing on Just-In-Time strategies and lean manufacturing techniques.",
    achievements: [
      "Implemented JIT (Just-In-Time) strategy for spare parts inventory management",
      "Applied lean manufacturing techniques to reduce waste in maintenance operations",
      "Conducted time-motion studies to improve operational efficiency",
      "Analyzed plant performance data to identify bottlenecks and optimization opportunities",
      "Collaborated with maintenance teams to streamline procurement processes",
    ],
  },
  {
    id: 5,
    role: "Supply Chain Intern",
    company: "SAIL (Steel Authority of India Limited)",
    location: "Bhilai, Chhattisgarh, India",
    period: "June 2015 - August 2015",
    duration: "3 months",
    description: "Gained hands-on experience in supply chain management at one of India's largest steel manufacturers, focusing on inventory analysis and procurement optimization.",
    achievements: [
      "Conducted inventory analysis to optimize stock levels and reduce carrying costs",
      "Managed RFQ (Request for Quotation) processes for procurement efficiency",
      "Analyzed supplier performance data to improve vendor selection criteria",
      "Assisted in demand forecasting and inventory planning for raw materials",
      "Documented supply chain workflows and identified process improvement opportunities",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Industrial Engineering",
    school: "Northeastern University",
    location: "Boston, MA",
    period: "2019 - December 2021",
    focus: "GPA: 3.73/4.0 | Operations Research, Optimization & Data Science",
  },
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    school: "Medi-Caps University",
    location: "Indore, Madhya Pradesh, India",
    period: "2013 - 2017",
    focus: "Engineering Fundamentals & Manufacturing",
  },
];

export const certifications = [
  {
    name: "Data Engineering Nanodegree",
    issuer: "Udacity",
    year: "2021",
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau Software",
    year: "2020",
  },
  {
    name: "Lean Six Sigma Green Belt",
    issuer: "IISE",
    year: "2019",
  },
  {
    name: "Machine Learning by Andrew Ng",
    issuer: "Stanford University (Coursera)",
    year: "2019",
  },
  {
    name: "SQL for Data Science",
    issuer: "Coursera",
    year: "2019",
  },
  {
    name: "Supply Chain Logistics",
    issuer: "Rutgers University (Coursera)",
    year: "2019",
  },
];

export const publications = [
  {
    title: "Linear Programming with Python and PuLP",
    publisher: "IAEME Publication",
    year: "2018",
    description: "Research paper on formulating and solving mathematical optimization programs using PuLP linear programming modeler in Python.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Processing 338M ASINs: Building A2H at Amazon Scale",
    excerpt: "How we built a data pipeline processing 338M+ ASINs annually with 92.51% ML accuracy, reducing manual reviews by 75% and saving $4.09M.",
    date: "2025-01-15",
    readTime: "12 min",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Optimizing PySpark Jobs: 87.5% Faster Execution",
    excerpt: "Deep dive into Spark parameter tuning and SQL filter optimization that reduced job execution time by 87.5% across 15 jobs.",
    date: "2025-01-02",
    readTime: "15 min",
    category: "Optimization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Deep Reinforcement Learning for Supply Chain",
    excerpt: "Applying DQN and policy gradients to optimize multi-echelon inventory management decisions across complex supply chain networks.",
    date: "2024-12-20",
    readTime: "10 min",
    category: "ML Research",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "BERT for Named Entity Recognition: 94.4% F1",
    excerpt: "Fine-tuning BERT transformers for NER tasks using PyTorch, achieving 94.4% F1 score on the MIT Movie Corpora dataset.",
    date: "2024-12-10",
    readTime: "18 min",
    category: "NLP",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    link: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "PSC Tech Director",
    role: "Director",
    company: "Amazon",
    content: "Kanishka's work on EPR compliance pipelines processing 23.1M ASINs and $6.9B GMS demonstrated exceptional cross-team collaboration and technical excellence.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export const stats = [
  { value: "338M+", label: "ASINs Processed Annually" },
  { value: "$4.09M", label: "Annualized Savings" },
  { value: "92.51%", label: "ML Accuracy" },
  { value: "87.5%", label: "Performance Improvement" },
];

export const technicalHighlights = [
  {
    title: "Amazon Impact",
    items: [
      "338M+ ASINs processed with 92.51% accuracy",
      "$4.09M annualized cost savings",
      "75% reduction in manual reviews",
      "100TB+ Redshift space reclaimed",
      "12B+ rows sorted and optimized",
    ],
  },
  {
    title: "Technical Skills",
    items: [
      "Python, PySpark, R, Bash, AWS CLI",
      "MySQL, PostgreSQL, DynamoDB, MongoDB, Redshift, Neptune",
      "SageMaker, Glue, Batch, EC2, ECR, Lambda",
      "AI Agents, MCP, RAG",
      "Tableau, QuickSight, Flask, Docker",
    ],
  },
];
