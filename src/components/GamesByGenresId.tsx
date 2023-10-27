import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { getGameListByGenreID } from "../store/slices/api_slice";

const GamesByGenresId = () => {
  const { genresClickId, gamesDataById, genresName } = useSelector(
    (store: RootState) => store.api
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGameListByGenreID(genresClickId));
  }, [dispatch, genresClickId]);

  return (
    <>
      <h1 className="mt-5 text-[40px] font-bold dark:text-white">
        {genresName} Games
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10  h-full">
        {gamesDataById.map((e) => (
          <div
            className="bg-gray-600 p-3 rounded-lg pb-10 hover:scale-105 transition-all ease-in-out cursor-pointer"
            key={e.id}
          >
            <img
              src={e.background_image}
              className="w-full h-[270px] rounded-lg object-cover"
              alt=""
            />
            <h2 className="font-bold text-2xl dark:text-white">
              {e.name}
              <span className="p-1 rounded-sm ml-2 text-xs bg-green-100 text-green-700 font-medium">
                {" "}
                {e.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-200 text-lg mt-2 items-center">
              ⭐{e.rating} 💬{e.reviews_count} 🔥{e.suggestions_count}
            </h2>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GamesByGenresId;
