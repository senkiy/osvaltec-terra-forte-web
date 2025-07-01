
const Portfolio = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
      title: "Complexo Industrial Metalúrgico",
      type: "Construção Industrial",
      location: "São Paulo - SP"
    },
    {
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
      title: "Manutenção de Equipamentos",
      type: "Serviços Mecânicos",
      location: "Rio de Janeiro - RJ"
    },
    {
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
      title: "Edifício Comercial Premium",
      type: "Construção Civil",
      location: "Belo Horizonte - MG"
    },
    {
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80",
      title: "Reforma Industrial Completa",
      type: "Reforma e Manutenção",
      location: "Campinas - SP"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      title: "Estrutura Metálica Industrial",
      type: "Soldagem e Metalurgia",
      location: "Santos - SP"
    },
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      title: "Centro Logístico Moderno",
      type: "Construção Industrial",
      location: "Guarulhos - SP"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Portfólio de Projetos
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça alguns dos projetos que executamos com excelência, demonstrando 
              nossa expertise em construção civil e serviços industriais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-rust-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-warm-beige mb-1 font-medium">
                    {project.type}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {project.location}
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-rust-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Concluído
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
