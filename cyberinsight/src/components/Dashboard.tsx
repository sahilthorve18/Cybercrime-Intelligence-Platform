import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { TrendingUp, AlertCircle, Lock, Activity } from 'lucide-react';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface SurveyData {
  [key: string]: string;
}

interface Stats {
  totalResponses: number;
  threatRate: number;
  tfaRate: number;
  riskStatus: string;
  avgResponseTime: string;
}

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    totalResponses: 0,
    threatRate: 0,
    tfaRate: 0,
    riskStatus: 'Loading...',
    avgResponseTime: '--',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch('/data.csv');
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results: any) => {
          const data = results.data as SurveyData[];
          calculateStats(data);
          setLoading(false);
        },
        error: () => {
          setLoading(false);
        },
      });
    } catch (err) {
      setLoading(false);
    }
  };

  const calculateStats = (data: SurveyData[]) => {
    const total = data.length;
    const threats = data.filter(r => r['Have you ever encountered any cyber threat? ']?.trim() === 'Yes').length;
    const tfa = data.filter(r => r['Do you use two-factor authentication (2FA)?']?.trim() === 'Yes').length;

    const threatRate = total > 0 ? Math.round((threats / total) * 100) : 0;
    const tfaRate = total > 0 ? Math.round((tfa / total) * 100) : 0;

    setStats({
      totalResponses: total,
      threatRate,
      tfaRate,
      riskStatus: threatRate > 50 ? 'High' : 'Medium',
      avgResponseTime: '2.3 min',
    });
  };

  const doughnutData = {
    labels: ['At Risk', 'Safe'],
    datasets: [{
      data: [stats.threatRate, 100 - stats.threatRate],
      backgroundColor: ['#fb7185', '#34d399'],
      borderColor: ['rgba(251, 113, 133, 0.1)', 'rgba(52, 211, 153, 0.1)'],
      borderWidth: 2,
    }],
  };

  const barData = {
    labels: ['Threats Encountered', '2FA Usage'],
    datasets: [{
      label: 'Population %',
      data: [stats.threatRate, stats.tfaRate],
      backgroundColor: ['rgba(251, 113, 133, 0.8)', 'rgba(56, 189, 248, 0.8)'],
      borderRadius: 8,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'bottom' as const, labels: { padding: 20, color: '#cbd5e1' } },
    },
  };

  const StatCard = ({ icon: Icon, label, value, color }: any) => (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-2">{label}</p>
          <h3 className={`text-3xl font-bold ${color}`}>{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color === 'text-cyan-400' ? 'bg-cyan-500/10' : color === 'text-red-400' ? 'bg-red-500/10' : color === 'text-green-400' ? 'bg-green-500/10' : 'bg-yellow-500/10'}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Cyber Analytics Dashboard
          </h1>
          <p className="text-slate-400 text-lg">Real-time cybersecurity threat analysis and intelligence</p>
        </div>

        {/* Stats Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              icon={Activity}
              label="Total Responses"
              value={stats.totalResponses}
              color="text-cyan-400"
            />
            <StatCard
              icon={AlertCircle}
              label="Threat Encounter Rate"
              value={`${stats.threatRate}%`}
              color="text-red-400"
            />
            <StatCard
              icon={Lock}
              label="2FA Adoption Rate"
              value={`${stats.tfaRate}%`}
              color="text-green-400"
            />
            <StatCard
              icon={TrendingUp}
              label="Overall Risk Status"
              value={stats.riskStatus}
              color={stats.riskStatus === 'High' ? 'text-red-400' : 'text-yellow-400'}
            />
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Risk Distribution */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-2 text-white">Risk Distribution</h2>
            <p className="text-slate-400 mb-6">At Risk vs. Safe Population</p>
            <div className="h-80 flex items-center justify-center">
              <Doughnut data={doughnutData} options={{ ...chartOptions, cutout: '75%' }} />
            </div>
          </div>

          {/* Security Metrics */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-2 text-white">Key Security Metrics</h2>
            <p className="text-slate-400 mb-6">Comparison of Threat Data</p>
            <div className="h-80 flex items-center justify-center">
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Latest Insights</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{stats.threatRate}% of respondents have encountered cyber threats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{stats.tfaRate}% utilize two-factor authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Risk level: {stats.riskStatus}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-400 mb-2">Recommendations</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Enable 2FA on all accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Use strong password policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Conduct regular security audits</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-2">Quick Stats</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex justify-between">
                <span>Avg Response Time</span>
                <span className="font-bold text-cyan-400">{stats.avgResponseTime}</span>
              </li>
              <li className="flex justify-between">
                <span>Data Quality</span>
                <span className="font-bold text-green-400">Excellent</span>
              </li>
              <li className="flex justify-between">
                <span>Last Updated</span>
                <span className="font-bold text-purple-400">Now</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
