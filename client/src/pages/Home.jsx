import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar /> {/*mount Navbar component*/}
      <Hero /> {/*mount Hero component*/}
      <JobListing />{/*mount JobListing component*/}

    </div>
  );
};

export default Home;