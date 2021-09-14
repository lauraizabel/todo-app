import React from "react";
import Select from "react-select";

import { Container } from "./styles";

interface SelectProps {
  options?: Array<{
    value: string;
    label: string;
  }>;
  onChange?: (value: string) => void;
  value?: {
    value: string;
    label: string;
  };
  label?: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  onChange = () => {},
  value = undefined,
  label = "",
  options = [],
}) => {
  return (
    <Container>
      <Select
        value={value}
        label={label}
        placeholder={label}
        options={options}
        onChange={(val) => onChange(val!.value)}
        noOptionsMessage={() => "Sem opções"}
        loadingMessage={() => "Carregando..."}
        classNamePrefix="select"
      />
    </Container>
  );
};

export default CustomSelect;
