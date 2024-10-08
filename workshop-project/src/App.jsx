import { Button } from "./components/ui/button";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthPage from "./pages/auth";
import Signup from "./pages/signup";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
