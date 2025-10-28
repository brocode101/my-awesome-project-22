import React from 'react';
import { ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  category: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'income',
      description: 'Client Payment - Acme Corp',
      category: 'Revenue',
      amount: 45000,
      date: '2025-01-15',
      status: 'completed',
    },
    {
      id: '2',
      type: 'expense',
      description: 'Marketing Campaign Q1',
      category: 'Marketing',
      amount: 12500,
      date: '2025-01-14',
      status: 'completed',
    },
    {
      id: '3',
      type: 'income',
      description: 'Subscription Revenue',
      category: 'Revenue',
      amount: 8900,
      date: '2025-01-14',
      status: 'completed',
    },
    {
      id: '4',
      type: 'expense',
      description: 'Office Rent - January',
      category: 'Operations',
      amount: 15000,
      date: '2025-01-13',
      status: 'completed',
    },
    {
      id: '5',
      type: 'expense',
      description: 'Software Licenses',
      category: 'Operations',
      amount: 3200,
      date: '2025-01-12',
      status: 'pending',
    },
    {
      id: '6',
      type: 'income',
      description: 'Product Sales',
      category: 'Revenue',
      amount: 22000,
      date: '2025-01-11',
      status: 'completed',
    },
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    failed: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <p className="text-sm text-gray-500 mt-1">Latest financial activities</p>
        </div>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                {transaction.type === 'income' ? (
                  <ArrowDownRight className="w-5 h-5 text-green-600" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-red-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{transaction.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">{transaction.category}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{transaction.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                </p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[transaction.status]}`}>
                  {transaction.status}
                </span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
