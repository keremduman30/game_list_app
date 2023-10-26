import { Genres } from "../store/slices/api_slice";
import TrendingGamesItem from "./TrendingGamesItem";

type TrendingGamesType = {
  gameList: Genres[];
};

const TrendingGames = ({ gameList }: TrendingGamesType) => {
  return (
    <div className="hidden md:block mt-7">
      <h1 className="font-bold text-[40px] dark:text-white">Trending Games</h1>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gameList.map(
          (e, i) => i < 4 && <TrendingGamesItem key={e.id} item={e} />
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
