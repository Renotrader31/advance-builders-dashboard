// Simple mock for deployment - no real database needed for demo
export const supabase = {
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: null, error: null }),
    limit: () => ({ data: [], error: null })
  }),
  auth: {
    getUser: () => ({ data: { user: null }, error: null })
  }
}
