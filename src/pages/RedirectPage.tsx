import { Navigate } from "react-router-dom";
import IsLoadingPage from "../components/common/IsLoadingPage";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";

const RedirectPage = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <IsLoadingPage />;

  if (!user) return <Navigate to="/home" />;

  return <Navigate to="/dashboard/main" />;
};

export default RedirectPage;
