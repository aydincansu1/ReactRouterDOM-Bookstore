import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [book, setBook] = useState(null);

  //useNavigate kurulumu
  const navigate = useNavigate();
  //1) urldeki parametreyi al
  const { id } = useParams();

  //2) idsine gore kitabin bilgilerini al
  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id} `)
      .then((res) => setBook(res.data))
      .catch((err) => {
        //urunun bilgisi apiden gelmediyse
        //kullaniciyi 404 sayfasina yonlendir
        //yonlendirirken hata kodu verisinide aktar
        navigate("/undefined", { state: err.response.status });
      });
  }, []);
  return (
    <div>
      {/* kitap gelmediyse */}
      {!book && <p>Yükleniyor...</p>}

      {/* kitap geldiyse */}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="rounded img-fluid shadow"
              style={{ maxHeight: "400px" }}
              src={book.image}
              alt={book.title}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookInfo title={"Yazar :"} value={book.author} />
              <BookInfo title={"Açıklama :"} value={book.description} />
              <BookInfo title={"Yıl :"} value={book.year} />
              <BookInfo title={"Sayfa Sayısı :"} value={book.page} />
              <BookInfo title={"Kategorisi :"} value={book.category} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

//bu dosyadaki 2. companent

const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
