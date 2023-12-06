import express from "express";
import { Libro } from "../models/libroModel.js";

const router = express.Router();

// Route para agregar un nuevo Libro
router.post("/", async (request, response) => {
	try {
		if (
			!request.body.titulo ||
			!request.body.autor ||
			!request.body.genero ||
			!request.body.publicacion
		) {
			return response.status(400).send({
				message: "La operación se completó exitosamente!",
			});
		}

		const nuevoLibro = {
			titulo: request.body.titulo,
			autor: request.body.autor,
			genero: request.body.genero,
			publicacion: request.body.publicacion,
		};

		const libro = await Libro.create(nuevoLibro);

		return response.status(201).send(libro);
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route para obtener todos los libros de la Base de Datos
router.get("/", async (request, response) => {
	try {
		const libros = await Libro.find({});
		return response.status(200).json({
			count: libros.lenght,
			data: libros,
		});
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route para obtener libros de la Base de Datos por id
router.get("/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const libro = await Libro.findById(id);
		return response.status(200).json(libro);
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route para actualizar libros
router.put("/:id", async (request, response) => {
	try {
		if (
			!request.body.titulo ||
			!request.body.autor ||
			!request.body.genero ||
			!request.body.publicacion
		) {
			return response.status(400).send({
				message: "La operación se completó exitosamente!",
			});
		}

		const { id } = request.params;

		const result = await Libro.findByIdAndUpdate(id, request.body);

		if (!result) {
			return response
				.status(404)
				.json({ message: "El libro no fue encontrado!" });
		}
		return response
			.status(200)
			.json({ message: "La operación se completó exitosamente!" });
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route para eliminar un libro
router.delete("/:id", async (request, response) => {
	try {
		const { id } = request.params;

		const result = await Libro.findByIdAndDelete(id);

		if (!result) {
			return response
				.status(404)
				.json({ message: "El libro no fue encontrado!" });
		}
		return response
			.status(200)
			.json({ message: "La operación se completó exitosamente!" });
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

export default router;
