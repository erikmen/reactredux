import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import Test from "./pages/Test";

function App() {
  return (
    <div className="">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/test" element={<Test/>}/>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
