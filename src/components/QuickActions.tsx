import React from 'react';
import { Plus, FileText, Send, Download } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Plus,
      label: 'New Invoice',
      color: 'blue',
    },
    {
      icon: FileText,
      label: 'Generate Report',
      color: 'purple',
    },
    {
      icon: Send,
      label: 'Send Payment',
      color: 'green',
    },
    {
      icon: Download,
      label: 'Export Data',
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
    green: 'bg-green-50 text-green-600 hover:bg-green-100',
    orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        <p className="text-sm text-gray-500 mt-1">Frequently used tools</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all ${
                colorClasses[action.color as keyof typeof colorClasses]
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
