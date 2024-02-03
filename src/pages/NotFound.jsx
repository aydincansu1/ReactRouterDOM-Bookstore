import { Link, useLocation } from "react-router-dom";
const NotFound = () => {
  const { state } = useLocation();
  return (
    <div className="container py-6 text-center ">
      <img
        className="img-fluid rounded"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1706549551~exp=1706550151~hmac=b73d5c8c0a24db8f4bc1182a73d3fe46165c1637844fd0b453fd5f8c3a7968d2"
        alt=""
      />
      <p className="my-3 fs-5 text-center">
        Uzgunuz aradiginiz sayfa bulunamadi
      </p>
      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          Anasayfaya{" "}
        </Link>
      </div>
      {state && (
        <p className="fs-3 text-center my-4">
          Hata Kodunu: <span className="badge bg-warning mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
