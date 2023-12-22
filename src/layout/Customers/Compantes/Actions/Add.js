import React, { useEffect } from "react";
import CustomModal from "../../../../compantes/Modal/CustomModal";
import Swal from "sweetalert2";

function Add({ state, setState, loadData, stateData, setStateData }) {
  // const Id = uuid();

  const saveData = () => {
    async function saveUser() {
      const response = await fetch("http://localhost:3000/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: stateData.name,
          email: stateData.email,
          location: stateData.location,
          phone: stateData.phone,
          total_spend: stateData.totalSpend,
          total_orders: stateData.totalOrders,
          // id: Id,
        }),
      });
      loadData();
      // setStateData({ name: "" });  

      setState({ showModal: false });

      return response;
    }
    return saveUser();
  };
  useEffect(() => {
    setStateData({ name: "" });
  }, [state.showModal]);

  return (
    <div
      className="modalbg"
      // onClick={(e) => setState({ showModal: false })}
      style={{
        display: state.showModal ? "block" : "none",
      }}
    >
      <CustomModal
        className="addmodal"
        state={state}
        title="Add"
        button={
          <button
            onClick={() => setState({ showModal: false })}
            className="btn btn-danger"
          >
            Close
          </button>
        }
        buttonSave={
          <button
            onClick={() => saveData()}
            className="btn btn-success mt-4 ms-2"
          >
            Save
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
                    onChange={(e) => setStateData({ name: e.target.value })}
                    // onChange={(e) => setName(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Email</label>
                  <input
                    onChange={(e) => setStateData({ email: e.target.value })}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Location</label>
                  <input
                    onChange={(e) => setStateData({ location: e.target.value })}
                    // onChange={(e) => setLocation(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Phone</label>
                  <input
                    onChange={(e) => setStateData({ phone: e.target.value })}
                    // onChange={(e) => setPhone(e.target.value)}
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Total spend</label>
                  <input
                    onChange={
                      (e) => setStateData({ totalSpend: e.target.value })
                      // setTotalSpend(e.target.value)
                    }
                    className="form-control "
                  />
                </div>
                <div className="add-inputs col-6  mt-4 ">
                  <label>Total orders</label>
                  <input
                    onChange={
                      // (e) => setTotalOrders(e.target.value)
                      (e) => setStateData({ totalOrders: e.target.value })
                    }
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

export default Add;
