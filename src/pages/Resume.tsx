import {
  ArrowDownTrayIcon,
  AtSymbolIcon,
  CakeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import ProfilePic from "../assets/resume/profile-pic.png";
//@ts-ignore
import ResumePDF from "../assets/resume/zarish-iqbal.pdf";
import { Layout } from "../components/layout/Layout";
import { ProgressBar } from "../components/resume/ProgressBar";
import { WorkExperience } from "../components/resume/WorkExperience";
import { workExperience } from "../constants/workExperienceData";

export const Resume = () => {
  return (
    <Layout>
      <>
        <div
          className={clsx(
            "flex w-full mt-10 relative md:flex-nowrap flex-wrap"
          )}
        >
          <div className="w-full md:w-1/3">
            <div className="mx-10 flex flex-col items-center">
              <img className="w-40 relative shadow-lg" src={ProfilePic} />
              <div className="flex items-center text-[8px] w-full md:w-40 mt-3 italic font-poppins font-light justify-center">
                <DevicePhoneMobileIcon className="w-4 h-4 mr-2" /> Developer at
                Arab National Bank
              </div>
              <div className="flex items-center text-[8px] w-full md:w-40 mt-2 italic font-poppins font-light  md:justify-start justify-center">
                <MapPinIcon className="w-4 h-4 mr-2" /> Riyadh, Saudi Arabia
              </div>
              <a
                href="mailto:zarisiqbal.zi@gmail.com"
                className="flex items-center text-[8px]  w-full md:w-40 mt-2 italic font-poppins font-light  md:justify-start justify-center"
              >
                <AtSymbolIcon className="w-4 h-4 mr-2" />{" "}
                zarisiqbal.zi@gmail.com
              </a>
              <div className="flex items-center text-[8px]  w-full md:w-40 mt-2 italic font-poppins font-light md:justify-start justify-center">
                <CakeIcon className="w-4 h-4 mr-2" /> Nov, 1997
              </div>
            </div>
            <div className="mx-10 flex flex-col items-center ">
              <div className="w-full md:w-40 mx-10 md:mx-0">
                <div className="font-poppins font-semibold mt-5 text-sm">
                  Skills
                </div>
                <ProgressBar skill="Javascript" percentage={90} />
                <ProgressBar skill="React JS" percentage={95} />
                <ProgressBar skill="React Native" percentage={85} />
                <ProgressBar skill="Node JS" percentage={85} />
                <ProgressBar skill="Angular JS" percentage={85} />
                <ProgressBar skill="OutSystems" percentage={60} />
                <ProgressBar skill="Elixir" percentage={65} />
                <ProgressBar skill="Svelte" percentage={55} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-full overflow-scroll mr-2 md:mr-10 ">
            <div className="m-4 py-5">
              <div className="font-bold italic">Key Summary</div>
              <div className="italic text-sm mt-2 text-justify">
                Experienced React Native, React, and OutSystems developer with a
                strong track record of delivering high-quality applications.
                Proficient in developing cross-platform mobile apps using React
                Native and web applications using React. Skilled in designing
                and implementing complex business logic using OutSystems.
              </div>
            </div>
            <div className="m-4">
              <div className="font-semibold m-2">Work History</div>
              {workExperience.map((experience) => (
                <WorkExperience {...experience} />
              ))}
            </div>
            <div className="m-4">
              <div className="font-semibold m-2">Education</div>

              <WorkExperience
                title="COMSATS University Islamabad  / BS in Software Engineering"
                description="Focus on Data mining"
                duration="May 2021"
                location="Lahore, Pakistan"
                expandable={false}
              />
            </div>
          </div>
        </div>
        <a
          href={ResumePDF}
          download
          target="_blank"
          className="w-52 rounded-3xl m-auto py-2 dark:hover:text-sky-900 hover:text-sky-600 flex items-center justify-center my-5 gap-4 border border-primary hover:border-sky-600 dark:hover:border-sky-900"
        >
          <span>Download Resume</span>
          <ArrowDownTrayIcon className="w-6 h-6 hover:text-sky-600 dark:hover:text-sky-900" />
        </a>
      </>
    </Layout>
  );
};
