type ProgressBarParams = {
  skill: string;
  percentage: number;
};
export const ProgressBar = ({ skill, percentage }: ProgressBarParams) => {
  return (
    <div className="flex mt-4 items-center gap-2">
      <p className="text-[8px] w-1/3">{skill}</p>
      <div className="w-2/3 bg-neutral-200 rounded-full dark:bg-neutral-600 ">
        <div
          className="bg-slate-500 dark:bg-slate-300 rounded-full p-0.5 text-center text-[8px] font-medium leading-none dark:text-sky-900 text-white"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};
