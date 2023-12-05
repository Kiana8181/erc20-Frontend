import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import IsLoadingPage from "../components/common/IsLoadingPage";

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
