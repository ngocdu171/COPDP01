import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
}

const InputField = (props: InputFieldProps) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input
        onChange={field.onChange}
        value={field.value}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
