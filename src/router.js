import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PageLogin from "./pages/Login/PageLogin";

export default function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
        <Switch>
        </Switch>
    </BrowserRouter>
  );
}
