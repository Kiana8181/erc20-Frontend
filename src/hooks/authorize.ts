import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const authorize = (error: any) => {
  const navigate = useNavigate();

  if (isAxiosError(error) && error.response) {
    if ((error.response.status = 401)) {
      localStorage.removeItem("tokenKey");
      navigate("/");
    }
  } else return;
};

export default authorize;
