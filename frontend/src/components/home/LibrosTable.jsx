/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LibrosTable = ({ libros }) => {
	return (
		<>
      <table className="table table-hover table-sm table-borderless align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">Nº</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Género</th>
            <th scope="col">Fecha de Publicación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro, index) => (
            <tr key={libro._id}>
              <td className="text-start">{index + 1}</td>
              <td className="text-start">
                {libro.titulo}
              </td>
              <td>{libro.autor}</td>
              <td className="text-start">
                {libro.genero}
              </td>
              <td className="text-start">
                {libro.publicacion}
              </td>
              <td>
                {/* <Link
                  className="btn btn-success mx-2"
                  to={`/libros/details/${libro._id}`}>
                </Link> */}
                <Link
                  className="btn btn-warning mx-2"
                  to={`/libros/edit/${libro._id}`}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                <Link
                  className="btn btn-danger mx-2"
                  to={`/libros/delete/${libro._id}`}>
                  <i className="fa-regular fa-trash-can"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
		</>
	);
};

export default LibrosTable;
