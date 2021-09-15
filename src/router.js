import { Layout } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Layout>
        <Switch>
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
