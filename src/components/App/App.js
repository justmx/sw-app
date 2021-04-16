import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople, clearAllSw } from "../../redux/sw-reducer";
// import "./App.scss";
import SwTableSection from "../SwTable/SwTable";
import DetailSection from "../DetailSection/DetailSection";

function App() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const person = useSelector((state) => state.swReducer.selectedPerson);

  useEffect(() => {
    dispatch(getPeople(page));
    return () => dispatch(clearAllSw);
  }, [page, dispatch]);

  const nextPage = () => setPage(page + 1);
  const previouPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="swap-page">
      <SwTableSection nextPage={nextPage} previouPage={previouPage} />
      <DetailSection person={person} />
    </div>
  );
}

export default App;
