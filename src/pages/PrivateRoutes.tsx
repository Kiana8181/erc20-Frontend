import { Navigate, Outlet } from "react-router-dom";
import IsLoadingPage from "../components/common/IsLoadingPage";
import useUser from "../hooks/useUser";

const PrivateRoutes = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <IsLoadingPage />;

  if (!user) return <Navigate to="/home" />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
