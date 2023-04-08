import { ChangeEvent, useState } from "react";

export default function InputChange() {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    handleChange,
  };
}
