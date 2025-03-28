import solutions1 from "../../assets/solutions1.jpg";
import solutions2 from "../../assets/digitalmarketing.jpg";
import solutions3 from "../../assets/responsive.jpg";

export const Solutions = () => {
  const services = [
    {
      title: "Desenvolvimento de Websites Personalizados",
      description:
        "Crie uma presença online forte com um site moderno, responsivo e otimizado. Desenvolvido sob medida para atender às necessidades específicas do seu negócio.",
      image: solutions1,
    },
    {
      title: "Landing Pages para Campanhas",
      description:
        "Aumente suas conversões com landing pages personalizadas. Ideal para lançamentos de produtos, eventos e campanhas de marketing.",
      image: solutions2,
    },
    {
      title: "Otimização e Manutenção de Sites",
      description:
        "Garanta o melhor desempenho do seu site. Realizamos otimizações para aumentar a velocidade, melhorar o SEO e garantir uma experiência impecável.",
      image: solutions3,
    },
    {
      title: "Consultoria em Desenvolvimento Web",
      description:
        "Precisa de orientação técnica para seu projeto? Com nossa consultoria, você terá apoio especializado para tomar as melhores decisões em tecnologia.",
      image: solutions1,
    },
  ];

  return (
    <section id="solucoes" className="px-6 md:px-24 py-24">
      <h2 className="mb-24 text-center font-mono text-6xl font-bold text-gray-900 tracking-tight">
        Nossas Soluções_
      </h2>

      <div className="flex flex-col gap-16">
        {services.map((service, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={`mb-18 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 object-cover rounded-lg"
            />
            <div className="w-full md:w-1/2 p-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
                {service.title}
              </h3>
              <hr className="border-2 border-green-400 my-8 w-1/2" />
              <p className="text-gray-400 font-normal text-lg md:text-2xl">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
