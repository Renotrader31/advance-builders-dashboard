'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { initializeDatabase, createProject, loadProjects } from 'builders/lib/database'
import { 
  Building2, DollarSign, TrendingUp, Users, Plus, 
  Zap, Rocket, Crown, Sparkles, Diamond, Gem,
  BarChart3, PieChart, FileText, Activity, AlertCircle,
  MapPin, Phone, Mail, Star, Award, Target
} from 'lucide-react'
import { Button } from 'builders/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'builders/components/ui/card'
import { Progress } from 'builders/components/ui/progress'
import { Badge } from 'builders/components/ui/badge'
import { formatCurrency } from 'builders/lib/utils'

interface Project {
  id: string
  name: string
  client: string
  address: string
  contract_value: number
  target_markup: number
  status: string
  completion_percentage: number
  priority: string
  client_phone: string
  client_email: string
  project_manager: string
  created_at: string
  updated_at: string
}

interface DashboardStats {
  totalProjects: number
  totalValue: number
  averageMargin: number
  completedProjects: number
  activeProjects: number
  totalProfit: number
}

export default function AdvanceBuildersDashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalValue: 0,
    averageMargin: 0,
    completedProjects: 0,
    activeProjects: 0,
    totalProfit: 0
  })
  const [loading, setLoading] = useState(true)
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)
  const [showStatsAnimation, setShowStatsAnimation] = useState(false)

  // Project form state
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    address: '',
    contract_value: 0,
    target_markup: 25,
    client_phone: '',
    client_email: '',
    priority: 'medium'
  })

  useEffect(() => {
    initializeApp()
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      calculateStats()
      setShowStatsAnimation(true)
    }
  }, [projects])

  const initializeApp = async () => {
    try {
      setLoading(true)
      console.log('🏗️ Starting ADVANCE BUILDERS PRO Dashboard...')
      
      await initializeDatabase()
      await loadProjectsData()
      
      console.log('✅ ADVANCE BUILDERS PRO is READY TO ROCK!')
    } catch (error) {
      console.error('❌ Initialization error:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadProjectsData = async () => {
    try {
      const { data, error } = await loadProjects()

      if (error) {
        console.error('Error loading projects:', error)
        return
      }

      setProjects(data || [])
      if (data && data.length > 0 && !currentProject) {
        setCurrentProject(data[0])
      }
    } catch (error) {
      console.error('Error loading projects:', error)
    }
  }

  const calculateStats = () => {
    const totalProjects = projects.length
    const totalValue = projects.reduce((sum, p) => sum + (p.contract_value || 0), 0)
    const averageMargin = totalProjects > 0 ? projects.reduce((sum, p) => sum + (p.target_markup || 0), 0) / totalProjects : 0
    const completedProjects = projects.filter(p => p.status === 'completed').length
    const activeProjects = projects.filter(p => p.status !== 'completed').length
    const totalProfit = projects.reduce((sum, p) => sum + ((p.contract_value || 0) * (p.target_markup || 0) / 100), 0)

    setStats({
      totalProjects,
      totalValue,
      averageMargin,
      completedProjects,
      activeProjects,
      totalProfit
    })
  }

  const handleCreateProject = async () => {
    try {
      if (!newProject.name.trim()) return

      const projectData = {
        ...newProject,
        completion_percentage: 0,
        project_manager: 'Advance Builders',
        status: 'planning'
      }

      const { data, error } = await createProject(projectData)
      if (error) throw error

      setProjects([data, ...projects])
      setCurrentProject(data)
      setNewProject({ 
        name: '', client: '', address: '', contract_value: 0, 
        target_markup: 25, client_phone: '', client_email: '', priority: 'medium' 
      })
      setShowNewProjectModal(false)

      // Success animation
      setShowStatsAnimation(false)
      setTimeout(() => setShowStatsAnimation(true), 100)
    } catch (error) {
      console.error('Error creating project:', error)
    }
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'bg-gray-100 text-gray-600',
      medium: 'bg-blue-100 text-blue-600',
      high: 'bg-orange-100 text-orange-600',
      critical: 'bg-red-100 text-red-600'
    }
    return colors[priority as keyof typeof colors] || colors.medium
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Building2 className="h-10 w-10 text-blue-600" />
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4"
          >
            🏗️ ADVANCE BUILDERS PRO
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 mb-8"
          >
            Initializing the ultimate construction platform...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* PREMIUM PROFESSIONAL HEADER */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-xl sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-2xl p-4 shadow-2xl">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <div>
                  <motion.h1 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent"
                  >
                    ADVANCE BUILDERS
                  </motion.h1>
                  <motion.p 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-slate-600 font-semibold tracking-wide"
                  >
                    PROFESSIONAL CONSTRUCTION PLATFORM
                  </motion.p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex items-center space-x-8">
              {/* LIVE DASHBOARD STATS */}
              <AnimatePresence>
                {showStatsAnimation && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="hidden lg:flex items-center space-x-8"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        className="text-3xl font-black text-blue-600 flex items-center justify-center"
                      >
                        <Crown className="h-6 w-6 mr-2" />
                        {stats.totalProjects}
                      </motion.div>
                      <div className="text-xs text-blue-600 font-bold">ACTIVE PROJECTS</div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="text-3xl font-black text-green-600 flex items-center justify-center"
                      >
                        <Diamond className="h-6 w-6 mr-2" />
                        {formatCurrency(stats.totalValue)}
                      </motion.div>
                      <div className="text-xs text-green-600 font-bold">PORTFOLIO VALUE</div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="text-3xl font-black text-purple-600 flex items-center justify-center"
                      >
                        <Rocket className="h-6 w-6 mr-2" />
                        {Math.round(stats.averageMargin)}%
                      </motion.div>
                      <div className="text-xs text-purple-600 font-bold">AVG MARGIN</div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* PREMIUM ACTION BUTTON */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="premium"
                  size="lg"
                  onClick={() => setShowNewProjectModal(true)}
                  className="shadow-2xl"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  <Sparkles className="h-4 w-4 mr-2" />
                  NEW PROJECT
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* NO PROJECTS STATE - ULTIMATE WELCOME EXPERIENCE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl border-2 border-slate-200 p-16 max-w-6xl mx-auto"
          >
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 rounded-full p-8 w-fit mx-auto mb-12 shadow-2xl"
            >
              <Building2 className="h-20 w-20 text-blue-600" />
            </motion.div>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-8"
            >
              WELCOME TO THE FUTURE
            </motion.h2>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed"
            >
              The most advanced construction project management platform ever created. 
              Experience professional-grade tools, AI-powered insights, and revolutionary 
              workflow automation designed for modern contractors.
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="premium"
                size="xl"
                onClick={() => setShowNewProjectModal(true)}
                className="text-2xl px-12 py-6 shadow-2xl"
              >
                <Plus className="h-8 w-8 mr-4" />
                <Sparkles className="h-6 w-6 mr-4" />
                CREATE YOUR FIRST PROJECT
                <Rocket className="h-6 w-6 ml-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* PREMIUM PROJECT CREATION MODAL */}
      <AnimatePresence>
        {showNewProjectModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 border border-slate-200"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-black text-slate-800 flex items-center">
                    <Rocket className="h-8 w-8 mr-3 text-blue-600" />
                    CREATE NEW PROJECT
                  </h3>
                  <p className="text-slate-600 font-medium">Launch your next construction project</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowNewProjectModal(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-3 rounded-xl hover:bg-slate-100"
                >
                  <Plus className="h-8 w-8 rotate-45" />
                </motion.button>
              </div>
              
              <div className="space-y-6">
                {[
                  { 
                    label: 'Project Name', 
                    key: 'name', 
                    placeholder: 'e.g., Luxury Kitchen Renovation', 
                    required: true,
                    icon: Building2
                  },
                  { 
                    label: 'Client Name', 
                    key: 'client', 
                    placeholder: 'Mr. & Mrs. Anderson',
                    icon: Users
                  },
                  { 
                    label: 'Project Address', 
                    key: 'address', 
                    placeholder: '2847 Prestigious Lane, Reno NV',
                    icon: MapPin
                  },
                  { 
                    label: 'Contract Value', 
                    key: 'contract_value', 
                    placeholder: '125000', 
                    type: 'number',
                    icon: DollarSign
                  },
                  { 
                    label: 'Target Markup (%)', 
                    key: 'target_markup', 
                    placeholder: '28', 
                    type: 'number',
                    icon: Target
                  }
                ].map((field, idx) => {
                  const Icon = field.icon
                  return (
                    <motion.div 
                      key={field.key}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center">
                        <Icon className="h-4 w-4 mr-2 text-slate-500" />
                        {field.label} 
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <input
                        type={field.type || 'text'}
                        value={newProject[field.key as keyof typeof newProject]}
                        onChange={(e) => setNewProject({ 
                          ...newProject, 
                          [field.key]: field.type === 'number' ? Number(e.target.value) : e.target.value 
                        })}
                        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 text-slate-800 font-medium"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  )
                })}
              </div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-end space-x-4 mt-8 pt-6 border-t border-slate-200"
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-8 py-3 text-slate-600 hover:text-slate-800 transition-colors font-bold rounded-xl hover:bg-slate-100"
                >
                  Cancel
                </motion.button>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="premium"
                    size="lg"
                    onClick={handleCreateProject}
                    disabled={!newProject.name.trim()}
                    className="px-8 py-3"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    CREATE PROJECT
                    <Rocket className="h-5 w-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
