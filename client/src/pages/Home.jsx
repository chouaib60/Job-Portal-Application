import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar /> {/*mount Navbar component*/}
      <Hero />
    </div>
  );
};

export default Home;