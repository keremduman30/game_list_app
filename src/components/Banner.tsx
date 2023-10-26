import { Genres } from "../store/slices/api_slice";

type bannerType = {
  firstItem?: Genres;
};

export const Banner = ({ firstItem }: bannerType) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0  p-5 bg-gradient-to-t from-slate-800 to-transparent w-full ">
        <h1 className="text-4xl text-white font-bold ">{firstItem?.name}</h1>
        <button
          type="button"
          className="bg-blue-700 text-white p-3 my-2 text-xl rounded-md"
        >
          Get Now
        </button>
      </div>
      <img
        src={firstItem?.background_image}
        className=" w-full md:h-[500px] object-cover rounded-xl bg-yellow-600 "
        alt=""
      />
    </div>
  );
};
