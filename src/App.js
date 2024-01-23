import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import AddNote from "./Pages/AddNote";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </div>
  );
}

export default App;
