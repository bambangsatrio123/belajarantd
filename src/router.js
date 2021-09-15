import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Sidebar />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}