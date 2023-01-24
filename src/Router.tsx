import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProp {
  toggleTheme: () => void;
  isDark: boolean;
}

function Router({ toggleTheme, isDark }: IRouterProp) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleTheme={toggleTheme} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
