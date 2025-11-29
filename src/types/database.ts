export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: string;
          email: string;
          phone: string;
          name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'user_id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      pets: {
        Row: {
          pet_id: string;
          user_id: string;
          name: string;
          type: string;
          breed: string;
          age: number;
          gender: string;
          photo_url: string | null;
          medical_history: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['pets']['Row'], 'pet_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['pets']['Insert']>;
      };
      clinics: {
        Row: {
          clinic_id: string;
          name: string;
          city: string;
          address: string;
          pincode: string;
          latitude: number;
          longitude: number;
          operating_hours: string;
          services_available: string[];
          is_24x7: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['clinics']['Row'], 'clinic_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['clinics']['Insert']>;
      };
      doctors: {
        Row: {
          doctor_id: string;
          clinic_id: string;
          name: string;
          specialization: string;
          qualification: string;
          photo_url: string | null;
          bio: string;
          available_days: string[];
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['doctors']['Row'], 'doctor_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['doctors']['Insert']>;
      };
      appointments: {
        Row: {
          appointment_id: string;
          user_id: string;
          pet_id: string;
          clinic_id: string;
          doctor_id: string;
          service_type: string;
          appointment_date: string;
          appointment_time: string;
          status: string;
          notes: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['appointments']['Row'], 'appointment_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['appointments']['Insert']>;
      };
      products: {
        Row: {
          product_id: string;
          name: string;
          brand: string;
          category: string;
          description: string;
          price: number;
          stock: number;
          images: string[];
          pet_type: string;
          weight: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'product_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['products']['Insert']>;
      };
      orders: {
        Row: {
          order_id: string;
          user_id: string;
          total_amount: number;
          delivery_address: string;
          delivery_slot: string;
          payment_status: string;
          order_status: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['orders']['Row'], 'order_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['orders']['Insert']>;
      };
      order_items: {
        Row: {
          item_id: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
        };
        Insert: Omit<Database['public']['Tables']['order_items']['Row'], 'item_id'>;
        Update: Partial<Database['public']['Tables']['order_items']['Insert']>;
      };
      reviews: {
        Row: {
          review_id: string;
          user_id: string;
          entity_type: string;
          entity_id: string;
          rating: number;
          review_text: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['reviews']['Row'], 'review_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['reviews']['Insert']>;
      };
      medical_records: {
        Row: {
          record_id: string;
          pet_id: string;
          appointment_id: string | null;
          record_type: string;
          document_url: string;
          notes: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['medical_records']['Row'], 'record_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['medical_records']['Insert']>;
      };
      wellness_plans: {
        Row: {
          plan_id: string;
          user_id: string;
          pet_id: string;
          plan_type: string;
          start_date: string;
          end_date: string;
          status: string;
          benefits_used: number;
        };
        Insert: Omit<Database['public']['Tables']['wellness_plans']['Row'], 'plan_id'>;
        Update: Partial<Database['public']['Tables']['wellness_plans']['Insert']>;
      };
      blog_posts: {
        Row: {
          post_id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          featured_image: string;
          category: string;
          pet_type: string;
          author: string;
          read_time: number;
          published_at: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['blog_posts']['Row'], 'post_id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
