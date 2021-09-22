import "../styles/App.css";
import { useSelector } from "react-redux";
import { user as selectUser } from "../features/userSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
