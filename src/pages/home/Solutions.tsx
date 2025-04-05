import { ShieldCheck, UserRoundSearch, Lightbulb } from "lucide-react";

export const Solutions = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-green-400 w-8 h-8" />,
      title: "Excelência Técnica",
      description:
        "Priorizamos um código limpo e eficiente, garantindo aplicações rápidas e confiáveis.",
    },
    {
      icon: <UserRoundSearch className="text-green-400 w-8 h-8" />,
      title: "Abordagem Focada no Cliente",
      description:
        "O seu sucesso é o nosso sucesso. Trabalhamos lado a lado para entender e alcançar seus objetivos.",
    },
    {
      icon: <Lightbulb className="text-green-400 w-8 h-8" />,
      title: "Soluções Inovadoras",
      description:
        "Estamos sempre à frente das tendências tecnológicas para oferecer soluções de ponta para o seu negócio.",
    },
    {
      icon: <ShieldCheck className="text-green-400 w-8 h-8" />,
      title: "Excelência Técnica",
      description:
        "Priorizamos um código limpo e eficiente, garantindo aplicações rápidas e confiáveis.",
    },
  ];

  return (
    <section
      id="solucoes"
      className="bg-[#0A1124] text-center px-6 md:px-24 py-24"
    >
      <h2 className="text-6xl font-bold text-white mb-4 font-mono tracking-tight">
        Nossas <span className="neon-text">Soluções_</span>
      </h2>
      <p className="text-white max-w-2xl mx-auto mb-12">
        Oferecemos uma ampla gama de serviços digitais para ajudar sua empresa a
        prosperar online. De desenvolvimento web a estratégias digitais, temos
        tudo o que você precisa.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center neon-border-only w-full sm:w-2/5 lg:w-2/5 p-8"
          >
            <div className="bg-[#0A1124] p-4 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold neon-text mb-2">
              {feature.title}
            </h3>
            <p className="text-white">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
