
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Pronto para iniciar seu projeto? Nossa equipe está disponível para 
              oferecer a melhor solução para suas necessidades.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-earth-brown mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-rust-orange rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">Telefone</div>
                      <div className="text-gray-600">(11) 99999-9999</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">WhatsApp</div>
                      <div className="text-gray-600">(11) 99999-9999</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">E-mail</div>
                      <div className="text-gray-600">contato@osvaltec.com.br</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-earth-brown rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">Endereço</div>
                      <div className="text-gray-600">São Paulo - SP</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-rust-orange rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">Horário</div>
                      <div className="text-gray-600">Segunda a Sexta: 8h às 18h</div>
                      <div className="text-gray-600">Emergências: 24h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center animate-fade-in">
              <div className="bg-earth-brown text-white rounded-lg p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6">
                  Solicite seu Orçamento Gratuito
                </h3>
                <p className="text-warm-beige mb-8 leading-relaxed">
                  Nossa equipe de especialistas está pronta para avaliar seu projeto 
                  e oferecer a melhor solução em construção civil e serviços industriais.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-rust-orange rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Análise técnica gratuita</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-rust-orange rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Orçamento detalhado em 24h</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-rust-orange rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Atendimento personalizado</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-rust-orange hover:bg-terracotta text-white py-4 text-lg font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fale Conosco no WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white text-white hover:bg-white hover:text-earth-brown py-4 text-lg font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
