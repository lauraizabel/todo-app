import RegisterType from "../../../@types/register-type";
import api from "../../api";

export const login = async (email: string, password: string): Promise<any> => {
  const data = await api.post("/login", { email, password });
  return data;
};

export const register = async (data: RegisterType): Promise<void> => {
  await api.post("/register", data);
};
