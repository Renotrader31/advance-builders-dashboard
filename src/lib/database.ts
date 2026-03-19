// Simplified for demo deployment
const mockSupabase = {
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    limit: () => Promise.resolve({ data: [], error: null })
  }),
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  }
}

export async function initializeDatabase() {
  console.log('🏗️ Demo mode - no database needed')
  return Promise.resolve()
}

export async function createProject(projectData: any) {
  // Return a fake project for demo
  const newProject = {
    id: `proj_${Date.now()}`,
    ...projectData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
  
  console.log('✅ Demo project created:', newProject)
  return { data: newProject, error: null }
}

export async function loadProjects() {
  // Return empty array for demo
  console.log('📊 Demo mode - no projects to load')
  return { data: [], error: null }
}
