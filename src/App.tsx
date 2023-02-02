import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import { routeps } from "./routes/pageRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
          {routeps}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
