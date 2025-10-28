import React from 'react';
import ReactECharts from 'echarts-for-react';

const ExpenseChart: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#111827',
      },
      padding: 12,
      formatter: '{b}: ${c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      icon: 'circle',
      textStyle: {
        color: '#6b7280',
        fontSize: 12,
      },
      itemGap: 12,
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '75%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold',
            color: '#111827',
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
        data: [
          { value: 458000, name: 'Salaries', itemStyle: { color: '#3b82f6' } },
          { value: 325000, name: 'Marketing', itemStyle: { color: '#8b5cf6' } },
          { value: 285000, name: 'Operations', itemStyle: { color: '#f59e0b' } },
          { value: 215000, name: 'R&D', itemStyle: { color: '#10b981' } },
          { value: 170228, name: 'Others', itemStyle: { color: '#6b7280' } },
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Expense Breakdown</h2>
        <p className="text-sm text-gray-500 mt-1">Monthly distribution</p>
      </div>
      <ReactECharts option={option} style={{ height: '350px' }} />
    </div>
  );
};

export default ExpenseChart;
