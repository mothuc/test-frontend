import "./App.css";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Contents />
        <Footer />
      </div>
    </div>
  );
}

export default App;
