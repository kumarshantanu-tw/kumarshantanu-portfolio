import { DocumentationProject } from "@/types/documentation";

export const documentationProjects: DocumentationProject[] = [
  {
    metadata: {
      featured: true,
      category: "User Guide",
    },

    slug: "payroll-hrms",

    hero: {
      title: "Payroll HRMS User Guide",

      subtitle: "Professional Project",

      description:
        "Developed a comprehensive Payroll HRMS user guide covering employee management, payroll processing, attendance, leave management, reports, and HR workflows.",

      coverImage: "/images/payroll/payroll-cover.png",
    },

    metrics: [
      {
        label: "Pages",
        value: 188,
      },
      {
        label: "Modules",
        value: 12,
      },
      {
        label: "Figures",
        value: 220,
      },
      {
        label: "Procedures",
        value: 50,
      },
    ],

    overview: {
      summary:
        "Developed a comprehensive Payroll HRMS user guide for HR managers, payroll administrators, and business owners. The guide provides task-based documentation, detailed business workflows, screenshots, and troubleshooting instructions to help users efficiently manage payroll and HR operations.",

      items: [
        {
          icon: "users",
          title: "Audience",
          value:
            "HR Managers, Payroll Administrators, Business Owners",
        },
        {
          icon: "book",
          title: "Documentation Type",
          value: "User Guide",
        },
        {
          icon: "monitor",
          title: "Product",
          value: "Payroll HRMS",
        },
        {
          icon: "package",
          title: "Version",
          value: "3.1",
        },
      ],
    },

    technologies: [
      "DITA XML",
      "Oxygen XML",
      "Markdown",
      "MS Word",
      "Snagit",
    ],

    highlights: [
      "Task-based documentation",
      "Information Architecture",
      "UI Documentation",
      "Troubleshooting",
      "Cross-functional Collaboration",
    ],

    gallery: [],

    resources: [
      {
        title: "Payroll HRMS User Guide",
        href: "",
        type: "docx",
        requiresAccess: true,
      },
    ],

    access: {
      restricted: true,

      message:
        "This documentation contains confidential company information. The complete document is available upon request for interview and evaluation purposes.",

      requestUrl: "",
    },
  },
];