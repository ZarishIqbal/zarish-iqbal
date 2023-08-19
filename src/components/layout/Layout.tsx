import { Footer } from "../footer/Footer";
import { NavigationBar } from "../navigation/NavigationBar";

export const Layout = () => {
  return (
    <div className="bg-[#FFFAFA] dark:bg-[#000000cc] w-full h-screen">
      <NavigationBar />
      <Footer />
    </div>
  );
};
