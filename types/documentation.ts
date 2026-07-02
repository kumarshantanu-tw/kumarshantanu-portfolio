export type DocumentationHero = {
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
  };
  
  export type DocumentationMetric = {
    label: string;
    value: number;
  };
  
  export type DocumentationOverviewItem = {
    icon: string;
    title: string;
    value: string;
  };
  
  export type DocumentationOverview = {
    summary: string;
    items: DocumentationOverviewItem[];
  };
  
  export type DocumentationStructureItem = {
    title: string;
    description: string;
  };

  export type DocumentationGalleryItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    featured?: boolean;
  };
  
  export type DocumentationResource = {
    title: string;
    href: string;
    type: "pdf" | "docx" | "website" | "github" | "video";
    requiresAccess: boolean;
  };
  
  export type DocumentationAccess = {
    restricted: boolean;
    message: string;
    requestUrl: string;
  };
  
  export type DocumentationMetadata = {
    featured: boolean;
    category: string;
  };
  
  export type DocumentationProject = {
    metadata: DocumentationMetadata;
  
    slug: string;
  
    hero: DocumentationHero;
  
    metrics: DocumentationMetric[];
  
    overview: DocumentationOverview;

    structure: DocumentationStructureItem[];
    
    technologies: string[];
  
    highlights: string[];
  
    gallery: DocumentationGalleryItem[];
  
    resources: DocumentationResource[];
  
    access: DocumentationAccess;
  };