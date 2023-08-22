import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type WorkExperienceParams = {
  title: string;
  duration: string;
  location: string;
  description: string;
  responsibilities?: string[];
  expandable?: boolean;
};
export const WorkExperience = ({
  title,
  description,
  duration,
  responsibilities,
  location,
  expandable = true,
}: WorkExperienceParams) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="flex flex-col text-sm mt-4">
            <Disclosure.Button
              disabled={!expandable}
              className={clsx(
                open ? "rounded-t-lg " : " rounded-lg",
                "px-4 flex items-center justify-between dark:bg-slate-700 bg-slate-100 border border-slate-200"
              )}
            >
              <div className="text-left">
                <div className="mt-2 font-semibold italic">{title}</div>
                <div className="mb-2 font-extralight text-xs italic">
                  {duration} {location}
                </div>
              </div>
              {expandable && (
                <ChevronRightIcon
                  className={clsx("w-4 h-4", open ? "rotate-90 transform" : "")}
                />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-3 bg-slate-100 border border-t-0 dark:bg-slate-700 border-slate-200">
              <div className="mb-4 text-justify">{description}</div>
              {responsibilities && (
                <div>
                  <div className="font-semibold">Responsibilities</div>
                  <ul className="list-disc list-outside p-4 gap-2 flex flex-col">
                    {responsibilities.map((responsibility) => (
                      <li>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};
