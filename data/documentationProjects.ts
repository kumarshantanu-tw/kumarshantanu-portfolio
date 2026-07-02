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

      coverImage: "/images/payroll/cover.png",
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

    structure: [
      {
        title: "Dashboard",
        description:
          "Overview of employee activities, attendance, payroll status, and important HR metrics.",
      },
      {
        title: "Employee Management",
        description:
          "Manage employee profiles, departments, designations, branches, employment details, and salary information.",
      },
      {
        title: "Attendance Management",
        description:
          "Track attendance, configure attendance policies, and manage daily attendance workflows.",
      },
      {
        title: "Shift Management",
        description:
          "Create shifts, assign employees, configure shift rules, manage open shifts, and maintain rosters.",
      },
      {
        title: "Leave & Holidays",
        description:
          "Configure leave policies, holiday calendars, leave allocation, carry forward, and approvals.",
      },
      {
        title: "Payroll Processing",
        description:
          "Generate payroll, configure salary structures, deductions, earnings, and payroll calculations.",
      },
      {
        title: "Approval Requests",
        description:
          "Review and approve attendance, leave requests, shift changes, and other employee requests.",
      },
      {
        title: "Reports & Analytics",
        description:
          "Generate payroll, attendance, HR, and operational reports for business insights.",
      },
    ],

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

    gallery: [
        {
          id: 1,
          title: "Cover Page",
          description:
            "Professional Payroll HRMS User Guide cover page showcasing branding and documentation version.",
          image: "/images/placeholders/document-preview.png",
          featured: true,
        },
        {
          id: 2,
          title: "Dashboard",
          description:
            "Overview of the Payroll HRMS dashboard and navigation experience.",
          image: "/images/placeholders/document-preview.png",
        },
        {
          id: 3,
          title: "Employee Management",
          description:
            "Managing employee profiles, departments, designations, and employment details.",
          image: "/images/placeholders/document-preview.png",
        },
        {
          id: 4,
          title: "Attendance",
          description:
            "Attendance policies, punch records, attendance tracking, and working hours.",
          image: "/images/placeholders/document-preview.png",
        },
        {
          id: 5,
          title: "Shift Management",
          description:
            "Create shifts, assign employees, and manage work schedules.",
          image: "/images/placeholders/document-preview.png",
        },
        {
          id: 6,
          title: "Leave & Holidays",
          description:
            "Configure leave policies, holidays, approvals, and leave balances.",
          image: "/images/placeholders/document-preview.png",
        },
      ],

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