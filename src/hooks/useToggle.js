import { useState } from "react";

function useToggle(initialValue = false) {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = () => {
    setIsToggled((previousValue) => !previousValue);
  };

  return [isToggled, toggle];
}

export default useToggle;
