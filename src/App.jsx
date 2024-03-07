import DefaultLayout from "./Layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
