import { Genres, setClickgenresId } from "../store/slices/api_slice";
import { useAppDispatch } from "../store/store";
type GenresItemType = {
  item: Genres;
  index: number;
};
const GenresListItem = ({ item }: GenresItemType) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() =>
        dispatch(setClickgenresId({ clickId: item.id, name: item.name }))
      }
      className={`group flex items-center gap-4 mr-4 my-2 cursor-pointer rounded-md hover:bg-gray-300 hover:dark:bg-gray-600 p-2 
      `}
    >
      <img
        src={item.image_background}
        className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 "
      />
      <h1 className="text-xl dark:text-white group-hover:font-bold  transition-all ease-out duration-300  ">
        {item.name}
      </h1>
    </div>
  );
};

export default GenresListItem;
//    deleteTask(name: string): void
