export default function Services() {
  const services = [
    {
      id: "01",
      title: "Distributed Backend",
      category: "System Design",
      desc: "Building fault-tolerant systems using event-sourcing and microservices. We architect for global consistency and extreme throughput."
    },
    {
      id: "02",
      title: "AI Orchestration",
      category: "Intelligence",
      desc: "Production-grade RAG and custom LLM pipelines. We ensure AI outputs are grounded in your proprietary data with zero hallucination."
    },
    {
      id: "03",
      title: "Technical UIs",
      category: "Interface",
      desc: "Crafting high-density dashboards and tools for developers. We prioritize data-visualization and low-latency interactions."
    },
    {
      id: "04",
      title: "Cloud Native",
      category: "Platform",
      desc: "Scaling infrastructure with Kubernetes and Terraform. We automate your path to production with secure CI/CD pipelines."
    }
  ];

  return (
    <section id="services" className="py-40 section-border">
      <div className="site-grid">
        <div className="col-span-12 md:col-span-4 mb-20 md:mb-0">
          <div className="label-tech mb-8">Capabilities</div>
          <h2 className="text-7xl font-bold tracking-tighter mb-10 leading-[0.95]">Precision <br />Engineering.</h2>
          <p className="text-neutral-500 max-w-xs text-lg leading-relaxed">We focus on the difficult parts of the stack, ensuring your foundation is immutable.</p>
        </div>
        
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="font-mono text-[11px] text-indigo-500 mb-6 tracking-widest uppercase">{service.id} / {service.category}</div>
              <h3 className="text-4xl font-bold mb-5 tracking-tight group-hover:text-indigo-400 transition-colors">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
