
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "Indústrias Metalúrgicas São Paulo",
      text: "A Osvaltec superou nossas expectativas. A segurança e qualidade dos serviços prestados foram impecáveis. Recomendo fortemente!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Paula Santos",
      company: "Construtora Horizonte",
      text: "Profissionalismo e pontualidade são as marcas da Osvaltec. Trabalham com materiais de primeira qualidade e entregam no prazo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Silva",
      company: "Grupo Industrial Brasileiro",
      text: "Excelente trabalho de manutenção industrial. A equipe é altamente qualificada e os resultados são sempre superiores ao esperado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-earth-brown text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-warm-beige max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. 
              Veja o que eles falam sobre nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-rust-orange mr-4 flex-shrink-0" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-warm-beige mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rust-orange to-terracotta rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-warm-beige text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
