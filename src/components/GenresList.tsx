import { useEffect } from "react";
import { getGenreList } from "../store/slices/api_slice";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import GenresListItem from "./GenresListItem";

const GenresList = () => {
  const { genresData, loading } = useSelector((store: RootState) => store.api);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (loading == "idle") {
      dispatch(getGenreList("/genres"));
    }
  }, [dispatch, loading]);

  return (
    <div className="">
      <h1 className="text-3xl font-bold dark:text-white mb-3 ">Genres</h1>
      {genresData.map((item,index) => (
        <GenresListItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default GenresList;
