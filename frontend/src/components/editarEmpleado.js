import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditarEmpleado = () => {
    const [nombreEmpleado, setNombre] = useState('');
    const [rolEmpleado, setRol] = useState('');
    const [tipoEmpleado, setTipo] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateEmpleado = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/empleados/${id}`,{
            nombreEmpleado: nombreEmpleado,
            rolEmpleado: rolEmpleado,
            tipoEmpleado: tipoEmpleado
        });
        navigate('/');
    }
 
    useEffect(() => {
        const getEmpleadoById = async () => {
            const response = await axios.get(`http://localhost:5000/empleados/${id}`);
            setNombre(response.data.nombreEmpleado);
            setRol(response.data.rolEmpleado);
            setTipo(response.data.tipoEmpleado);
        }
        getEmpleadoById();
    }, [id]);
 
    
 
    return (
        <div>
            <form onSubmit={ updateEmpleado }>
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
                    <button className="button is-primary">Actualizar Informacion</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditarEmpleado