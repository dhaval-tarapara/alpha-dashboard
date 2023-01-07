import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="app">
      <h1>Hello world!</h1>
      <Topbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
