import "./App.css";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="window-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <h1 className="title">🎬 Películas</h1>
      </header>
      <main className="site-main">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
