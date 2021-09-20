import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useLoadingContext } from "../../contexts/loading-context/loading-context";

import LayoutPrivate from "../../components/layout-private/layout-private";
import NoContent from "../../components/no-content/no-content";
import Modal from "../../components/modal/modal";
import FormCategory from "./components/form-category/form-category";
import CardCategory from "../../components/cards/card-category/card-category";

import {
  createCategory,
  deleteCategory,
  fetchCategories,
} from "../../services/rest/category/rest-category";

import { CategoryType } from "../../@types/category-type";

import { Container, ContainerInside } from "./styles";
import AlertHelper from "../../utils/alert-helper";

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
        title: AlertHelper.errorGenericTitle,
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      const sureDelete = await Swal.fire({
        title: AlertHelper.confirmDeleteTitle,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: AlertHelper.confirmTextButton,
        cancelButtonText: AlertHelper.cancelTextButton,
      });

      if (sureDelete.isDismissed) return;

      setLoading(true);
      await deleteCategory(id);
      getCategories();
    } catch (error: any) {
      setLoading(false);
      Swal.fire({
        title: AlertHelper.errorGenericTitle,
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
        <ContainerInside>
          {categories.map((category: CategoryType) => (
            <CardCategory
              key={category.id}
              category={category}
              handleDelete={handleDeleteCategory}
            />
          ))}
        </ContainerInside>
        <Modal open={openModal} onClose={toggleModal}>
          <FormCategory handleSubmit={handleSaveCategory} />
        </Modal>
      </Container>
    </LayoutPrivate>
  );
};

export default Categories;
