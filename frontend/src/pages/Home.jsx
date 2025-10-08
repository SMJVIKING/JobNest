import HomeBody from "../ui/HomeBody";
import HomeHeader from "../ui/HomeHeader";

function Home() {
  return (
    <div>
    <div className="bg-secondary-0 min-h-screen flex flex-col">
      <HomeHeader />
      <HomeBody />
    </div>
    </div>
  );
}

export default Home;