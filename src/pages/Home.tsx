import GameList from "../components/GameList";
import GenresList from "../components/GenresList";

const Home = () => {
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block h-full">
        <GenresList  />
      </div>
      <div className="col-span-4 md:col-span-3">
        <GameList />
      </div>
    </div>
  );
};

export default Home;
//https://api.rawg.io/api/genres?key=18d8dc115d954615a6fe8522598e8a97
