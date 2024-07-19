export interface TripDetails {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export interface Participant {
  id: string;
  name?: string;
  email: string;
  is_confirmed: boolean;
}

export interface IActivity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}
