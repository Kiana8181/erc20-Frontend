import { axiosInstance } from "../../services/api-client";

const endoint1 = "/api/login";
const endoint2 = "/api/register";
const endoint3 = "/v1/auth/otp/register";
const endoint4 = "/v1/auth/wizard";

async function Login(body: any) {
  const { data } = await axiosInstance.post(endoint1, body);
  localStorage.setItem("tokenKey", data["token"]);
  return data;
}

async function Register(body: any) {
  const { data } = await axiosInstance.post(endoint2, body);
  return data;
}

export { Login, Register };
