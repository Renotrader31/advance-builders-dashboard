export interface Database {
  public: {
    Tables: {
      advance_builders_projects: {
        Row: {
          id: string
          name: string
          client: string | null
          address: string | null
          contract_value: number
          target_markup: number
          status: string
          completion_percentage: number
          priority: string
          client_phone: string | null
          client_email: string | null
          project_manager: string
          user_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          client?: string | null
          address?: string | null
          contract_value?: number
          target_markup?: number
          status?: string
          completion_percentage?: number
          priority?: string
          client_phone?: string | null
          client_email?: string | null
          project_manager?: string
          user_id?: string | null
        }
        Update: {
          name?: string
          client?: string | null
          contract_value?: number
          target_markup?: number
          status?: string
        }
      }
    }
  }
}

export type Project = Database['public']['Tables']['advance_builders_projects']['Row']
