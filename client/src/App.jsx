import { Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import GameList from "./component/game-list/GameList";
import GameCreate from "./component/game-create/GameCreate";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
