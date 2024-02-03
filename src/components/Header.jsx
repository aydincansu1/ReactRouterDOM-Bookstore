import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid ">
        <span className="navbar-brand mb-0 h1 fs-3 ">
          <Link className="nav-link active" to="/">
            Kitap Kurdu
          </Link>
        </span>
        <div className="d-flex gap-2">
          <Link to="/">Anasayfa</Link>
          <Link to="/urunler">Urunler</Link>
          <Link to="/kategori">Kategori</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
