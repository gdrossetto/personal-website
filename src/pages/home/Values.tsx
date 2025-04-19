import values1 from "../../assets/solutions1.jpg";

const About = () => {
  const aboutContent = [
    {
      title: "About Me",
      description:
        "I'm a Software Engineer passionate about creating elegant solutions to complex problems. With expertise in modern web technologies, I focus on building scalable applications that deliver exceptional user experiences. My journey in software development has equipped me with a deep understanding of both frontend and backend technologies, allowing me to tackle full-stack challenges effectively.",
      image: values1,
    },
  ];

  return (
    <section id="about" className="px-6 md:px-24 pt-24 pb-6">
      <div className="flex flex-col gap-16">
        {aboutContent.map((content, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={`mb-18 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-full md:w-1/2 object-cover rounded-lg"
            />
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                {content.title}
              </h2>
              <hr className="border-2 border-green-400 my-8 w-1/2" />
              <p className="text-gray-600 font-normal text-lg md:text-xl">
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
