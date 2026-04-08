import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main>
      <section className="h-screen p-4">
        <div className="p-3  h-[98%] bg-muted-bg rounded-2xl">
          <Header />
          <Hero />
        </div>
      </section>
      <About />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
