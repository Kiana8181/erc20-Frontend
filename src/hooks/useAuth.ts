import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/api-client";

interface Data {
  data: User;
  message: boolean;
}

interface User {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  username: string;
  walletId: string;
  email: string;
  firstname: string;
  lastname: string;
  // mytransactions: []
}

const endpoint = "/api/admin/user";

const useAuth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({} as User);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const controller = new AbortController();

  useEffect(() => {
    const request = axiosInstance.post<Data>(endpoint, {
      headers: { authorization: `Token: ${localStorage.getItem("tokenKey")}` },
    });

    request
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else setError(err.message);
        localStorage.removeItem("tokenKey");
        navigate("/home");

        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { user, error, isLoading };
};

export default useAuth;
