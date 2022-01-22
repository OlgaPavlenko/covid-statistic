import { FunctionComponent } from "react";
import { Header } from "../Header";
import { Table } from "../Table/Table";

export const Layout: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
};
