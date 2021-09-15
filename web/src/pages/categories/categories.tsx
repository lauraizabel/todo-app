import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useLoadingContext } from "../../contexts/loading-context/loading-context";

import { CategoryType } from "../../@types/category-type";
import LayoutPrivate from "../../components/layout-private/layout-private";

import { Container } from "./styles";
import NoContent from "../../components/no-content/no-content";
import {
  createCategory,
  fetchCategories,
} from "../../services/rest/category/rest-category";
import Modal from "../../components/modal/modal";
import FormCategory from "./form-category/form-category";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { isLoading, setLoading } = useLoadingContext();

  const getCategories = async () => {
    try {
      setLoading(true);
      const allCategories: any = await fetchCategories();
      setCategories(allCategories);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        title: "Ocorreu um erro ao buscar as categorias",
        text: error.message,
        icon: "error",
      });
    }
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
    getCategories();
  };

  const handleSaveCategory = async (category: CategoryType) => {
    try {
      setLoading(true);
      await createCategory(category);
      setLoading(false);
      toggleModal();
    } catch (error: any) {
      setLoading(false);
      Swal.fire({
        title: "Ocorreu um erro ao salvar a categoria",
        text: error.message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <LayoutPrivate>
      <Container>
        {!isLoading && categories.length === 0 && (
          <NoContent onClick={toggleModal} />
        )}
        <Modal open={openModal} onClose={toggleModal}>
          <FormCategory handleSubmit={handleSaveCategory} />
        </Modal>
      </Container>
    </LayoutPrivate>
  );
};

export default Categories;
