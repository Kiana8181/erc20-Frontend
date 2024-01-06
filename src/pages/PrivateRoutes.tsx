import { Navigate, Outlet } from "react-router-dom";
import IsLoadingPage from "../components/common/IsLoadingPage";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <IsLoadingPage />;

  if (!user) return <Navigate to="/home" />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
