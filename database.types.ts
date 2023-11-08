export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cities_country: {
        Row: {
          city: string
          country: string
          id: number
        }
        Insert: {
          city: string
          country: string
          id?: number
        }
        Update: {
          city?: string
          country?: string
          id?: number
        }
        Relationships: []
      }
      created_tours: {
        Row: {
          created_at: string
          id: number
          tour_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          tour_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          tour_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "created_tours_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      saved_tours: {
        Row: {
          id: number
          tour_id: number
          user_id: string | null
        }
        Insert: {
          id?: number
          tour_id: number
          user_id?: string | null
        }
        Update: {
          id?: number
          tour_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "saved_tours_tour_id_fkey"
            columns: ["tour_id"]
            isOneToOne: false
            referencedRelation: "created_tours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_tours_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      tour_destinations: {
        Row: {
          city: number
          id: number
          order: number | null
          tour_id: number | null
        }
        Insert: {
          city: number
          id?: number
          order?: number | null
          tour_id?: number | null
        }
        Update: {
          city?: number
          id?: number
          order?: number | null
          tour_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tour_destinations_city_fkey"
            columns: ["city"]
            isOneToOne: false
            referencedRelation: "cities_country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tour_destinations_tour_id_fkey"
            columns: ["tour_id"]
            isOneToOne: false
            referencedRelation: "created_tours"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      dmetaphone: {
        Args: {
          "": string
        }
        Returns: string
      }
      dmetaphone_alt: {
        Args: {
          "": string
        }
        Returns: string
      }
      soundex: {
        Args: {
          "": string
        }
        Returns: string
      }
      text_soundex: {
        Args: {
          "": string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
