import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner title="Welcome" />
      <CategoryMenu />
    </>
  );
}
export default Home;
