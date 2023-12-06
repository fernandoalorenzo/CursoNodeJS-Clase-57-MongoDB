import mongoose from "mongoose";

const libroSchema = mongoose.Schema(
	{
		titulo: {
			type: String,
			required: true,
		},
		autor: {
			type: String,
			required: true,
		},
		genero: {
			type: String,
			required: false,
		},
		publicacion: {
			type: Date,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

export const Libro = mongoose.model("Libros", libroSchema);
