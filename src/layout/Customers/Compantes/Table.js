import React, { useReducer, useEffect, useState } from "react";
// import userData from "../../../Json/db.json";
import Add from "./Actions/Add";
import Edit from "./Actions/Edit";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Table({ state, setState, users, setUsers, newArray, setNewArray,loadData}) {
  const [stateData, setStateData] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      name: "",
      email: "",
      location: "",
      phone: "",
      totalSpend: "",
      totalOrders: "",
    }
  );

  const [myData, setMyData] = React.useState({});
  const [load, setLoad] = useState(true);


  const [showPageLimits, setShowPageLimits] = useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage, setRecordPerPage] = useState(10);
  
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const CheckBoxHandler = (e, data) => {
    const { value, checked } = e.target;
    if (checked) {
      setNewArray(() => [...newArray, value]);
    } else {
      setNewArray(() => [...newArray.filter((c) => c !== value)]);
    }
  };

  useEffect(() => {
    state.refreshBnt && setLoad(true);
    loadData()
    setTimeout(() => {
      setState({ refreshBnt: false });
      setLoad(false);
    }, 1000);

    // state.refreshBnt && setState({ load: false });
    // setTimeout(() => {
    //   setState({ refreshBnt: false });
    //   setState({ load: false });
    // }, 1000);
    // Users();
  }, [currentPage, state.refreshBnt]);
  return (
    <div>
      <Add
        loadData={loadData}
        state={state}
        setState={setState}
        stateData={stateData}
        setStateData={setStateData}
      />
      <Edit
        loadData={loadData}
        users={users}
        state={state}
        setState={setState}
        myData={myData}
        stateData={stateData}
        setStateData={setStateData}
      />

      <table className="table">
        <thead>
          <tr>
            {state.keyLists.map((item) => (
              <th>{item}</th>
            ))}
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {records
            .filter((item) => {
              return !state.filterName.toLowerCase()
                ? item
                : item.name.toLowerCase().includes(state.filterName);
            })
            .filter((item) => {
              return !state.filterEmail.toLowerCase()
                ? item
                : item.email.toLowerCase().includes(state.filterEmail);
            })
            .filter((item) => {
              return !state.filterLocation.toLowerCase()
                ? item
                : item.location.toLowerCase().includes(state.filterLocation);
            })
            .filter((item) => {
              return !state.filterPhone.toLowerCase()
                ? item
                : item.phone.toLowerCase().includes(state.filterPhone);
            })
            .filter((item) => {
              return !state.filterOrders.toString()
                ? item
                : item.total_orders.toString().includes(state.filterOrders);
            })
            .map((data, index) => (
              <tr key={index}>
                {state.keyLists.map((datausers) =>
                  load ? (
                    <td>
                      <Skeleton className="skeleteonLoad" duration={1} />
                    </td>
                  ) : (
                    <td>{data[datausers]}</td>
                  )
                )}
                {load ? (
                  <td>
                    <Skeleton className="skeleteonLoad" duration={1} />
                  </td>
                ) : (
                  <td className="d-flex contactions">
                    <div
                      onClick={() => {
                        setState({ showEditModal: true });
                        setMyData(data);
                      }}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </div>
                    <div>
                      <form>
                        <input
                          type="checkbox"
                          value={data.id}
                          checked={data.id.newArray}
                          onChange={(e) => CheckBoxHandler(e, data)}
                        />
                      </form>
                    </div>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex contpaginations">
        <button
          onClick={() => setShowPageLimits(!showPageLimits)}
          className="limitbtn"
        >
          <div className="chuselimits">
            <i
              class={`${
                showPageLimits ? "bi bi-chevron-up" : "bi bi-chevron-down "
              }`}
            ></i>
            <p>{recordsPerPage}</p>
          </div>
          <div
            className={`${showPageLimits ? "activelimit" : "inactivelimit"} `}
          >
            <h5 onClick={() => setRecordPerPage(5)}>5</h5>
            <h5 onClick={() => setRecordPerPage(10)}>10</h5>
            <h5 onClick={() => setRecordPerPage(20)}>20</h5>
            <h5 onClick={() => setRecordPerPage(50)}>50</h5>
          </div>
        </button>
        <nav>
          <ul className="pagination">
            <li
              style={{
                display: currentPage > 1 ? "" : "none",
              }}
              className="page-item"
            >
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page  -item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li
              style={{
                display: currentPage > 9 ? "none" : "block",
              }}
              className="page-item"
            >
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Table;
