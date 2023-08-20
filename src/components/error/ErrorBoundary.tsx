import ErrorImage from "../../assets/404-Error.png";
import { Layout } from "../layout/Layout";

export const ErrorBoundary = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full">
        <img className="w-2/4 shadow-2xl rounded-3xl" src={ErrorImage} />
      </div>
    </Layout>
  );
};
