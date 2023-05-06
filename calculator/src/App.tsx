import "tailwindcss/tailwind.css";
import Calculator from "./calculator.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer";

function App() {
  return (
    <main className="App">
      <Calculator />
      <Footer />
    </main>
  );
}

export default App;
