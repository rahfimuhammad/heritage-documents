import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Admin = lazy(() => import("./pages/admin"));
const Detail = lazy(() => import("./pages/detail"));
const Home = lazy(() => import("./pages/home"));
const Results = lazy(() => import("./pages/results"))
const ResultsByYear = lazy(() => import("./pages/resultsByYear"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading height="100vh" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/document/detail/:id" element={<Detail />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resultsByYear" element={<ResultsByYear />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
