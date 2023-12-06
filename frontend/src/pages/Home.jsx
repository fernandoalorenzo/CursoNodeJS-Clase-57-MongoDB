/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LibrosTable from "../components/home/LibrosTable";
import { useSnackbar } from "notistack";

const Home = () => {
  const [libros, setLibros] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchLibros = async () => {
    try {
      const response = await fetch("http://localhost:5000/libros");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setLibros(data.data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error", { variant: "error" });
    }
  }

  useEffect(() => {
    fetchLibros();
  }, []);

  return (
		<>
      <div className="container container-fluid w-75">
        <div className="row">
          
          <h1 className="text-center">CRUD de Libros</h1>
        </div>
        <div className="d-flex justify-content-end mb-3">
          <Link
            className="btn btn-primary align-self-end"
            to="/libros/create">
            <i className="fa-regular fa-square-plus"></i>
          </Link>
        </div>
        <div className="row">
          <LibrosTable libros={libros} />
        </div>
			</div>
		</>
  );
};

export default Home;
