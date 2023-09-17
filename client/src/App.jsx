import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Team from "./components/Team";
import FormEditProduct from "./components/FormEditProduct";
import FormProduct from "./components/formproduct";
//import ReactPaginate from "react-paginate";

function App() {
  // const [items, setItems] = useState();

  // const handlePageClick = (data) => {
  //   console.log(data.selected);
  // };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormProduct />} />
        <Route path="/team" element={<Team />} />
        <Route path="/eval" element={<Home />} />
        <Route path="edit/:id" element={<FormEditProduct />} />
      </Routes>
      {/* <div className="mt-9">
        <ReactPaginate
          prevousLabel={"Prevous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
