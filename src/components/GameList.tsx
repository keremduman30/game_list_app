import { useSelector } from "react-redux";
import { getGameList } from "../store/slices/api_slice";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { Banner } from "./Banner";

const GameList = () => {
  const { gamesData, loading } = useSelector((store: RootState) => store.api);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (loading == "idle") {
      dispatch(getGameList("/games"));
    }
  }, [dispatch, loading]);
  return (
    <div>
      {loading == "success" && (
        <div>
          <Banner firstItem={gamesData[0]} />
        </div>
      )}
    </div>
  );
};

export default GameList;
