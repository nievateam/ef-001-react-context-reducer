import "./App.css";

import FormUser from "./components/FormUser";
import ListUsers from "./components/ListUsers";

import UserState from "./context/UserState";

function App() {
  return (
    <>
      <UserState>
        <FormUser />
        <ListUsers />
        hola
      </UserState>
    </>
  );
}

export default App;
