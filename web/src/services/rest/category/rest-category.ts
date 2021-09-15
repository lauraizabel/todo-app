import { CategoryType } from "../../../@types/category-type";
import api from "../../api";
import { getUserId } from "../../localStorage";

export const fetchCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

export const createCategory = async (category: CategoryType) => {
  await api.post("/category", { ...category, userId: getUserId() });
};
