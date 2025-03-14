export const projectsData = [
  {
    id: "portfolio-website",
    title: "Cloud-Native Portfolio & Blog Platform",
    date: "March 2024",
    image: "/images/portfolio.jpg",
    description: "Modern portfolio and blog platform built with React and deployed on AWS, showcasing cloud-native architecture and DevOps best practices.",
    techStack: [
      "React",
      "AWS",
      "CI/CD",
      "Infrastructure as Code",
      "CloudFront",
      "Route 53"
    ],
    liveLink: "https://yourwebsite.com",
    githubLink: "https://github.com/yourusername/portfolio",
    featured: true,
    contentPath: "/content/projects/portfolio-website.md"
  },
  {
    id: "kubernetes-microservices",
    title: "Microservices Orchestration Platform",
    date: "February 2024",
    image: "/images/kubernetes.jpg",
    description: "Scalable microservices architecture deployed on Kubernetes, featuring automated scaling, monitoring, and zero-downtime deployments.",
    techStack: [
      "Kubernetes",
      "Docker",
      "Helm",
      "Prometheus",
      "Grafana",
      "Go"
    ],
    liveLink: "https://demo-microservices.com",
    githubLink: "https://github.com/yourusername/k8s-platform",
    featured: true,
    contentPath: "/content/projects/kubernetes-microservices.md"
  },
  {
    id: "terraform-aws-infrastructure",
    title: "Infrastructure as Code Framework",
    date: "January 2024",
    image: "/images/terraform.jpg",
    description: "Comprehensive IaC framework using Terraform to provision and manage multi-region AWS infrastructure with security best practices.",
    techStack: [
      "Terraform",
      "AWS",
      "Python",
      "Shell Scripting",
      "GitHub Actions",
      "AWS CDK"
    ],
    liveLink: "https://terraform-demo.com",
    githubLink: "https://github.com/yourusername/terraform-framework",
    featured: false,
    contentPath: "/content/projects/terraform-aws-infrastructure.md"
  },
  {
    id: "monitoring-dashboard",
    title: "Cloud Resource Monitoring Dashboard",
    date: "December 2023",
    image: "/images/monitoring.jpg",
    description: "Real-time monitoring solution for cloud resources using ELK stack, featuring custom alerts and automated incident response.",
    techStack: [
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "AWS Lambda",
      "CloudWatch",
      "Node.js"
    ],
    liveLink: "https://monitoring-demo.com",
    githubLink: "https://github.com/yourusername/monitoring-dashboard",
    featured: true,
    contentPath: "/content/projects/monitoring-dashboard.md"
  }
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projectsData;
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
}; 