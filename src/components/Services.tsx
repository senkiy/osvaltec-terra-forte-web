
import { Building, Wrench, Zap, Hammer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construção Civil",
      description: "Reformas, estruturas e obras completas com qualidade e segurança garantidas.",
      features: ["Reformas residenciais e comerciais", "Estruturas de concreto", "Obras industriais", "Projetos arquitetônicos"]
    },
    {
      icon: Wrench,
      title: "Manutenção Mecânica Industrial", 
      description: "Manutenção preventiva e corretiva de máquinas e equipamentos industriais.",
      features: ["Manutenção preventiva", "Reparo de equipamentos", "Caldeiraria", "Usinagem de peças"]
    },
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Projetos e execução de instalações elétricas industriais e prediais.",
      features: ["Instalações industriais", "Quadros elétricos", "Automação", "Manutenção elétrica"]
    },
    {
      icon: Hammer,
      title: "Soldagem e Metalurgia",
      description: "Serviços especializados em soldagem e trabalhos com estruturas metálicas.",
      features: ["Soldagem especializada", "Estruturas metálicas", "Caldeiraria pesada", "Tubulação industrial"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos soluções completas em construção civil e serviços mecânicos industriais, 
              com foco na excelência e segurança em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-rust-orange text-white rounded-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl text-earth-brown">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-forest-green rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
