import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const EmpleadoList = () => {
    const [empleados, setEmpleado] = useState([]);
 
    useEffect(() => {
        getEmpleados();
    }, []);
 
    const getEmpleados = async () => {
        const response = await axios.get('http://localhost:5000/empleados');
        setEmpleado(response.data);
    }
 
    const deleteEmpleado = async (id) => {
        await axios.delete(`http://localhost:5000/empleados/${id}`);
        getEmpleados();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Agregar Nuevo Empleado</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nombre Empleado</th>
                        <th>Rol Empleado</th>
                        <th>Tipo Empleado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { empleados.map((empleado, index) => (
                            <tr key={ empleado.id }>
                            <td>{ index + 1 }</td>
                            <td>{ empleado.nombreEmpleado }</td>
                            <td>{ empleado.rolEmpleado }</td>
                            <td>{ empleado.tipoEmpleado }</td>
                            <td>
                                <Link to={`/edit/${empleado.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteEmpleado(empleado.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default EmpleadoList