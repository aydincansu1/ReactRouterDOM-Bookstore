import axios from "axios";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  //url'deki arama parametrelerine eris
  const order = searchParams.get("sirala");
  const query = searchParams.get("aramaTerimi");
  const category = searchParams.get("kategori");

  //api istegi atarken gonderilecek olan parametreleri belirle
  const options = {
    params: {
      _sort: order === "z-a" ? "-title" : "title",
      category: category,
      q: query,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:3090/books", options)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query, category]);

  return (
    <div className="mx-5 mt-4 h-100">
      <h3>{books?.length} Kitap bulundu</h3>

      <FilterArea />

      <div className="card-container">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
