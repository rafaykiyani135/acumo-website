"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ImpactChart() {
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#111',
        titleFont: { family: 'Space Mono', size: 10 },
        bodyFont: { family: 'Space Mono', size: 12 },
        cornerRadius: 0,
        padding: 12
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(255,255,255,0.03)' },
        ticks: { color: '#333', font: { family: 'Space Mono', size: 10 } }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#333', font: { family: 'Space Mono', size: 10 } }
      }
    }
  };

  const data = {
    labels: ['0', '2', '4', '6', '8', '10'],
    datasets: [{
      label: 'Acumo_Latency',
      data: [1200, 420, 110, 38, 14, 8],
      borderColor: '#6366f1',
      borderWidth: 3,
      pointRadius: 0,
      tension: 0.3,
      fill: true,
      backgroundColor: 'rgba(99, 102, 241, 0.03)'
    }, {
      label: 'Legacy_Systems',
      data: [1200, 1150, 1180, 1120, 1140, 1100],
      borderColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1.5,
      pointRadius: 0,
      tension: 0.1,
      borderDash: [8, 4]
    }]
  };

  return (
    <section id="impact" className="py-40 section-border bg-neutral-950">
      <div className="site-grid">
        <div className="col-span-12 mb-24 text-center">
          <div className="label-tech justify-center mb-8">Performance Logic</div>
          <h2 className="text-8xl font-bold tracking-tighter">System Telemetry.</h2>
        </div>
        <div className="col-span-12">
          <div className="border border-white/5 bg-black p-12 relative">
            <div className="absolute top-6 right-8 font-mono text-[10px] text-neutral-600 tracking-widest">REALTIME_METRIC_STREAM</div>
            <div className="chart-container overflow-hidden">
               <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
