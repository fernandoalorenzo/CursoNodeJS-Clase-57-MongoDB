// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateLibros = () => {
	const [titulo, setTitulo] = useState("");
	const [autor, setAutor] = useState("");
	const [genero, setGenero] = useState("");
	const [publicacion, setPublicacion] = useState("");
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const handleSaveLibro = () => {
		const data = {
			titulo,
			autor,
			genero,
			publicacion,
		};
		axios
			.post("http://localhost:5000/libros", data)
			.then(() => {
				enqueueSnackbar("Operación realizada exitosamente!", {
					variant: "success",
				});
				navigate("/");
			})
			.catch((error) => {
				enqueueSnackbar("Error", { variant: "error" });
				console.log(error);
			});
	};

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Agregar Libro</h1>
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Título</label>
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
						Publicación
					</label>
					<input
						type="text"
						value={publicacion}
						onChange={(e) => setPublicacion(e.target.value)}
						className="border-2 border-gray-500 px-4 py-2 w-full"
					/>
				</div>
				<button
					className="p-2 bg-sky-300 m-8"
					onClick={handleSaveLibro}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default CreateLibros;
