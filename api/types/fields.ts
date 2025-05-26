export interface Field {
  id: string;
  name: string;
  type: 'futbol' | 'paddle';
  description: string;
  price_per_hour: number;
  location: string;
  image_url: string;
  owner_id: string;
  created_at: string;
}
