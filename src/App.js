import './App.css';
import AppRouter from "./routers/AppRouter";
import Navbar from "./navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
export default App;