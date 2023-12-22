import React, { useEffect, useReducer } from "react";
import CustomModal from "../../../../compantes/Modal/CustomModal";
import Swal from "sweetalert2";
// import uuid from "react-uuid";

// name,
//   setName,
//   email,
//   setEmail,
//   phone,
//   setPhone,
//   totalOrders,
//   setTotalOrders,
//   location,
//   setLocation,
//   totalSpend,
//   setTotalSpend,
function reducer(state2, action) {
  switch (action.type) {
    case "setName": {
      return {
        ...state2,
        name: action.name,
        newName: action.value,
      };
    }
    case "setEmail": {
      return {
        ...state2,
        email: action.email,
        newEmail: action.value,
      };
    }
    case "setLocation": {
      return {
        ...state2,
        location: action.location,
        newLocation: action.value,
      };
    }
    case "setPhone": {
      return {
        ...state2,
        phone: action.phone,
        newPhone: action.value,
      };
    }
    case "setTotalSpend": {
      return {
        ...state2,
        totalSpend: action.totalSpend,
        newTotalSpend: action.value,
      };
    }
    case "setTotalOrders": {
      return {
        ...state2,
        totalOrders: action.totalOrders,
        newTotalOrders: action.value,
      };
    }
  }
}

function Edit({ state, setState, myData, stateData, setStateData, loadData }) {
  // const Id = uuid();

  const [state2, dispatch] = useReducer(reducer, {
    name: "",
  });

  // const [newname, setNewname] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [location, setLocation] = React.useState("");
  // const [phone, setPhone] = React.useState("");
  // const [totalSpend, setTotalSpend] = React.useState("");
  // const [totalOrders, setTotalOrders] = React.useState("");

  const DataSave = (id) => {
    async function postData() {
      const response = await fetch(`http://localhost:3000/Users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: state2.newName,
          email: state2.newEmail,
          location: state2.newLocation,
          phone: state2.newPhone,
          total_spend: state2.newTotalSpend,
          total_orders: state2.newTotalOrders,
          // id: Id,
        }),
      });
      loadData();
      setState({ showEditModal: false });
      return response.json();
    }
    return postData();
  };
  useEffect(() => {
    // setName(myData.name);
    // setEmail(myData.email);
    // setLocation(myData.location);
    // setPhone(myData.phone);
    // setTotalSpend(myData.totalSpend);
    // setTotalOrders(myData.totalOrders);

    // setState({ name: stateData.name });
    dispatch({
      type: "setName",
      name: myData.name,
    });
    dispatch({
      type: "setEmail",
      email: myData.email,
    });
    dispatch({
      type: "setLocation",
      location: myData.location,
    });
    dispatch({
      type: "setPhone",
      phone: myData.phone,
    });
    dispatch({
      type: "setTotalSpend",
      totalSpend: myData.total_spend,
    });
    dispatch({
      type: "setTotalOrders",
      totalOrders: myData.total_orders,
    });
  }, [state.showEditModal, myData]);

  return (
    <div
      className="modalbg"
      // onClick={(e) => setState({ showEditModal: false })}
      style={{
        display: state.showEditModal ? "block" : "none",
      }}
    >
      <CustomModal
        title="Edit"
        button={
          <button
            onClick={() => setState({ showEditModal: false })}
            className="btn btn-danger"
          >
            Close
          </button>
        }
        buttonSave={
          <button
            onClick={() => DataSave(myData.id)}
            className="btn btn-success mt-4 ms-2"
          >
            Save2
          </button>
        }
        content={
          <div>
            {" "}
            <div>
              <fotm className="row container">
                <div className="add-inputs col-6 mt-4  ">
                  <label>Name</label>
                  <input
                    value={state2.name}
                    onChange={(e) =>
                      dispatch({
                        type: "setName",
                        value: e.target.value,
                      })
                    }
                    // value={myData.name}
                    // onChange={(e) => setName(e.target.value)}
                    // onChange={(e) => setStateData({ name: e.target.value })}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Email</label>
                  <input
                    value={state2.email}
                    onChange={(e) =>
                      dispatch({
                        type: "setEmail",
                        value: e.target.value,
                      })
                    }
                    className="form-control "

                    // value={stateData.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // onChange={(e) => setStateData({ email: e.target.value })}
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Location</label>
                  <input
                    value={state2.location}
                    onChange={(e) =>
                      dispatch({
                        type: "setLocation",
                        value: e.target.value,
                      })
                    }
                    // onChange={(e) => setStateData({ location: e.target.value })}
                    // value={stateData.location}
                    // onChange={(e) => setLocation(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Phone</label>
                  <input
                    value={state2.phone}
                    onChange={(e) =>
                      dispatch({
                        type: "setPhone",
                        value: e.target.value,
                      })
                    }
                    // onChange={(e) => setStateData({ phone: e.target.value })}
                    // value={stateData.phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Total spend</label>
                  <input
                    value={state2.totalSpend}
                    onChange={(e) =>
                      dispatch({
                        type: "setTotalSpend",
                        value: e.target.value,
                      })
                    }
                    // onChange={(e) =>
                    //   setStateData({ totalSpend: e.target.value })
                    // }
                    // value={stateData.totalSpend}
                    // onChange={(e) => setTotalSpend(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Total orders</label>
                  <input
                    value={state2.totalOrders}
                    onChange={(e) =>
                      dispatch({
                        type: "setTotalOrders",
                        value: e.target.value,
                      })
                    }
                    // onChange={(e) =>
                    //   setStateData({ totalOrders: e.target.value })
                    // }
                    // value={stateData.totalOrders}
                    // onChange={(e) => setTotalOrders(e.target.value)}
                    className="form-control "
                  />
                </div>
              </fotm>
            </div>
          </div>
        }
        state={state}
        setState={setState}
      />
    </div>
  );
}

export default Edit;
