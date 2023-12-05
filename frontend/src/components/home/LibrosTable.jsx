/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const LibrosTable = ({ libros }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Título</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Autor
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Género
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publicación
          </th>
          <th className="border border-slate-600 rounded-md">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro, index) => (
          <tr key={libro._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {libro.titulo}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {libro.autor}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {libro.genero}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {libro.publicacion}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/libros/details/${libro._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/libros/edit/${libro._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/libros/delete/${libro._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LibrosTable;
