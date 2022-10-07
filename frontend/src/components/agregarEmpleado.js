import { useState } from 'react'
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
 
const AgregarEmpleado = () => {
    const [nombreEmpleado, setNombre] = useState('');
    const [rolEmpleado, setRol] = useState('');
    const [tipoEmpleado, setTipo] = useState('');
    const navigate = useNavigate();
 
    const saveEmpleado = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/empleados',{
            nombreEmpleado: nombreEmpleado,
            rolEmpleado: rolEmpleado,
            tipoEmpleado: tipoEmpleado
        });
        navigate('/');
    }
 
    return (
        <div>
            <form onSubmit={ saveEmpleado }>
                <div className="field">
                    <label className="label">Nombre Empleado</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nombre Empleado"
                        value={ nombreEmpleado }
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Rol Empleado</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Rol Empleado"
                        value={ rolEmpleado }
                        onChange={ (e) => setRol(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Tipo Empleado</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Tipo Empleado"
                        value={ tipoEmpleado }
                        onChange={ (e) => setTipo(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Guardar</button>
                </div>
            </form>
        </div>
    )
}
 
export default AgregarEmpleado