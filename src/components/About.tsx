
import { Shield, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Priorizamos a segurança em todos os nossos processos e projetos"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Excelência técnica e materiais de primeira linha em cada serviço"
    },
    {
      icon: Target,
      title: "Produção",
      description: "Eficiência e pontualidade na entrega de todos os projetos"
    }
  ];

  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Sobre a Osvaltec
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Com anos de experiência no mercado, a Osvaltec é referência em construção civil 
              e serviços mecânicos industriais. Nossa empresa foi fundada com o compromisso de 
              oferecer soluções completas e confiáveis para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <value.icon className="h-12 w-12 text-rust-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-earth-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-earth-brown mb-6">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Fornecer serviços de construção civil e manutenção industrial com os mais 
                  altos padrões de qualidade, segurança e eficiência, superando as expectativas 
                  de nossos clientes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Construímos relacionamentos duradouros baseados na confiança, transparência 
                  e excelência técnica, contribuindo para o desenvolvimento sustentável da indústria.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-forest-green text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-rust-orange text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm">Projetos Concluídos</div>
                </div>
                <div className="text-center p-6 bg-terracotta text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Clientes Satisfeitos</div>
                </div>
                <div className="text-center p-6 bg-earth-brown text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
