// API client for Sterling Oaks Golf Club backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5027/api/v1';

export interface Course {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description?: string;
  parTotal: number;
  yardageTotal: number;
  difficultyRating: number;
  heroImageUrl: string;
  location: string;
  gallery?: string[];
  facilities?: {
    drivingRange: boolean;
    caddies: boolean;
    clubhouse: boolean;
    proShop: boolean;
    golfCarts: boolean;
  };
  holes?: Array<{
    number: number;
    par: number;
    yardage: number;
    handicapIndex: number;
    description: string;
  }>;
}

export interface Membership {
  id: number;
  name: string;
  description: string;
  price: number;
  billingInterval: string;
  benefits: string[];
  isActive: boolean;
}

export interface Event {
  id: number;
  slug: string;
  title: string;
  description: string;
  courseName: string;
  startDatetime: string;
  endDatetime: string;
  capacity: number;
  price: number;
  eventType: string;
  heroImageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  sourcePage?: string;
}

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    return this.fetch<Course[]>('/courses');
  }

  async getCourse(slug: string): Promise<Course> {
    return this.fetch<Course>(`/courses/${slug}`);
  }

  // Memberships
  async getMemberships(): Promise<Membership[]> {
    return this.fetch<Membership[]>('/memberships');
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return this.fetch<Event[]>('/events');
  }

  async getEvent(slug: string): Promise<Event> {
    return this.fetch<Event>(`/events/${slug}`);
  }

  // Contact
  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    return this.fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new APIClient(API_BASE_URL);
