import axios from 'axios'
import React, { useEffect, useState } from 'react'

const apiClientes ="http://localhost:3100/clientes";
const Table = () => {
	const [clientes,setClientes] = useState([]);
	useEffect(() => {
		listarclientes();
	},[]
	);
	const listarclientes= async () =>{
		const response = await axios.get (apiClientes);
		setClientes(response.data);
		console.log(response.data)
	}
  return (
<table class="table">
	<caption className='caption'>Datos Cliente</caption>
	<thead>
	<tr>
		<th>Tipo Identificacion</th>
		<th>Num Identificacion</th>
		<th>Nombres</th>
		<th>Apellidos</th>
		<th>Fecha De Nacimiento</th>
		<th>Direccion</th>
		<th>Ciudad</th>
		<th>Departamento</th>
		<th>Pais</th>
		<th>Marca</th>
	</tr>
	</thead>
	<tbody>
	{clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.tipoDocumento}</td>
              <td>{cliente.documento}</td>
              <td>{cliente.nombres}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.fechaNacimiento}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.ciudad}</td>
              <td>{cliente.departamento}</td>
              <td>{cliente.pais}</td>
              <td>{cliente.marca}</td>
              
                      
            </tr>
          ))}
	
	</tbody>
	
</table>
  )
}

export default Table