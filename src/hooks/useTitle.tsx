import { useEffect, useState } from "react";
import en from "../translations/en.json";

export const useTitle = () => {
  const { tokens } = en;

  const [title, setTitle] = useState<string>(tokens.pages.home.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const set = (title: string) => {
    setTitle(title);
  };

  return { title, set };
};
