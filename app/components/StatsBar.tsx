export default function StatsBar() {
  return (
    <div className="section-border py-20">
      <div className="site-grid">
        <div className="col-span-12 md:col-span-3 border-r border-white/5 mb-8 md:mb-0">
          <div className="label-tech !before:hidden mb-4 opacity-40">Throughput</div>
          <div className="text-6xl font-bold tracking-tighter">4.2k<span className="text-indigo-500 text-2xl font-mono ml-2">/sec</span></div>
        </div>
        <div className="col-span-12 md:col-span-3 border-r border-white/5 px-0 md:px-8 mb-8 md:mb-0">
          <div className="label-tech !before:hidden mb-4 opacity-40">Availability</div>
          <div className="text-6xl font-bold tracking-tighter">99.99<span className="text-indigo-500 text-2xl font-mono ml-2">%</span></div>
        </div>
        <div className="col-span-12 md:col-span-3 border-r border-white/5 px-0 md:px-8 mb-8 md:mb-0">
          <div className="label-tech !before:hidden mb-4 opacity-40">Network</div>
          <div className="text-6xl font-bold tracking-tighter">L7<span className="text-indigo-500 text-2xl font-mono ml-2">_WAF</span></div>
        </div>
        <div className="col-span-12 md:col-span-3 px-0 md:px-8">
          <div className="label-tech !before:hidden mb-4 opacity-40">Latency</div>
          <div className="text-6xl font-bold tracking-tighter">&lt;12<span className="text-indigo-500 text-2xl font-mono ml-2">ms</span></div>
        </div>
      </div>
    </div>
  );
}
