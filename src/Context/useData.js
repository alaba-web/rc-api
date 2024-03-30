import { useContext } from "react";
import { DataContext } from "./DataContext";
function useData() {
  const context = useContext(DataContext);
  return context;
}

export default useData;
