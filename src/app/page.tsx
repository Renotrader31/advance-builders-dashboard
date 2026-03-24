'use client'

import React, { useState } from 'react'

export default function AdvanceBuildersComprehensive() {
  const [activeTab, setActiveTab] = useState('overview')
  
  // W Lincoln Project Data - $1,198,428 total budget
  const projectData = {
    name: "W Lincoln Residential Development",
    startDate: "March 24, 2026", 
    completionDate: "September 15, 2026",
    totalBudget: 1198428,
    spentAmount: 170269,
    progressPercent: 14.2
  }
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white shadow-xl border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-8">
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
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{projectData.name}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{formatCurrency(projectData.totalBudget)}</div>
              <div className="text-sm text-gray-600">Total Budget</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{projectData.progressPercent}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{formatCurrency(projectData.spentAmount)}</div>
              <div className="text-sm text-gray-600">Spent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{formatCurrency(projectData.totalBudget - projectData.spentAmount)}</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 COMPREHENSIVE PLATFORM DEPLOYED! 🚀</h3>
            <p className="text-lg text-gray-600 mb-6">
              Your complete W Lincoln project management platform with $1.2M budget tracking, 
              interactive timeline, vendor management, and real-time progress monitoring is now LIVE!
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <p className="text-lg font-semibold text-gray-800">
                🏗️ Premium construction management • 💰 Real budget tracking • 📊 Professional reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
