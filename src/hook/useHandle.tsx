import { useState } from "react";

export default function handleValue() {
  const [value, setValue] = useState();
  const handleSort = () => {
    setValue(value);
  };
  return {
    value,
    handleSort,
  };
}
