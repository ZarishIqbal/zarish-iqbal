import RedDot from "../assets/redDot.png";
import mischool1 from "../assets/work/mischool1.jpg";
import mischool2 from "../assets/work/mischool2.png";
import novo1 from "../assets/work/novo1.png";
import novo2 from "../assets/work/novo2.png";
import runmatch1 from "../assets/work/runmatch1.jpg";
import runmatch2 from "../assets/work/runmatch2.jpg";
import shodriver from "../assets/work/shodriver1.png";
import syncup1 from "../assets/work/syncup1.png";
import syncup2 from "../assets/work/syncup2.png";
import { Layout } from "../components/layout/Layout";
import { WorkCard } from "../components/work/WorkCard";

export const Work = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col md:mx-20 mx-10">
        <div className="font-poppins italic text-3xl font-semibold flex items-center my-4">
          Some of my work{" "}
          <span>
            <img className="w-6" src={RedDot} />
          </span>
        </div>
        <WorkCard
          images={[novo1, novo2]}
          description="An loyalty application built with React Native for Novo Plaza customers. The customer could collect loyalty points for every purchase made in Novo Plaza and exchange them for collected rewards. The application had a robust OCR which recognized about 100 different receipt of the shops in the plaza. The backend was built with Laravel"
          title="Novoapka"
          link="https://play.google.com/store/apps/details?id=com.novoapka&hl=en_US&gl=US"
          tags={["React Native", "IOS", "Android"]}
        />
        <WorkCard
          images={[shodriver]}
          description="Shodriver is a convenient online service book where you can add maintenance records yourself or ask a car repair shop to do it for you. Additionally, you can share your service book with potential buyers or transfer it when you sell your car. The users, along with keeping their records, can calculate fuel consumption using the calculator and also interact with each other by creating stories, following each other and commenting on other's stories "
          title="Shodriver"
          orientation="rtl"
          link="https://shodriver.com/"
          tags={["ReactJS", "pwa"]}
        />
        <WorkCard
          images={[syncup1, syncup2]}
          description="A react native mobile application used for tracking the menstrual cycle and showing the predictions about the cycle. Created by using the popular typescript template ignite. The backend was created using Python framework Django."
          title="SyncUp Health"
          link="https://syncup.health/"
          tags={["React Native", "IOS", "Android"]}
        />
        <WorkCard
          images={[runmatch2, runmatch1]}
          description="A location-based search mobile app that helps its users find a gym companion and suitable gymnasiums with features like chat, group chat, adding friends, setting meet ups and an android widget for showing coming up meetups /n To help users select a gymnasium, each gym had multiple reviews and a star rating. For finding a buddy, user had to go through a vigorous verification process using their National IDs and live photo verification. These facial-recognition verifications were done using Microsoft azure."
          title="Runmatch"
          orientation="rtl"
          tags={["React native", "expo", "firebase"]}
        />

        <WorkCard
          images={[mischool2, mischool1]}
          description="MISchool is a management software system for schools. MISchool enables school to collect, organize, and store records giving your school full control of all academic, finance, wellbeing, and administrative information. The app supports offline support as a PWA. The frontend is built using ReactJS, typescript and Tailwind CSS while the backend is developed using Elixir."
          title="MISchool"
          link="https://mischool.pk/"
          tags={["React JS", "PWA", "Elixir"]}
        />
      </div>
    </Layout>
  );
};
