import { Navigate } from "react-router-dom";
import IsLoadingPage from "../components/common/IsLoadingPage";
import useUser from "../hooks/useUser";

const RedirectPage = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <IsLoadingPage />;

  if (!user) return <Navigate to="/home" />;

  return <Navigate to="/dashboard" />;
};

export default RedirectPage;
