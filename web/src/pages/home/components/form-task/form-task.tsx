import React, { useState } from "react";
import { Task } from "../../../../@types/task-type";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import CustomSelect from "../../../../components/select/custom-select";

import { Container } from "./styles";

interface FormTaskProps {
  onSubmit: (task: Task) => void;
}

const FormTask: React.FC<FormTaskProps> = ({ onSubmit }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [form, setForm] = useState<Task>({
    description: "",
    done: false,
    categoryId: null,
  });

  const handleFetchCategory = () => {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleChangeSelect = (value: string) => {
    setForm({ ...form, categoryId: Number(value) });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        label="Descrição da tarefa"
        placeholder="Digite a descrição da tarefa"
        name="description"
        onChange={handleChange}
        required
      />
      <CustomSelect
        onChange={handleChangeSelect}
        label="Selecione a categoria da tarefa"
      />
      <Button variant="contained" type="submit">
        Salvar tarefa
      </Button>
    </Container>
  );
};

export default FormTask;
