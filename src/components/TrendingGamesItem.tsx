import { Genres } from "../store/slices/api_slice";

type GamesItem = {
  item: Genres;
};

const TrendingGamesItem = ({ item }: GamesItem) => {
  return (
    <div className="bg-[#76a8f75e] rounded-lg] group hover:scale-110 transition-all duration-300 ease-in-out mt-7">
      <img
        src={item.background_image}
        className="h-[420px] rounded-t-lg object-cover "
        alt=""
      />
      <h2 className="text-2xl font-bold dark:text-white p-2">{item.name}</h2>
    </div>
  );
};

export default TrendingGamesItem;
