import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Users, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricsGridProps {
  dateRange: string;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ dateRange }) => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$2,345,678',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue',
    },
    {
      title: 'Net Profit',
      value: '$892,450',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green',
    },
    {
      title: 'Total Expenses',
      value: '$1,453,228',
      change: '-3.1%',
      trend: 'down',
      icon: CreditCard,
      color: 'orange',
    },
    {
      title: 'Active Customers',
      value: '12,456',
      change: '+5.4%',
      trend: 'up',
      icon: Users,
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium mb-1">{metric.title}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                <div className="flex items-center gap-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">vs last {dateRange}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MetricsGrid;
