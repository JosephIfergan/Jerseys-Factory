import { Container } from 'react-bootstrap'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";



const App = () => {
  return (
    <>
        <Header/>
      <main className="py-3">
          <Container>
              <Home/>
          </Container>
      </main>
        <Footer/>
    </>
  );
}

export default App;
