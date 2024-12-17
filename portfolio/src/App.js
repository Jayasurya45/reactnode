// import Editform from './components/EditForm/Editform';
import Editform from "./components/EditForm/Editform";
import Createform from "./components/Createform/Createform";
// import Deleteform from "./components/Deletefrm/Deleteform";
import MainPage from "./components/Main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Root path */}
        <Route path="/create" element={<Createform />} />
        <Route path="/edit/:id" element={<Editform />} />
        {/* <Route path="/delete/:id" element={<Deleteform />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
