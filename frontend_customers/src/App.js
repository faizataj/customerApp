import './App.css';
import CustomerDetails from './components/CustomerDetails';
import CustomerList from './components/CustomerList';
import Header from './components/Header';

function App() {


  return (
    <div className="App">
     <Header/>
     <div className="row justify-content-start">
    <div className="col-3">
      <CustomerList/>
    </div>
    <div className="col-9" style={{"backgroundColor":"#ffb6c152"}}>
      <CustomerDetails />
    </div>
  </div>
    </div>
  );
}

export default App;
