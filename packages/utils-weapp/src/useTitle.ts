import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const useTitle = (title: string) => {
  const [navTitle, setNavTitle] = useState(title);
  useEffect(() => {
    Taro.setNavigationBarTitle({ title: navTitle });
  }, [navTitle]);

  return {
    setNavTitle
  };
};

export default useTitle;
