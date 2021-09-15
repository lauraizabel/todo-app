import React, { useState } from "react";
import { CategoryType } from "../../../@types/category-type";
import Button from "../../../components/button/button";
import Input from "../../../components/input/input";

import { Container } from "./styles";

interface FormCategoryProps {
  handleSubmit: (category: CategoryType) => void;
}

const FormCategory: React.FC<FormCategoryProps> = ({ handleSubmit }) => {
  const [form, setForm] = useState<CategoryType>({
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(form);
  };

  return (
    <Container onSubmit={onSubmit}>
      <Input
        name="name"
        onChange={handleChange}
        label="Nome da Categoria"
        placeholder="Digite o nome da categoria"
        required
      />
      <Button variant="contained" type="submit">
        Salvar categoria
      </Button>
    </Container>
  );
};

export default FormCategory;
