// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditLibro = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [publicacion, setPublicacion] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/libros/${id}`)
      .then((response) => {
        setTitulo(response.data.titulo);
        setAutor(response.data.autor);
        setGenero(response.data.genero);
        setPublicacion(response.data.publicacion);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Ha ocurrido un error. Verifique la consola.");
        console.log(error);
      });
  }, [id]);
  const handleEditLibro = () => {
    const data = {
      titulo,
      autor,
      genero,
      publicacion,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/libros/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Libro modificado", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened, Please check console!");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Modificar Libro</h1>
			{loading ? <Spinner /> : ""}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Titulo</label>
					<input
						type="text"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2 w-full"
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Autor</label>
					<input
						type="text"
						value={autor}
						onChange={(e) => setAutor(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2 w-full"
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Género</label>
					<input
						type="text"
						value={genero}
						onChange={(e) => setGenero(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2 w-full"
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">
						Año de Publicación
					</label>
					<input
						type="text"
						value={publicacion}
						onChange={(e) => setPublicacion(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2 w-full"
					/>
				</div>
				<button className="p-2 bg-sky-300 m-8" onClick={handleEditLibro}>
					Guardar
				</button>
			</div>
		</div>
  );
};

export default EditLibro;
