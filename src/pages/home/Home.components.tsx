import FeaturedOption from "../../components/featured-option/FeaturedOption.components";
import Footer from "../../components/footer/Footer.components";
import Header from "../../components/header/Header.components";
import Hero from "../../components/hero/Hero.components";
import MemberStories from "../../components/member-stories/MemberStories.components";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedOption />
      <MemberStories />
      <Footer />
    </>
  );
};

export default Home;
