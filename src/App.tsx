import React, { ChangeEvent, useState } from "react";
import InputChange from "./hook/useInputChange";
const tabClassName = " p-2 rounded-lg text-white";
const tabClassActive = "bg-blue-500 pointer-events-none";
type SortData = "asc" | "desc";

const App = () => {
  const [sorted, setSorted] = useState<SortData>("desc");
  const [active, setActive] = useState<"tab1" | "tab2">("tab1");
  const { value: fullname, handleChange } = InputChange();
  console.log(fullname);
  const handleValue = (value: SortData) => {
    setSorted(value);
  };
  return (
    <div className="flex items-center justify-center gap-5 mt-10 ">
      <TabItem isActive={sorted === "desc"} onClick={() => handleValue("desc")}>
        Sort DESC
      </TabItem>
      <TabItem isActive={sorted === "asc"} onClick={() => handleValue("asc")}>
        Sort ASC
      </TabItem>
      <div>
        <input type="text" name="fullname" onChange={handleChange} />
      </div>
    </div>
  );
};

interface TabItemProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
function TabItem({ children, isActive, onClick }: TabItemProps) {
  return (
    <div
      className={`${tabClassName} ${isActive ? tabClassActive : "bg-gray-300"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default App;
