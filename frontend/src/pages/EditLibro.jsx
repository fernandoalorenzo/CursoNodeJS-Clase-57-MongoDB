// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditLibro = () => {
	const [titulo, setTitulo] = useState("");
	const [autor, setAutor] = useState("");
	const [genero, setGenero] = useState("");
	const [publicacion, setPublicacion] = useState("");
		const navigate = useNavigate();
	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	useEffect(() => {
		axios
			.get(`http://localhost:5000/libros/${id}`)
			.then((response) => {
				setTitulo(response.data.titulo);
				setAutor(response.data.autor);
				setGenero(response.data.genero);
				setPublicacion(response.data.publicacion);
			})
			.catch((error) => {
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
		axios
			.put(`http://localhost:5000/libros/${id}`, data)
			.then(() => {
				enqueueSnackbar("Libro modificado", { variant: "success" });
				navigate("/");
			})
			.catch((error) => {
				// alert("An error happened, Please check console!");
				enqueueSnackbar("Error", { variant: "error" });
				console.log(error);
			});
	};

	return (
		<div className="container w-50">
			<div className="row">
				<h1 className="text-center">Editar Usuario</h1>
			</div>
			<div className="row g-2 my-3">
				<div className="col-6">
					<label htmlFor="name" className="form-label">
						Titulo
					</label>
					<input
						className="form-control"
						name="Titulo"
						type="text"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
					/>
				</div>
				<div className="col-6">
					<label htmlFor="name" className="form-label">
						Autor
					</label>
					<input
						className="form-control"
						name="autor"
						type="text"
						value={autor}
						onChange={(e) => setAutor(e.target.value)}
					/>
				</div>
			</div>
			<div className="row g-3 my-3">
				<div className="col-6">
					<label htmlFor="name" className="form-label">
						Género
					</label>
					<input
						className="form-control"
						name="genero"
						type="text"
						value={genero}
						onChange={(e) => setGenero(e.target.value)}
					/>
				</div>
				<div className="col-6">
					<label htmlFor="name" className="form-label">
						Año de Publicación
					</label>
					<input
						className="form-control"
						name="publicacion"
						type="text"
						value={publicacion}
						onChange={(e) => setPublicacion(e.target.value)}
					/>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn btn-primary"
          onClick={handleEditLibro}>
          Guardar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => navigate("/")}>
          <i className="fa-solid fa-ban px-2"></i>
          Cancelar
        </button>
      </div>
		</div>
	);
};

export default EditLibro;
