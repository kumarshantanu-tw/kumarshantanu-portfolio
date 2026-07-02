export type ShowcaseResource = {
    title: string;
    href: string;
    type: "pdf" | "website" | "github" | "video" | "docx" ;
  };
  
  export type ShowcaseProject = {
    id: number;
    title: string;
    type: string;
    description: string;
    technologies: string[];
    highlights: string[];
    status: string;
    resources: ShowcaseResource[];
  };
  
  export const showcaseProjects: ShowcaseProject[] = [
    {
      id: 1,
      title: "Payroll HRMS User Guide",
      type: "User Guide",
      description:
        "Developed a comprehensive user guide covering employee management, payroll processing, attendance, leave management, and HRMS workflows.",
  
      technologies: [
        "DITA XML",
        "Oxygen XML",
        "Markdown",
      ],
  
      highlights: [
        "Task-based documentation",
        "Step-by-step procedures",
        "Screenshots",
        "Troubleshooting",
      ],
  
      status: "Professional Project",
  
      resources: [
        {
          title: "Payroll User Guide",
          href: "/showcase/payroll-hrms",
          type: "website",
        },
      ],
    },
  
    {
      id: 2,
      title: "Shift Management Documentation",
      type: "Feature Documentation",
      description:
        "Created detailed documentation for shift creation, shift assignment, open shifts, roster management, and attendance workflows.",
  
      technologies: [
        "DITA XML",
        "User Guide",
        "SaaS",
      ],
  
      highlights: [
        "Workflow documentation",
        "Business rules",
        "Examples",
        "UI Documentation",
      ],
  
      status: "Professional Project",
  
      resources: [],
    },
  
    {
      id: 3,
      title: "Release Notes",
      type: "Release Documentation",
      description:
        "Prepared structured release notes describing new features, enhancements, bug fixes, and known issues for software releases.",
  
      technologies: [
        "Markdown",
        "Release Notes",
        "Git",
      ],
  
      highlights: [
        "Feature summary",
        "Bug fixes",
        "Known issues",
        "Version history",
      ],
  
      status: "Professional Project",
  
      resources: [],
    },
  
    {
      id: 4,
      title: "Knowledge Base & Troubleshooting",
      type: "Knowledge Base",
      description:
        "Created troubleshooting articles and knowledge base content to help customers resolve common issues independently.",
  
      technologies: [
        "Knowledge Base",
        "Confluence",
        "Markdown",
      ],
  
      highlights: [
        "FAQs",
        "Troubleshooting",
        "Best practices",
        "Support articles",
      ],
  
      status: "Professional Project",
  
      resources: [],
    },
  ];