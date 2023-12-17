import { Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import GameList from "./component/game-list/GameList";
import GameCreate from "./component/game-create/GameCreate";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import GameDetails from "./component/game-details/GameDetails";
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
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
