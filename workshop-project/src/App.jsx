import { Button } from "./components/ui/button";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthPage from "./pages/auth";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Red button to navigate to /auth */}

      {/* Routes */}
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
