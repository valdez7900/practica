import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import EmpleadoLista from "./components/empleadoLista.js";
import AgregarEmpleado from "./components/agregarEmpleado.js";
import EditarEmpleado from "./components/editarEmpleado.js";
import Navbar from "./components/navbar.js";
 
function App() {
  return (
    
    <Router>
    <Navbar />
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes >
            <Route exact path="/" element={<EmpleadoLista/>}/>
            <Route exact path="/add" element={<AgregarEmpleado/>}/>
            <Route exact path="/edit/:id" element={<EditarEmpleado/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;