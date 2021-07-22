import logo from './logo.svg';
import './App.css';


import Header from './componentes/Header/header.js';
import Footer from './componentes/Footer';
import HomePage from './componentes/HomePage';


function App() {
  return (
    <div className="App">  
    
        <Header />
        <HomePage />
        <Footer />              
    
    </div>
  );
}

export default App;
