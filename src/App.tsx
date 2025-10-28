import React, { useState } from 'react';
import Header from './components/Header';
import MetricsGrid from './components/MetricsGrid';
import RevenueChart from './components/RevenueChart';
import ExpenseChart from './components/ExpenseChart';
import RecentTransactions from './components/RecentTransactions';
import TeamPerformance from './components/TeamPerformance';
import QuickActions from './components/QuickActions';

function App() {
  const [dateRange, setDateRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Financial Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Track your company's performance and metrics</p>
          </div>
          
          <div className="flex gap-2">
            {(['week', 'month', 'quarter', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  dateRange === range
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <MetricsGrid dateRange={dateRange} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RevenueChart dateRange={dateRange} />
          </div>
          <div className="lg:col-span-1">
            <ExpenseChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <TeamPerformance />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
