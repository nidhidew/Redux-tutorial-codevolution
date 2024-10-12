import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserConatiner from "./components/UserConatiner";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake/>
        <ItemContainer /> */}
        <UserConatiner />
      </div>
    </Provider>
  );
}

export default App;
