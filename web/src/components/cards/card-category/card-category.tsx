import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { CategoryType } from "../../../@types/category-type";
import Button from "../../button/button";

import {
  Container,
  ContainerDescription,
  ContainerDelete,
  ContainerEdit,
  ContainerButtons,
} from "./styles";

interface CardCategoryProps {
  category: CategoryType;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  category,
  handleDelete = () => {},
  handleEdit = () => {},
}) => {
  return (
    <Container>
      <span>{category?.id}</span>
      <ContainerDescription>{category.name}</ContainerDescription>
      <ContainerButtons>
        <ContainerDelete>
          <Button onClick={() => handleDelete(category.id ?? 0)}>
            <MdDeleteForever size={20} color="#260273" />
          </Button>
        </ContainerDelete>
        <ContainerEdit>
          <Button>
            <BsPencilSquare size={20} color="#260273" />
          </Button>
        </ContainerEdit>
      </ContainerButtons>
    </Container>
  );
};

export default CardCategory;
