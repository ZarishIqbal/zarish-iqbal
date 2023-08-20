import clsx from "clsx";

type WorkCardParams = {
  orientation?: string;
  description: string;
  title: string;
  images: string[];
  link?: string;
  tags?: string[];
};

export const WorkCard = ({
  orientation,
  description,
  title,
  images,
  link,
  tags,
}: WorkCardParams) => {
  return (
    <div
      className={clsx(
        "flex w-full mt-10 relative",
        orientation === "rtl" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="w-1/3 bg-[#ffdbd9] dark:bg-[#2B2B2E] p-10 flex gap-5 shadow-2xl dark:border-0 border border-[#eeeeee] rounded-sm">
        <img
          className={clsx(images[1] ? "w-32 h-64 " : "w-full ", " rounded-2xl")}
          src={images[0]}
        />
        {images[1] && (
          <img className="w-32 h-64 rounded-2xl mt-10 " src={images[1]} />
        )}
      </div>
      <div className="w-2/3 mx-10 gap-5 flex flex-col">
        <div className="font-poppins font-semibold text-xl">{title}</div>
        <div className="font-poppins font-medium text-xl">{description}</div>
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-blue-400 underline italic"
          >
            Check out the app
          </a>
        )}
        {tags && (
          <div className="flex gap-5 absolute bottom-0">
            {tags.map((tag) => (
              <div className="shadow-md font-poppins text-base font-semibold bg-red-500 p-2 text-white rounded-md">
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
