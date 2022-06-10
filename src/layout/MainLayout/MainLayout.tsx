import React from "react";
import { Header } from "@/components/Header";

//Styles
import "./MainLayout.scss"

interface IProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}
export const MainLayout: React.FC<IProps> = ({ children, className }) => {
  return (<div className="main-layout">
    <Header className="main-layout__header" />
    <main className={`main-layout__content ${className}`}>
      {children}
    </main>
  </div>);
};
