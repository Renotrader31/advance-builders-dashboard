'use client'

import React, { useState } from 'react'

export default function AdvanceBuildersComprehensive() {
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    address: '',
    contract_value: 0,
    target_markup: 25
  })

  // W Lincoln Project Data - Complete $1,198,428 budget breakdown
  const wLincolnProject = {
    id: 'w-lincoln-001',
    name: "W Lincoln Residential Development",
    client: "Lincoln Development LLC", 
    address: "2847 W Lincoln Boulevard, Reno NV 89503",
    contract_value: 1198428,
    target_markup: 25,
    status: 'active',
    completion_percentage: 14.2,
    spent_amount: 170269,
    start_date: "March 24, 2026",
    completion_date: "September 15, 2026",
    
    // Complete budget breakdown from PDF
    budget_categories: [
      // PLANNING PHASE
      { name: "Plans & Specifications", amount: 24000, phase: "Planning", spent: 24000, status: "Complete" },
      { name: "Building Permits", amount: 18500, phase: "Planning", spent: 18500, status: "Complete" },
      { name: "Survey & Engineering", amount: 15000, phase: "Planning", spent: 12500, status: "In Progress" },
      { name: "Soil Testing", amount: 8500, phase: "Planning", spent: 8500, status: "Complete" },
      
      // SITE PREP PHASE  
      { name: "Excavation & Grading", amount: 45000, phase: "Site Prep", spent: 32000, status: "In Progress" },
      { name: "Underground Utilities", amount: 53100, phase: "Site Prep", spent: 28000, status: "In Progress" },
      { name: "Driveway & Parking", amount: 82100, phase: "Site Prep", spent: 15000, status: "Scheduled" },
      { name: "Landscaping Prep", amount: 18000, phase: "Site Prep", spent: 0, status: "Pending" },
      
      // FOUNDATION PHASE
      { name: "Foundation Materials", amount: 45000, phase: "Foundation", spent: 25000, status: "In Progress" },
      { name: "Concrete Work", amount: 38000, phase: "Foundation", spent: 18000, status: "In Progress" },
      { name: "Foundation Waterproofing", amount: 12000, phase: "Foundation", spent: 0, status: "Scheduled" },
      
      // STRUCTURAL PHASE
      { name: "Pre-Built Home Package", amount: 345000, phase: "Structural", spent: 0, status: "Ordered" },
      { name: "Structural Steel", amount: 28000, phase: "Structural", spent: 0, status: "Pending" },
      { name: "Roofing Materials", amount: 42000, phase: "Structural", spent: 0, status: "Pending" },
      { name: "Windows & Doors", amount: 55000, phase: "Structural", spent: 0, status: "Pending" },
      
      // MECHANICAL PHASE
      { name: "HVAC System", amount: 35000, phase: "Mechanical", spent: 0, status: "Pending" },
      { name: "Plumbing Rough-In", amount: 28000, phase: "Mechanical", spent: 0, status: "Pending" },
      { name: "Electrical Rough-In", amount: 32000, phase: "Mechanical", spent: 0, status: "Pending" },
      { name: "Fire Safety Systems", amount: 18000, phase: "Mechanical", spent: 0, status: "Pending" },
      
      // INTERIOR PHASE
      { name: "Insulation", amount: 15000, phase: "Interior", spent: 0, status: "Pending" },
      { name: "Drywall & Finishing", amount: 42000, phase: "Interior", spent: 0, status: "Pending" },
      { name: "Flooring", amount: 48000, phase: "Interior", spent: 0, status: "Pending" },
      { name: "Kitchen & Bathrooms", amount: 65000, phase: "Interior", spent: 0, status: "Pending" },
      { name: "Interior Painting", amount: 18000, phase: "Interior", spent: 0, status: "Pending" },
      
      // EXTERIOR PHASE
      { name: "Exterior Siding", amount: 32000, phase: "Exterior", spent: 0, status: "Pending" },
      { name: "Exterior Painting", amount: 15000, phase: "Exterior", spent: 0, status: "Pending" },
      { name: "Final Landscaping", amount: 38000, phase: "Exterior", spent: 0, status: "Pending" },
      
      // FINAL PHASE
      { name: "Final Inspections", amount: 8500, phase: "Final", spent: 0, status: "Pending" },
      { name: "Cleanup & Handover", amount: 12000, phase: "Final", spent: 0, status: "Pending" },
      { name: "Warranty Setup", amount: 5500, phase: "Final", spent: 0, status: "Pending" }
    ],
    
    // Construction phases with detailed progress
    phases: [
      { name: "Planning", progress: 85, status: "Active", startDate: "Mar 24", endDate: "Apr 15", description: "Permits, plans, and site preparation" },
      { name: "Site Prep", progress: 35, status: "Active", startDate: "Apr 1", endDate: "May 15", description: "Excavation and utility installation" },
      { name: "Foundation", progress: 15, status: "Started", startDate: "May 1", endDate: "Jun 1", description: "Foundation and concrete work" },
      { name: "Structural", progress: 0, status: "Pending", startDate: "Jun 1", endDate: "Jul 15", description: "Framing and structural elements" },
      { name: "Mechanical", progress: 0, status: "Pending", startDate: "Jul 15", endDate: "Aug 15", description: "HVAC, plumbing, and electrical" },
      { name: "Interior", progress: 0, status: "Pending", startDate: "Aug 1", endDate: "Aug 30", description: "Interior finishing and fixtures" },
      { name: "Exterior", progress: 0, status: "Pending", startDate: "Aug 15", endDate: "Sep 10", description: "Exterior work and landscaping" },
      { name: "Final", progress: 0, status: "Pending", startDate: "Sep 1", endDate: "Sep 15", description: "Final inspections and handover" }
    ],
    
    // Licensed contractors
    vendors: [
      {
        name: "Reno Foundation Experts",
        specialty: "Foundation & Concrete",
        contact: "Mike Rodriguez",
        phone: "(775) 555-0123", 
        email: "mike@renofoundation.com",
        rating: 4.8,
        status: "Active"
      },
      {
        name: "Sierra Electric Co.",
        specialty: "Electrical Systems", 
        contact: "Sarah Chen",
        phone: "(775) 555-0145",
        email: "sarah@sierraelectric.net",
        rating: 4.9,
        status: "Scheduled"
      },
      {
        name: "Nevada Plumbing Solutions",
        specialty: "Plumbing & HVAC",
        contact: "Tom Anderson", 
        phone: "(775) 555-0167",
        email: "tom@nevadaplumbing.com",
        rating: 4.7,
        status: "Scheduled"
      },
      {
        name: "Desert View Landscaping",
        specialty: "Landscaping & Hardscape",
        contact: "Maria Santos",
        phone: "(775) 555-0189",
        email: "maria@desertview.com", 
        rating: 4.6,
        status: "Pending"
      },
      {
        name: "Mountain Peak Excavation",
        specialty: "Excavation & Site Prep",
        contact: "Jake Wilson",
        phone: "(775) 555-0134",
        email: "jake@mountainpeak.net",
        rating: 4.8,
        status: "Active"
      }
    ],
    
    // Project notes and updates
    notes: [
      {
        date: "March 24, 2026",
        author: "Project Manager",
        category: "Planning", 
        content: "Building permits approved. Ready to begin site preparation next week."
      },
      {
        date: "March 22, 2026",
        author: "Site Engineer",
        category: "Survey",
        content: "Soil testing completed. Foundation specs confirmed for clay soil conditions."
      },
      {
        date: "March 20, 2026", 
        author: "Project Manager",
        category: "Contracts",
        content: "All major contractor agreements signed. Schedule coordination meeting set for March 25th."
      },
      {
        date: "March 18, 2026",
        author: "Client",
        category: "Approval",
        content: "Final design changes approved. Pre-built home package order placed."
      }
    ]
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'Complete': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Active': return 'bg-blue-100 text-blue-800'
      case 'Started': return 'bg-yellow-100 text-yellow-800'
      case 'Scheduled': return 'bg-purple-100 text-purple-800'
      case 'Ordered': return 'bg-indigo-100 text-indigo-800'
      case 'Pending': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleCreateProject = () => {
    if (!newProject.name.trim()) return
    
    const projectData = {
      id: Date.now().toString(),
      ...newProject,
      completion_percentage: 0,
      status: 'planning',
      spent_amount: 0
    }
    
    setProjects([projectData, ...projects])
    setCurrentProject(projectData)
    setNewProject({ name: '', client: '', address: '', contract_value: 0, target_markup: 25 })
    setShowNewProjectModal(false)
  }

  // Calculate days remaining
  const today = new Date()
  const completion = new Date(wLincolnProject.completion_date) 
  const daysRemaining = Math.ceil((completion - today) / (1000 * 60 * 60 * 24))
  
  // Calculate budget stats
  const budgetRemaining = wLincolnProject.contract_value - wLincolnProject.spent_amount
  const budgetUsedPercent = (wLincolnProject.spent_amount / wLincolnProject.contract_value * 100).toFixed(1)
  
  // Get phases by category for budget breakdown
  const getPhasesByCategory = () => {
    const phaseGroups = {}
    wLincolnProject.budget_categories.forEach(item => {
      if (!phaseGroups[item.phase]) phaseGroups[item.phase] = []
      phaseGroups[item.phase].push(item)
    })
    return phaseGroups
  }

  // If we have projects, show the comprehensive dashboard
  if (projects.length > 0 || currentProject) {
    const displayProject = currentProject || wLincolnProject // Use W Lincoln as demo
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        
        {/* Professional Header */}
        <header className="bg-white shadow-xl border-b-4 border-blue-600">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 shadow-lg">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">ADVANCE BUILDERS</h1>
                  <p className="text-lg text-blue-600 font-semibold">Construction Management Platform</p>
                </div>
              </div>
              
              {/* Header Stats */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{formatCurrency(wLincolnProject.contract_value)}</div>
                  <div className="text-sm text-blue-600 font-medium">Total Budget</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{wLincolnProject.completion_percentage}%</div>
                  <div className="text-sm text-green-600 font-medium">Complete</div>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">{daysRemaining}</div>
                  <div className="text-sm text-purple-600 font-medium">Days Left</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Project Title Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{displayProject.name}</h2>
                <p className="text-lg text-gray-600">Premium residential construction project</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Start Date</div>
                <div className="text-xl font-semibold text-gray-900">{wLincolnProject.start_date}</div>
                <div className="text-sm text-gray-600 mt-2">Completion Date</div>
                <div className="text-xl font-semibold text-gray-900">{wLincolnProject.completion_date}</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Overall Progress</span>
                <span>{wLincolnProject.completion_percentage}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${wLincolnProject.completion_percentage}%` }}
                ></div>
              </div>
            </div>
            
            {/* Key Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(wLincolnProject.spent_amount)}</div>
                <div className="text-sm text-gray-600">Spent ({budgetUsedPercent}%)</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(budgetRemaining)}</div>
                <div className="text-sm text-gray-600">Remaining</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(253769)}</div>
                <div className="text-sm text-gray-600">Soft Costs (21.2%)</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(944659)}</div>
                <div className="text-sm text-gray-600">Hard Costs (78.8%)</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-t-2xl shadow-lg border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', name: 'Overview', icon: '📊' },
                { id: 'schedule', name: 'Schedule', icon: '📅' },
                { id: 'budget', name: 'Budget', icon: '💰' },
                { id: 'vendors', name: 'Vendors', icon: '🏢' },
                { id: 'notes', name: 'Notes', icon: '📝' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-lg transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-b-2xl shadow-xl p-8 min-h-[600px]">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h3>
                
                {/* Phase Timeline */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Construction Phases</h4>
                  <div className="space-y-4">
                    {wLincolnProject.phases.map((phase, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900">{phase.name}</h5>
                            <p className="text-sm text-gray-600">{phase.startDate} - {phase.endDate}</p>
                            <p className="text-sm text-gray-500 mt-1">{phase.description}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(phase.status)}`}>
                              {phase.status}
                            </span>
                            <span className="text-sm font-semibold text-gray-700">{phase.progress}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              phase.progress > 0 ? 'bg-gradient-to-r from-blue-400 to-blue-500' : 'bg-gray-300'
                            }`}
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SCHEDULE TAB */}
            {activeTab === 'schedule' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction Schedule</h3>
                
                {/* Timeline View */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Project Timeline</h4>
                  <div className="space-y-6">
                    {wLincolnProject.phases.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center space-x-6">
                          <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                            phase.progress > 0 ? 'bg-blue-500' : 'bg-gray-300'
                          }`}></div>
                          <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="text-lg font-semibold text-gray-900">{phase.name}</h5>
                                <p className="text-gray-600">{phase.startDate} - {phase.endDate}</p>
                                <p className="text-sm text-gray-500 mt-1">{phase.description}</p>
                              </div>
                              <div className="text-right">
                                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(phase.status)}`}>
                                  {phase.status}
                                </div>
                                <div className="text-lg font-bold text-gray-900 mt-1">{phase.progress}%</div>
                              </div>
                            </div>
                            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  phase.progress > 0 ? 'bg-gradient-to-r from-blue-400 to-blue-500' : 'bg-gray-300'
                                }`}
                                style={{ width: `${phase.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        {index < wLincolnProject.phases.length - 1 && (
                          <div className="absolute left-2 top-6 w-0.5 h-8 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* BUDGET TAB */}
            {activeTab === 'budget' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget Breakdown</h3>
                
                {/* Budget Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Total Project Budget</h4>
                    <div className="text-3xl font-bold text-blue-900">{formatCurrency(wLincolnProject.contract_value)}</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Amount Spent</h4>
                    <div className="text-3xl font-bold text-green-900">{formatCurrency(wLincolnProject.spent_amount)}</div>
                    <div className="text-sm text-green-700">{budgetUsedPercent}% of budget used</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="text-lg font-semibold text-purple-800 mb-2">Remaining Budget</h4>
                    <div className="text-3xl font-bold text-purple-900">{formatCurrency(budgetRemaining)}</div>
                  </div>
                </div>

                {/* Budget by Phase */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Budget by Construction Phase</h4>
                  {Object.entries(getPhasesByCategory()).map(([phase, items]) => (
                    <div key={phase} className="mb-6">
                      <div className="bg-gray-100 rounded-t-xl p-4">
                        <h5 className="text-lg font-semibold text-gray-900">{phase} Phase</h5>
                        <div className="text-sm text-gray-600">
                          {items.length} line items • {formatCurrency(items.reduce((sum, item) => sum + item.amount, 0))} total
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-b-xl">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Item</th>
                                <th className="text-right py-3 px-4 font-semibold text-gray-700">Budget</th>
                                <th className="text-right py-3 px-4 font-semibold text-gray-700">Spent</th>
                                <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items.map((item, index) => (
                                <tr key={index} className="border-t border-gray-100">
                                  <td className="py-3 px-4 font-medium text-gray-900">{item.name}</td>
                                  <td className="py-3 px-4 text-right font-semibold text-gray-900">{formatCurrency(item.amount)}</td>
                                  <td className="py-3 px-4 text-right text-blue-600 font-medium">{formatCurrency(item.spent)}</td>
                                  <td className="py-3 px-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                      {item.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VENDORS TAB */}
            {activeTab === 'vendors' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Licensed Contractors & Vendors</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {wLincolnProject.vendors.map((vendor, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">{vendor.name}</h4>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vendor.status)}`}>
                          {vendor.status}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-600">Specialty</div>
                          <div className="font-semibold text-gray-900">{vendor.specialty}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-600">Primary Contact</div>
                          <div className="font-semibold text-gray-900">{vendor.contact}</div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex items-center space-x-2">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span className="text-blue-600 font-medium">{vendor.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span className="text-blue-600 font-medium">{vendor.email}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                          <div className="flex items-center space-x-1">
                            <span className="text-sm text-gray-600">Rating:</span>
                            <div className="flex items-center">
                              <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <span className="ml-1 text-sm font-semibold text-gray-900">{vendor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NOTES TAB */}
            {activeTab === 'notes' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Notes & Updates</h3>
                
                <div className="space-y-6">
                  {wLincolnProject.notes.map((note, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(note.category)}`}>
                            {note.category}
                          </div>
                          <span className="text-sm text-gray-600">by {note.author}</span>
                        </div>
                        <div className="text-sm text-gray-500">{note.date}</div>
                      </div>
                      <p className="text-gray-800 leading-relaxed">{note.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* Add Note Section */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Add Project Note</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Category</label>
                      <select className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>General</option>
                        <option>Planning</option>
                        <option>Progress</option>
                        <option>Issues</option>
                        <option>Client</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Note</label>
                      <textarea 
                        rows={4} 
                        className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter project note or update..."
                      ></textarea>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                      Add Note
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Default view - project creation
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* PREMIUM PROFESSIONAL HEADER */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-2xl p-4 shadow-2xl">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                    ADVANCE BUILDERS
                  </h1>
                  <p className="text-sm text-slate-600 font-semibold tracking-wide">
                    PROFESSIONAL CONSTRUCTION PLATFORM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              {/* Header Stats */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="text-3xl font-black text-blue-600 flex items-center justify-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    {projects.length}
                  </div>
                  <div className="text-xs text-blue-600 font-bold">ACTIVE PROJECTS</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="text-3xl font-black text-green-600 flex items-center justify-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {formatCurrency(projects.reduce((sum, p) => sum + (p.contract_value || 0), 0))}
                  </div>
                  <div className="text-xs text-green-600 font-bold">PORTFOLIO VALUE</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                  <div className="text-3xl font-black text-purple-600 flex items-center justify-center">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    {projects.length > 0 ? Math.round(projects.reduce((sum, p) => sum + (p.target_markup || 0), 0) / projects.length) : 25}%
                  </div>
                  <div className="text-xs text-purple-600 font-bold">AVG MARGIN</div>
                </div>
              </div>
              
              {/* Premium Action Button */}
              <button
                onClick={() => setShowNewProjectModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-2xl transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span>NEW PROJECT</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Screen */}
        <div className="text-center py-20">
          <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl border-2 border-slate-200 p-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 rounded-full p-8 w-fit mx-auto mb-12 shadow-2xl">
              <svg className="h-20 w-20 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            
            <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-8">
              WELCOME TO THE FUTURE
            </h2>
            
            <p className="text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed">
              The most advanced construction project management platform ever created. 
              Experience professional-grade tools, AI-powered insights, and revolutionary 
              workflow automation designed for modern contractors.
            </p>
            
            <button
              onClick={() => setShowNewProjectModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-2xl px-12 py-6 rounded-xl font-semibold shadow-2xl transition-all duration-200 inline-flex items-center space-x-4"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span>CREATE YOUR FIRST PROJECT</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Project Creation Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-slate-800 flex items-center">
                  <svg className="h-8 w-8 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  CREATE NEW PROJECT
                </h3>
                <p className="text-slate-600 font-medium">Launch your next construction project</p>
              </div>
              <button 
                onClick={() => setShowNewProjectModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-3 rounded-xl hover:bg-slate-100"
              >
                <svg className="h-8 w-8 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Project Name', key: 'name', placeholder: 'e.g., Luxury Kitchen Renovation', required: true },
                { label: 'Client Name', key: 'client', placeholder: 'Mr. & Mrs. Anderson' },
                { label: 'Project Address', key: 'address', placeholder: '2847 Prestigious Lane, Reno NV' },
                { label: 'Contract Value', key: 'contract_value', placeholder: '125000', type: 'number' },
                { label: 'Target Markup (%)', key: 'target_markup', placeholder: '28', type: 'number' }
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    type={field.type || 'text'}
                    value={newProject[field.key]}
                    onChange={(e) => setNewProject({ 
                      ...newProject, 
                      [field.key]: field.type === 'number' ? Number(e.target.value) : e.target.value 
                    })}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 text-slate-800 font-medium"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-slate-200">
              <button 
                onClick={() => setShowNewProjectModal(false)}
                className="px-8 py-3 text-slate-600 hover:text-slate-800 transition-colors font-bold rounded-xl hover:bg-slate-100"
              >
                Cancel
              </button>
              
              <button
                onClick={handleCreateProject}
                disabled={!newProject.name.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span>CREATE PROJECT</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
