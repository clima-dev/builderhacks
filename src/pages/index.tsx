import Head from "next/head";
import { useContext } from "react";
import Input from "../components/input";
import { ColorMode, ThemeContext } from "../modules/ThemeProvider";

export default function Home() {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  console.log(colorMode);
  return (
    <div className="bg-white dark:bg-gray-900  transition-colors duration-500">
      <Input />
    </div>
  );
}
