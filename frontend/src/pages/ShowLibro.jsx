// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ShowLibro = () => {
  const [libro, setLibros] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/libros/${id}`)
      .then((response) => {
        setLibros(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Información de Libro</h1>
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
				<div className="my-4">
					<span className="text-xl mr-4 text-gray-500">Id</span>
					<span>{libro._id}</span>
				</div>
				<div className="my-4">
					<span className="text-xl mr-4 text-gray-500">
						Título
					</span>
					<span>{libro.titulo}</span>
				</div>
				<div className="my-4">
					<span className="text-xl mr-4 text-gray-500">
						Autor
					</span>
					<span>{libro.autor}</span>
				</div>
				<div className="my-4">
					<span className="text-xl mr-4 text-gray-500">
						Género
					</span>
					<span>{libro.genero}</span>
				</div>
				<div className="my-4">
					<span className="text-xl mr-4 text-gray-500">
						Año de Publicación
					</span>
					<span>{libro.publicacion}</span>
				</div>
			</div>
		</div>
  );
};

export default ShowLibro;
