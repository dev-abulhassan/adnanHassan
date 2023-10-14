import "./App.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfollio1</section>
      <section>Portfollio2</section>
      <section>Portfollio3</section>
      <section id="About">About</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
