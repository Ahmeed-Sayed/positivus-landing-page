import "./App.css";
import CaseStudies from "./components/case-studies";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Proposal from "./components/proposal";
import Services from "./components/services";
import Sponsors from "./components/sponsors";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import WorkingProcess from "./components/working-process";

function App() {
  return (
    <div className="px-3 md:px-10 py-8 md:py-14 font-positivus">
      <Header />
      <Hero />
      {/* <Services />
      <Proposal />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs /> */}
    </div>
  );
}

export default App;
