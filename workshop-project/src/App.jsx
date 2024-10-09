import { Button } from "./components/ui/button";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthPage from "./pages/auth";
import Signup from "./pages/signup";
import AccompanyPage from "./pages/accompanyPage";
import DailyForm from "./pages/dailyFormPage";
import ListPatient from "./pages/listPatient";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/accompanyPage" element={<AccompanyPage />} />
        <Route path="/dailyFormPage" element={<DailyForm />} />
        <Route path="/listPatient" element={<ListPatient />} />
      </Routes>
    </div>
  );
}

export default App;
