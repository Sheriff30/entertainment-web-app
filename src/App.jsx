import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthpagesLayout from "./ui/AuthPagesLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ApplicationLayout from "./ui/ApplicationLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<AuthpagesLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
