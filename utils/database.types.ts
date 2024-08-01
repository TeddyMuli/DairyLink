
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: {
          contentUrl: string | undefined
          created_at: string
          description: string | undefined
          id: string
          title: string | undefined
          image: string | undefined
        }
        Insert: {
          contentUrl?: string | undefined
          created_at?: string
          description?: string | undefined
          id?: string
          title?: string | undefined
          image?: string | undefined
        }
        Update: {
          contentUrl?: string | undefined
          created_at?: string
          description?: string | undefined
          id?: string
          title?: string | undefined
          image?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "blogs_cooperative_id_fkey"
            columns: ["cooperative_id"]
            isOneToOne: false
            referencedRelation: "cooperatives"
            referencedColumns: ["user_id"]
          },
        ]
      }
      collection_centers: {
        Row: {
          centre_id: number
          centre_name: string | undefined
          cooperative_id: string | undefined
        }
        Insert: {
          centre_id: number
          centre_name?: string | undefined
          cooperative_id?: string | undefined
        }
        Update: {
          centre_id?: number
          centre_name?: string | undefined
          cooperative_id?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "collection_centers_cooperative_id_fkey"
            columns: ["cooperative_id"]
            isOneToOne: false
            referencedRelation: "cooperatives"
            referencedColumns: ["user_id"]
          },
        ]
      }
      cooperatives: {
        Row: {
          certificate_of_registration: string | undefined
          cooperative_constitution: string | undefined
          cooperative_id: number
          cooperative_name: string | undefined
          date_of_registration: string | undefined
          location: string | undefined
          phone: string | undefined
          registration_number: string | undefined
          user_id: string | undefined
        }
        Insert: {
          certificate_of_registration?: string | undefined
          cooperative_constitution?: string | undefined
          cooperative_id?: number
          cooperative_name?: string | undefined
          date_of_registration?: string | undefined
          location?: string | undefined
          phone?: string | undefined
          registration_number?: string | undefined
          user_id?: string | undefined
        }
        Update: {
          certificate_of_registration?: string | undefined
          cooperative_constitution?: string | undefined
          cooperative_id?: number
          cooperative_name?: string | undefined
          date_of_registration?: string | undefined
          location?: string | undefined
          phone?: string | undefined
          registration_number?: string | undefined
          user_id?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "cooperatives_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      farmers: {
        Row: {
          accountNumber: number | undefined
          bankName: string | undefined
          cooperative_id: string | undefined
          DOB: string | undefined
          email: string
          firstname: string
          idNumber: number
          idPhoto: string | undefined
          KRAPin: string | undefined
          lastname: string | undefined
          memberId: number
          nextOfKinName: string | undefined
          nextOfKinPhone: number | undefined
          no_of_cows: number | undefined
          passportPhoto: string | undefined
          phone: string
          postalAddress: string | undefined
          user_id: string | undefined
        }
        Insert: {
          accountNumber?: number | undefined
          bankName?: string | undefined
          cooperative_id?: string | undefined
          DOB?: string | undefined
          email: string
          firstname: string
          idNumber: number
          idPhoto?: string | undefined
          KRAPin?: string | undefined
          lastname?: string | undefined
          memberId?: number
          nextOfKinName?: string | undefined
          nextOfKinPhone?: number | undefined
          no_of_cows?: number | undefined
          passportPhoto?: string | undefined
          phone: string
          postalAddress?: string | undefined
          user_id?: string | undefined
        }
        Update: {
          accountNumber?: number | undefined
          bankName?: string | undefined
          cooperative_id?: string | undefined
          DOB?: string | undefined
          email?: string
          firstname?: string
          idNumber?: number
          idPhoto?: string | undefined
          KRAPin?: string | undefined
          lastname?: string | undefined
          memberId?: number
          nextOfKinName?: string | undefined
          nextOfKinPhone?: number | undefined
          no_of_cows?: number | undefined
          passportPhoto?: string | undefined
          phone?: string
          postalAddress?: string | undefined
          user_id?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "farmers_cooperative_id_fkey"
            columns: ["cooperative_id"]
            isOneToOne: false
            referencedRelation: "cooperatives"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      loans: {
        Row: {
          amount: number | undefined
          created_at: string
          id: string
          memberId: number
          status: string | undefined
        }
        Insert: {
          amount?: number | undefined
          created_at?: string
          id?: string
          memberId: number
          status?: string | undefined
        }
        Update: {
          amount?: number | undefined
          created_at?: string
          id?: string
          memberId?: number
          status?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "loan_memberId_fkey"
            columns: ["memberId"]
            isOneToOne: true
            referencedRelation: "farmers"
            referencedColumns: ["memberId"]
          },
        ]
      }
      message_recipients: {
        Row: {
          created_at: string
          id: number
          message_id: string | undefined
          to: string | undefined
        }
        Insert: {
          created_at?: string
          id?: number
          message_id?: string | undefined
          to?: string | undefined
        }
        Update: {
          created_at?: string
          id?: number
          message_id?: string | undefined
          to?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "message_recipients_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["message_id"]
          },
          {
            foreignKeyName: "message_recipients_to_fkey"
            columns: ["to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string | undefined
          created_at: string
          from: string | undefined
          header: string | undefined
          message_id: string
          parent_message_id: string | undefined
          type: string | undefined
          to: string | undefined
        }
        Insert: {
          body?: string | undefined
          created_at?: string
          from?: string | undefined
          header?: string | undefined
          message_id?: string
          parent_message_id?: string | undefined
          status?: string | undefined
          to?: string | undefined
        }
        Update: {
          body?: string | undefined
          created_at?: string
          from?: string | undefined
          header?: string | undefined
          message_id?: string
          parent_message_id?: string | undefined
          status?: string | undefined
          to?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "messages_from_fkey"
            columns: ["from"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["message_id"]
          },
          {
            foreignKeyName: "messages_to_fkey"
            columns: ["to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      milk_reports: {
        Row: {
          center_id: number | undefined
          created_at: string
          farmer_id: string | undefined
          id: string
          quantity: number | undefined
        }
        Insert: {
          center_id?: number | undefined
          created_at?: string
          farmer_id?: string | undefined
          id?: string
          quantity?: number | undefined
        }
        Update: {
          center_id?: number | undefined
          created_at?: string
          farmer_id?: string | undefined
          id?: string
          quantity?: number | undefined
        }
        Relationships: [
          {
            foreignKeyName: "milk_reports_center_id_fkey"
            columns: ["center_id"]
            isOneToOne: false
            referencedRelation: "collection_centers"
            referencedColumns: ["centre_id"]
          },
          {
            foreignKeyName: "milk_reports_farmer_id_fkey"
            columns: ["farmer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          description: string | undefined
          id: string
          memberId: number
          status: string | undefined
          type: string | undefined
        }
        Insert: {
          created_at?: string
          description?: string | undefined
          id?: string
          memberId: number
          status?: string | undefined
          type?: string | undefined
        }
        Update: {
          created_at?: string
          description?: string | undefined
          id?: string
          memberId?: number
          status?: string | undefined
          type?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "requets_memberId_fkey"
            columns: ["memberId"]
            isOneToOne: true
            referencedRelation: "farmers"
            referencedColumns: ["memberId"]
          },
        ]
      }
      products: {
        Row: {
          amount: number | undefined
          created_at: string
          description: string | undefined
          id: string
          item: string | undefined
          cooperative_id: string | undefined
          image: string | undefined
        }
        Insert: {
          amount?: number | undefined
          created_at?: string
          description?: string | undefined
          id?: string
          item?: string | undefined
          cooperative_id?: string | undefined
          image?: string | undefined
        }
        Update: {
          amount?: number | undefined
          created_at?: string
          description?: string | undefined
          id?: string
          item?: string | undefined
          cooperative_id?: string | undefined
          image?: string | undefined
        }
        Relationships: [
          {
            foreignKeyName: "products_cooperative_id_fkey"
            columns: ["cooperative_id"]
            isOneToOne: true
            referencedRelation: "cooperatives"
            referencedColumns: ["user_id"]
          },
        ]
      }
      users: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      set_app_user: {
        Args: {
          member_id: number
        }
        Returns: undefined
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
