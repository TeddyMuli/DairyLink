
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
          content_URL: string | null
          created_at: string
          description: string | null
          id: string
          title: string | null
        }
        Insert: {
          content_URL?: string | null
          created_at?: string
          description?: string | null
          id?: string
          title?: string | null
        }
        Update: {
          content_URL?: string | null
          created_at?: string
          description?: string | null
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      collection_centers: {
        Row: {
          centre_id: number
          centre_name: string | null
          cooperative_id: string | null
        }
        Insert: {
          centre_id: number
          centre_name?: string | null
          cooperative_id?: string | null
        }
        Update: {
          centre_id?: number
          centre_name?: string | null
          cooperative_id?: string | null
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
          certificate_of_registration: string | null
          cooperative_constitution: string | null
          cooperative_id: number
          cooperative_name: string | null
          date_of_registration: string | null
          location: string | null
          phone: string | null
          registration_number: string | null
          user_id: string | null
        }
        Insert: {
          certificate_of_registration?: string | null
          cooperative_constitution?: string | null
          cooperative_id?: number
          cooperative_name?: string | null
          date_of_registration?: string | null
          location?: string | null
          phone?: string | null
          registration_number?: string | null
          user_id?: string | null
        }
        Update: {
          certificate_of_registration?: string | null
          cooperative_constitution?: string | null
          cooperative_id?: number
          cooperative_name?: string | null
          date_of_registration?: string | null
          location?: string | null
          phone?: string | null
          registration_number?: string | null
          user_id?: string | null
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
          accountNumber: number | null
          bankName: string | null
          cooperative_id: string | null
          DOB: string | null
          email: string
          firstname: string
          idNumber: number
          idPhoto: string | null
          KRAPin: string | null
          lastname: string | null
          memberId: number
          nextOfKinName: string | null
          nextOfKinPhone: number | null
          no_of_cows: number | null
          passportPhoto: string | null
          phone: string
          postalAddress: string | null
          user_id: string | null
        }
        Insert: {
          accountNumber?: number | null
          bankName?: string | null
          cooperative_id?: string | null
          DOB?: string | null
          email: string
          firstname: string
          idNumber: number
          idPhoto?: string | null
          KRAPin?: string | null
          lastname?: string | null
          memberId?: number
          nextOfKinName?: string | null
          nextOfKinPhone?: number | null
          no_of_cows?: number | null
          passportPhoto?: string | null
          phone: string
          postalAddress?: string | null
          user_id?: string | null
        }
        Update: {
          accountNumber?: number | null
          bankName?: string | null
          cooperative_id?: string | null
          DOB?: string | null
          email?: string
          firstname?: string
          idNumber?: number
          idPhoto?: string | null
          KRAPin?: string | null
          lastname?: string | null
          memberId?: number
          nextOfKinName?: string | null
          nextOfKinPhone?: number | null
          no_of_cows?: number | null
          passportPhoto?: string | null
          phone?: string
          postalAddress?: string | null
          user_id?: string | null
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
          amount: number | null
          created_at: string
          id: string
          memberId: number
          status: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: string
          memberId: number
          status?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: string
          memberId?: number
          status?: string | null
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
          message_id: string | null
          to: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message_id?: string | null
          to?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message_id?: string | null
          to?: string | null
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
          body: string | null
          created_at: string
          from: string | null
          header: string | null
          message_id: string
          parent_message_id: string | null
          status: string | null
          to: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          from?: string | null
          header?: string | null
          message_id?: string
          parent_message_id?: string | null
          status?: string | null
          to?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          from?: string | null
          header?: string | null
          message_id?: string
          parent_message_id?: string | null
          status?: string | null
          to?: string | null
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
          center_id: number | null
          created_at: string
          farmer_id: string | null
          id: string
          quantity: number | null
        }
        Insert: {
          center_id?: number | null
          created_at?: string
          farmer_id?: string | null
          id?: string
          quantity?: number | null
        }
        Update: {
          center_id?: number | null
          created_at?: string
          farmer_id?: string | null
          id?: string
          quantity?: number | null
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
          description: string | null
          id: string
          memberId: number
          status: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          memberId: number
          status?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          memberId?: number
          status?: string | null
          type?: string | null
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
          amount: number | null
          created_at: string
          description: string | null
          id: string
          item: string | null
          member_id: number
        }
        Insert: {
          amount?: number | null
          created_at?: string
          description?: string | null
          id?: string
          item?: string | null
          member_id: number
        }
        Update: {
          amount?: number | null
          created_at?: string
          description?: string | null
          id?: string
          item?: string | null
          member_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "agrovet_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: true
            referencedRelation: "farmers"
            referencedColumns: ["memberId"]
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
