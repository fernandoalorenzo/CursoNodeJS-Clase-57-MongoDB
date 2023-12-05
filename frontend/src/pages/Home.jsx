/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import LibrosTable from "../components/home/LibrosTable";
import { useSnackbar } from "notistack";

const Home = () => {
  const [libros, setLibros] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get("http://localhost:5000/libros")
      .then((response) => {
        setLibros(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Listado de Libros</h1>
        <Link to="/libros/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
        <LibrosTable libros={libros} />
    </div>
  );
};

export default Home;
