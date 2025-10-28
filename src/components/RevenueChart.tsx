import React from 'react';
import ReactECharts from 'echarts-for-react';
import { TrendingUp } from 'lucide-react';

interface RevenueChartProps {
  dateRange: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ dateRange }) => {
  const getChartData = () => {
    const baseData = {
      week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      month: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      quarter: ['Jan', 'Feb', 'Mar'],
      year: ['Q1', 'Q2', 'Q3', 'Q4'],
    };

    const revenueData = {
      week: [45000, 52000, 48000, 61000, 58000, 55000, 67000],
      month: [185000, 198000, 215000, 235000],
      quarter: [620000, 685000, 710000],
      year: [2015000, 2245000, 2380000, 2520000],
    };

    const profitData = {
      week: [25000, 28000, 26000, 35000, 32000, 30000, 38000],
      month: [98000, 105000, 118000, 128000],
      quarter: [335000, 368000, 385000],
      year: [892000, 1015000, 1085000, 1150000],
    };

    return {
      categories: baseData[dateRange as keyof typeof baseData],
      revenue: revenueData[dateRange as keyof typeof revenueData],
      profit: profitData[dateRange as keyof typeof profitData],
    };
  };

  const data = getChartData();

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#111827',
      },
      padding: 12,
    },
    legend: {
      data: ['Revenue', 'Profit'],
      bottom: 0,
      icon: 'circle',
      textStyle: {
        color: '#6b7280',
        fontSize: 12,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '12%',
      top: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.categories,
      axisLine: {
        lineStyle: {
          color: '#e5e7eb',
        },
      },
      axisLabel: {
        color: '#6b7280',
        fontSize: 11,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#6b7280',
        fontSize: 11,
        formatter: (value: number) => {
          if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
          if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
          return `$${value}`;
        },
      },
      splitLine: {
        lineStyle: {
          color: '#f3f4f6',
        },
      },
    },
    series: [
      {
        name: 'Revenue',
        type: 'line',
        smooth: true,
        data: data.revenue,
        itemStyle: {
          color: '#3b82f6',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.05)' },
            ],
          },
        },
        lineStyle: {
          width: 3,
        },
        symbolSize: 8,
      },
      {
        name: 'Profit',
        type: 'line',
        smooth: true,
        data: data.profit,
        itemStyle: {
          color: '#10b981',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(16, 185, 129, 0.3)' },
              { offset: 1, color: 'rgba(16, 185, 129, 0.05)' },
            ],
          },
        },
        lineStyle: {
          width: 3,
        },
        symbolSize: 8,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Revenue & Profit Trend</h2>
          <p className="text-sm text-gray-500 mt-1">Financial performance over time</p>
        </div>
        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+12.5%</span>
        </div>
      </div>
      <ReactECharts option={option} style={{ height: '350px' }} />
    </div>
  );
};

export default RevenueChart;
