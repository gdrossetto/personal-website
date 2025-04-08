import {
  FileBox,
  Building2,
  BookOpenText,
  ShoppingCart,
  TrendingUp,
  Wrench,
} from "lucide-react";

export const Solutions = () => {
  const features = [
    {
      icon: <FileBox className="text-green-400 w-10 h-10" />,
      title: "Landing Pages Otimizadas",
      description:
        "Criamos landing pages rápidas, responsivas e com alto foco em conversão, ideais para campanhas, produtos e geração de leads.",
    },
    {
      icon: <Building2 className="text-green-400 w-10 h-10" />,
      title: "Sites Institucionais Profissionais",
      description:
        "Apresente sua empresa com um site moderno, responsivo e que transmita autoridade. Layouts personalizados e gestão fácil de conteúdo.",
    },
    {
      icon: <BookOpenText className="text-green-400 w-10 h-10" />,
      title: "Blogs Pessoais/Corporativos",
      description:
        "Conecte-se com seu público por meio de conteúdo. Implementamos blogs com design integrado e foco em SEO.",
    },
    {
      icon: <ShoppingCart className="text-green-400 w-10 h-10" />,
      title: "Lojas Virtuais Personalizadas",
      description:
        "Desenvolvemos e-commerces com checkout seguro, integração com pagamentos e ferramentas de gestão de pedidos e estoque.",
    },
    {
      icon: <TrendingUp className="text-green-400 w-10 h-10" />,
      title: "Otimização SEO",
      description:
        "Aumente sua visibilidade no Google com otimizações técnicas, conteúdo estratégico e melhoria de performance.",
    },
    {
      icon: <Wrench className="text-green-400 w-10 h-10" />,
      title: "Manutenção e Suporte Técnico",
      description:
        "Oferecemos planos de manutenção para manter seu site sempre atualizado, seguro e funcionando perfeitamente.",
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
