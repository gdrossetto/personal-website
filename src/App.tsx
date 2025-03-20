import "./App.css";

function Header() {
  return (
    <header className="bg-gray-900 flex justify-between items-center p-6 sticky top-0 z-50 border-b border-green-400">
      <div className="text-green-400 font-bold">Gabriel Rossetto</div>
      <nav className="space-x-4">
        <a href="#about" className="text-gray-400 hover:text-green-400">
          01. About
        </a>
        <a href="#experience" className="text-gray-400 hover:text-green-400">
          02. Experience
        </a>
        <a href="#work" className="text-gray-400 hover:text-green-400">
          03. Work
        </a>
        <a href="#contact" className="text-gray-400 hover:text-green-400">
          04. Contact
        </a>
        <button className="border border-green-400 px-4 py-2 text-green-400 hover:bg-green-400 hover:text-gray-900">
          Resume
        </button>
      </nav>
    </header>
  );
}

function Hero({ scrollToSection }: { scrollToSection: () => void }) {
  return (
    <section className="px-12 py-24 flex items-center">
      <div className="w-max">
        <p className="text-green-400 mb-4">Hi, my name is</p>
        <h1 className="text-5xl font-bold">Gabriel Rossetto</h1>
        <h2 className="text-4xl text-gray-400 mt-2">
          I build things for the web.
        </h2>
        <p className="text-gray-400 max-w-lg mt-4">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at{" "}
          <span className="text-green-400">Upstatement</span>.
        </p>
        <button
          onClick={scrollToSection}
          className="border border-green-400 px-6 py-3 mt-6 text-green-400 hover:bg-green-400 hover:text-gray-900"
        >
          Check out my course!
        </button>
      </div>
    </section>
  );
}

function CompanyCard({
  name,
  role,
  description,
  logo,
}: {
  name: string;
  role: string;
  description: string;
  logo: string;
}) {
  return (
    <article className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
      <img src={logo} alt={name} className="w-20 h-20 mb-4" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-gray-500 mt-2">{description}</p>
    </article>
  );
}

function CompaniesSection({
  companies,
}: {
  companies: {
    name: string;
    role: string;
    description: string;
    logo: string;
  }[];
}) {
  return (
    <section id="companies-section" className="mt-16 bg-white p-12">
      <h2 className="text-3xl font-bold mb-8">Some of my previous companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </section>
  );
}

function App() {
  const companies = [
    {
      name: "Booking.com",
      role: "Software Engineer",
      description:
        "Maintaining core user journey microfrontends and APIs. Developing new features and improving services. Working with ReactJS and NodeJS on AWS.",
      logo: "https://via.placeholder.com/150",
    },
    {
      name: "Zup Innovation",
      role: "Software Engineer",
      description:
        "Modernized digital services for Latin America's largest bank. Developed frontend applications with ReactJS and Angular. Maintained Kotlin backend services.",
      logo: "https://via.placeholder.com/150",
    },
    {
      name: "Revelare",
      role: "Software Engineer",
      description:
        "Built websites, hybrid mobile apps, and enterprise systems. Used technologies like ReactJS, React Native, Angular, and Vue.",
      logo: "https://via.placeholder.com/150",
    },
  ];

  const scrollToSection = () => {
    const section = document.getElementById("companies-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-mono">
      <Header />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <CompaniesSection companies={companies} />
      </main>
    </div>
  );
}

export default App;
