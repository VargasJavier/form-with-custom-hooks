import { useState } from "react";

const useForm = (initialObject = {}) => {
  const [formState, setFormState] = useState(initialObject);

  const onInputChange = ({ target, element, setCount }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return { formState, onInputChange };
};
export default useForm;
