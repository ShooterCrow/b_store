import React, {useState, useEffect} from 'react'
import axios from "axios";
import spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/books")
    .then(response => {
      setBooks(response.data.data)
      console.log(books)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home