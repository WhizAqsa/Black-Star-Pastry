import Banner from "../components/Banner";
import Category from "../components/CategoryMenu";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner title="Welcome" />
      <Category />
    </>
  );
}
export default Home;
