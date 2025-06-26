
import "./styles/theme.css";
import "./styles/global.css";

import Header from "./components/Header";
//import Main   from "./components/Main";
//import Footer from "./components/Footer";
import { LuckyNumber } from "./components/LuckyNumber";


export default function App() {
  return (
    <>
    <Header />
      <LuckyNumber />
    </>
  );
}
