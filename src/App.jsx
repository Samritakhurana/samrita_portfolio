import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { PageNotFound } from "./page/PageNotFound";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
