import { CanceledError, isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/api-client";
import useUser from "./useUser";

export interface Data {
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
  const { data: user, isLoading, error } = useUser();

  const navigate = useNavigate();

  if (isAxiosError(error) && error.response) {
    if ((error.response.status = 401)) {
      localStorage.removeItem("tokenKey");
      navigate("/home");
    }
  }
};

export default useAuth;
