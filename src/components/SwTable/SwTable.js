import React from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { getPersonDetail } from "../../redux/sw-reducer";
import Pagination from "./Pagination";
import RowItem from "./RowItem";

const SwTableSection = ({ nextPage, previouPage }) => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.swReducer.people);

  const onClick = debounce((person) => {
    dispatch(getPersonDetail(person));
  }, 150);

  return (
    <div className="sw-table-section">
      <h1>Table with list of people</h1>
      <div className="swap-table-container">
        <div className="table">
          <div className="row header blue">
            <div className="cell">Name</div>
            <div className="cell">Height</div>
            <div className="cell">Mass</div>
          </div>
          {people.map((person, i) => {
            return (
              <RowItem
                key={i}
                person={person}
                onClick={() => onClick(person)}
              />
            );
          })}
        </div>
        {people.length > 0 && (
          <Pagination nextPage={nextPage} previouPage={previouPage} />
        )}
      </div>
    </div>
  );
};

export default SwTableSection;
