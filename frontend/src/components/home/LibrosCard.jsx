/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/pi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { BiUserCircle } from "react-icons/bi";
// import { MdOutlineDelete } from "react-icons/md";
import LibroSingleCard from "./LibroSingleCard";

const LibrosCard = ({ libros }) => {
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{libros.map((item) => (
				<LibroSingleCard key={item._id} libro={item} />
			))}
		</div>
	);
};

export default LibrosCard;
