export interface PartnerLogos {
  _id: string
  logoUrl?: string
  partnerName?: string
  displayOrder?: number
}

export interface Services {
  _id: string
  serviceName?: string
  description?: string
  icon?: string
  displayOrder?: number
}

export interface CaseStudies {
  _id: string
  caseStudyTitle?: string
  clientName?: string
  industry?: string
  thumbnailImage?: string
  challenge?: string
  solution?: string
  results?: string
  completionDate?: Date | string
  projectUrl?: string
  displayOrder?: number
}

export interface Testimonials {
  _id: string
  clientName?: string
  testimonialText?: string
  clientImage?: string
  rating?: number
  displayOrder?: number
}

export interface FrequentlyAskedQuestions {
  _id: string
  question?: string
  answer?: string
  category?: string
  isFeatured?: boolean
  displayOrder?: number
}
