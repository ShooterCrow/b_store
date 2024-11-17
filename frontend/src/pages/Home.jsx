import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.all);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Book List</h1>
          <Link to="/books/create" className="flex align-center ml-auto">
            <MdOutlineAddBox size={24} /> Add Book
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md ">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((x, index) => (
                <tr key={x._id} className="h-8">
                  <td className="text-center border border-slate-600 rounded-md">
                    {index + 1}
                  </td>
                  <td className="text-center border border-slate-600 rounded-md">
                    {x.title}
                  </td>
                  <td className="text-center border border-slate-600 rounded-md max-md:hidden">
                    {x.author}
                  </td>
                  <td className="text-center border border-slate-600 rounded-md max-md:hidden">
                    {x.publishYear}
                  </td>
                  <td className="text-center border border-slate-600 rounded-md">
                    <div className="flex justify-around">
                      <Link
                        className="text-blue-800"
                        to={"/books/details/" + x._id}>
                        <BsInfoCircle />
                      </Link>
                      <Link className="text-green-800" to={"/books/edit/"+x._id}>
                        <AiOutlineEdit />
                      </Link>
                      <Link className="text-red-800" to={"/books/delete/"+x._id}>
                        <MdOutlineDelete />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Home;
