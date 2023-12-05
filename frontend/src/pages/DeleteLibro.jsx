// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteLibro = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteLibro = () => {
    axios
      .delete(`http://localhost:5000/libros/${id}`)
      .then(() => {
        enqueueSnackbar("Operación realizada exitosamente!", { variant: "success" });
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
      <h1 className="text-3xl my-4">Eliminar Libro</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Está seguro?</h3>
        <button className="p-4 bg-red-600" onClick={handleDeleteLibro}>
          Sí
        </button>
      </div>
    </div>
  );
};

export default DeleteLibro;
