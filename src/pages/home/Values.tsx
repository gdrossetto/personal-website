import values1 from "../../assets/solutions1.jpg";
const Values = () => {
  const services = [
    {
      title: "Sobre a GR",
      description:
        "Na GR Web Solutions, somos apaixonados por criar sites inovadores e funcionais que ajudam nossos clientes a se destacar no mundo digital. Combinando design moderno e tecnologia de ponta, oferecemos soluções personalizadas para atender às necessidades específicas de cada projeto, desde o desenvolvimento até a otimização contínua.",
      image: values1,
    },
  ];

  return (
    <section id="sobre" className="px-6 md:px-24 py-24">
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
              <p className="text-gray-600 font-normal text-lg md:text-2xl">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Values;
