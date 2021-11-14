import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={["ks", "rs"]}></UsersList>
    </div>
  );
}

export default App;
