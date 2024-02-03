import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  //useParams arama parametrelerini yonetmemizi saglar
  // geriye dizi icerisinde iki eleman dondurur
  // 1- urldeki arama parametreleri
  // 2- bunlari degistirmeye yarayan methot
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    //eklenecek parametreyi belirle
    searchParams.set("sirala", e.target.value);
    // url'yi guncelle
    setSearchParams(searchParams);
  };
  const handleCategory = (e) => {
    // Set the category parameter
    searchParams.set("kategori", e.target.value);
    // Update the URL
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //eklenecek parametreyi belirle
    searchParams.set("aramaTerimi", e.target[0].value);
    // url'yi guncelle
    setSearchParams(searchParams);
  };
  return (
    <div className=" mt-4 gap-5 d-flex justify-content-between align-items-center">
      <div className=" d-flex align-items-center gap-4">
        <label> sirala</label>
        <select onChange={handleChange} className="form-select ">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <select onChange={handleCategory} className="form-select w-25">
        <option value="">Tüm Kategoriler</option>
        <option value="Roman">Roman</option>
        <option value="Hikaye">Hikaye</option>
        <option value="Siir">Şiir</option>
      </select>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="Kitap ismi giriniz"
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
