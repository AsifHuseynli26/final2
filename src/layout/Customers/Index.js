import React, { useEffect, useReducer } from "react";
import Filters from "./Compantes/Filters";
import "../../assests/Customers.css";
import Table from "./Compantes/Table";
import Add from "./Compantes/Actions/Add";
function Index() {
  const [state, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      keyLists: [],
      checkItems: [],
      showModal: false,
      showEditModal: false,
      refreshBnt: false,
      filterName: "",
      filterEmail: "",
      filterLocation: "",
      filterPhone: "",
      filterOrders: "",
    }
  );

  const [users, setUsers] = React.useState([]);
  const [newArray, setNewArray] = React.useState([]);

  console.log(state.recordsPerPage);

  const Users = async () => {
    const res = await fetch("http://localhost:3000/Users");
    if (res.ok && res.status === 200) {
      const data = await res.json();
      setUsers(data);
      setState({ keyLists: Object.keys(data[0]) });
      setState({ checkItems: Object.keys(data[0]) });
    } else {
      alert("asas");
    }
  };

  useEffect(() => {}, [state.showModal]);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Filters
            loadData={Users}
            state={state}
            setState={setState}
            newArray={newArray}
            setNewArray={setNewArray}
          />
        </div>
        <div className="col-12">
          <Table
            loadData={Users}
            newArray={newArray}
            setNewArray={setNewArray}
            state={state}
            setState={setState}
            users={users}
            setUsers={setUsers}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
