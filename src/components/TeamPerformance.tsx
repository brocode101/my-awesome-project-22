import React from 'react';
import { Award, Target } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  performance: number;
  target: number;
  avatar: string;
}

const TeamPerformance: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Sales Director',
      performance: 92,
      target: 100,
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Lead',
      performance: 88,
      target: 95,
      avatar: 'MC',
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      performance: 95,
      target: 90,
      avatar: 'ED',
    },
    {
      name: 'Robert Wilson',
      role: 'Operations Head',
      performance: 85,
      target: 100,
      avatar: 'RW',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Team Performance</h2>
          <p className="text-sm text-gray-500 mt-1">Top performers this month</p>
        </div>
        <Award className="w-5 h-5 text-yellow-500" />
      </div>

      <div className="space-y-4">
        {team.map((member, index) => {
          const percentage = (member.performance / member.target) * 100;
          const isOverTarget = percentage >= 100;

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${isOverTarget ? 'text-green-600' : 'text-gray-900'}`}>
                    {member.performance}%
                  </p>
                  <p className="text-xs text-gray-500">of {member.target}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    isOverTarget ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPerformance;
