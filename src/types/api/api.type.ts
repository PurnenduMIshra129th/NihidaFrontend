export interface IFocusActivityApiPayload {
  title: string;
  subtitle: string;
  description: string;
  impactStats: IImpactStatPayload[];
  testimonials?: ITestimonialPayload[];
  location?: string;
  fromDate: Date | string;
  toDate: Date | string;
}
export interface IFocusActivityApiResponse extends ICreatedAt {
  title: string;
  subtitle: string;
  description: string;
  impactStats: IImpactStatResponse[];
  testimonials?: ITestimonialResponse[];
  location?: string;
  fromDate: Date;
  toDate: Date;
  files?: IFile[];
}
export interface IUpcomingEventApiPayload {
  title: string;
  subtitle?: string;
  description: string;
  fromDate: Date | string;
  toDate: Date | string;
  location: string;
  tags?: string[];
  cta?: {
    label?: string;
    url?: string;
  };
  impactGoals?: string[];
  contactPerson?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  createdBy?: string;
  status?: "upcoming" | "ongoing" | "closed";
}
export interface IUpcomingEventApiResponse extends ICreatedAt {
  title: string;
  subtitle?: string;
  description: string;
  fromDate: Date;
  toDate: Date;
  location: string;
  tags?: string[];
  cta?: {
    label?: string;
    url?: string;
  };
  impactGoals?: string[];
  contactPerson?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  createdBy?: string;
  status?: "upcoming" | "ongoing" | "closed";
  files?: IFile[];
}
export interface IDocumentApiPayload {
  title: string;
  type:
    | "certificate"
    | "recognition"
    | "legal"
    | "media"
    | "annual-report"
    | "other";
  description?: string;
  issuedBy?: string;
  issueDate?: string;
  expiresAt?: string;
  visibility: "public" | "internal";
  tags?: string[];
  highlighted?: boolean;
  createdBy?: string;
}
export interface IDocumentApiResponse
  extends IDocumentApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface IGalleryApiPayload {
  title: string;
  category:
    | "event"
    | "impact"
    | "volunteer"
    | "daily-life"
    | "community"
    | "other";
  description?: string;
  date: string;
  visibility: "public" | "internal";
  tags?: string[];
  highlighted?: boolean;
  uploadedBy?: string;
}
export interface IGalleryApiResponse
  extends IGalleryApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface INewsApiPayload {
  title: string;
  summary: string;
  content: string;
  source?: string;
  url?: string;
  category: "press-release" | "impact" | "announcement" | "event" | "other";
  date: string;
  tags?: string[];
  visibility: "public" | "internal";
  createdBy?: string;
}
export interface INewsApiResponse
  extends INewsApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface IOurPartnerApiPayload {
  name: string;
}
export interface IOurPartnerApiResponse
  extends IOurPartnerApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface IContactUsApiPayload {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  type: "volunteer" | "donation" | "partnership" | "general" | "feedback";
  responded?: boolean;
  createdBy?: string;
}
export interface IContactUsApiResponse
  extends IContactUsApiPayload,
    ICreatedAt {}

export interface ITeamMemberApiPayload {
  name: string;
  designation: string;
  bio: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
  focusArea: "education" | "health" | "environment" | "livelihood" | "other";
  dateJoined: string; // ISO date string

  tags?: string[];
  visibility: "public" | "internal";
  createdBy?: string; // MongoDB ObjectId as string
}
export interface ITeamMemberApiResponse
  extends ITeamMemberApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface ISocialLinkAndCommonImageApiPayload {
  instagramUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  whatsappUrl: string;
  telegramUrl: string;
  phoneNumber1: string;
  email: string;
  phoneNumber2: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}
export interface ISocialLinkAndCommonImageApiResponse
  extends ISocialLinkAndCommonImageApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface IVideoApiPayload {
  title: string;
  description?: string;
  category:
    | "testimonial"
    | "project"
    | "awareness"
    | "media"
    | "event"
    | "other";
  date: string;
  visibility: "public" | "internal";
  tags?: string[];
  highlighted?: boolean;
  uploadedBy?: string;
  youtubeUrl: string;
}
export interface IVideoApiResponse
  extends IVideoApiPayload,
    ICreatedAt,
    IFileApiData {}

export interface ISignUpApiPayload {
  userName: string;
  email: string;
  password: string;
  role: string;
}
export interface ISignUpApiResponse {
  token: string;
  user: {
    email: string;
    name: string;
    password: string;
    role: string;
    __v: number;
    _id: string;
  };
}
export interface ILoginApiPayload {
  email: string;
  password: string;
}
export interface ILoginApiResponse {
  token: string;
  user: {
    email: string;
    name: string;
    password: string;
    role: string;
    __v: number;
    _id: string;
  };
}
export interface ICreatePaymentApiPayload {
 amount: string;
 currency: string
 metadata: {
  name: string;
  email: string
 }
  name: string
  email: string
  message?: string
  billingName: string
  billingAddress: string
  city: string
  state: string
  postalCode: string
  country: string
}
export interface ICreatePaymentApiResponse {
 clientSecret: string,
 paymentIntentId: string
 databaseId: string
}
export interface IUpdatePaymentApiPayload {
 status: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded"
}
export interface IUpdatePaymentApiResponse {
 status: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded"
}
export interface IGetUserApiResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
}
export interface IImpactStatResponse extends IImpactStatPayload, IId {}
export interface IImpactStatPayload {
  label?: string;
  value?: number;
  unit?: string;
}

export interface ITestimonialPayload {
  name?: string;
  quote?: string;
  role?: string;
}
export interface ITestimonialResponse extends ITestimonialPayload, IId {}
export interface IFile extends IId {
  fileName: string;
  originalName: string;
  mimeType: string;
  serverFilePath: string;
  publicFilePath: string;
}
export interface IId {
  _id: string;
}
export interface ICreatedAt extends IId {
  createdAt?: string;
}
export interface IFileApiData {
  files: IFile[];
}
export interface ISuccessResponse<T> {
  statusCode: 1;
  message: string;
  data: T;
}

export interface IErrorResponse {
  statusCode: 0;
  errorCode: number;
  errorMessage: string;
  shortHand: string;
  error: string;
}
