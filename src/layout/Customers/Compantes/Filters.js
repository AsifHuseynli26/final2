import React from "react";

function Filters({ state, setState, newArray, loadData }) {
  const [showFilters, setShowFilters] = React.useState(false);
  const [checkBoxs, setCheckBox] = React.useState(false);
  const handleCheckBoxs = (e) => {
    if (e.target.checked) {
      if (state.keyLists.length > 0) {
        const boxs = [
          ...state.checkItems,
          ...state.keyLists.filter((item) => {
            state.checkItems.map((b) => b !== b);
          }),
        ];
        setState({ keyLists: [...boxs] });
      } else {
        state.keyLists.push([...state.checkItems]);
        setState({ keyLists: [...state.keyLists] });
      }
    } else {
      let newArray = state.keyLists.splice(state.keyLists.length);
      setState({ keyLists: [...newArray] });
    }
  };

  const allDelete = () => {
    newArray.map((item) => {
      postData(item);
    });
  };

  async function postData(id) {
    const response = await fetch(`http://localhost:3000/Users/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
    // loadData()
    return response.json();
  }

  const refreshPage = () => {
    setState({ refreshBnt: true });
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {newArray.length > 0 ? (
              <div onClick={allDelete} className="col-auto">
                <button className="deteBtn universalFiltersClass">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            ) : (
              <div onClick={refreshPage} className="col-auto">
                <button className="refresbtn universalFiltersClass">
                  <i className=" bi bi-arrow-clockwise  "></i>
                </button>
              </div>
            )}

            <div className="col-7">
              <form className="inputconten universalFiltersClass">
                <i class="bi bi-search"></i>
                <input
                  onChange={(e) => setState({ filterName: e.target.value })}
                  placeholder="Name "
                />
              </form>
            </div>
            <div className="col-auto ms-auto boxsmain">
              <button
                onClick={() => setCheckBox(!checkBoxs)}
                className="columns universalFiltersClass"
              >
                <i class="bi bi-sliders2-vertical "></i>
                <span className="mx-2">Columns</span>
                <i class="bi bi-chevron-down"></i>
                <div
                  className={`${
                    checkBoxs ? "checkboxcontaineractive" : "checkboxcontainer"
                  }`}
                >
                  <div className="colmn-data">
                    <label> All</label>
                    <input
                      onChange={handleCheckBoxs}
                      checked={
                        state.keyLists.length == state.checkItems.length &&
                        !state.keyLists.length == 0
                          ? true
                          : false
                      }
                      type="checkbox"
                    />
                  </div>
                  {state.checkItems.map((box, index) => (
                    <div key={index} className="colmn-data">
                      <label>{box}</label>
                      <input
                        type="checkbox"
                        checked={state.keyLists.includes(box) ? true : false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            state.keyLists.splice(index, 0, box);
                            setState({ keyLists: [...state.keyLists] });
                          } else {
                            setState({
                              keyLists: state.keyLists.filter(
                                (check) => check !== box
                              ),
                            });
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </button>
            </div>
            <div
              onClick={() => setShowFilters(!showFilters)}
              className="col-auto"
            >
              <button className="universalFiltersClass columns ">
                <i class="bi bi-funnel "></i>
                <span>Filters</span>
              </button>
            </div>
            <div className="col-1 ">
              <button
                onClick={() => setState({ showModal: !state.showModal })}
                className="universalFiltersClass addclass"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: (showFilters && "block") || "none",
          }}
          className={`col-11 ${showFilters && `hiddenFilters`} `}
        >
          <div className="row py-3">
            <div className="col-3">
              <form className="inputconten universalFiltersClass w-100">
                <i class="bi bi-search"></i>
                <input
                  onChange={(e) => setState({ filterEmail: e.target.value })}
                  placeholder="Email"
                />
              </form>
            </div>
            <div className="col-3">
              <form className="inputconten universalFiltersClass w-100">
                <i class="bi bi-search"></i>
                <input
                  onChange={(e) => setState({ filterLocation: e.target.value })}
                  placeholder="Loaction "
                />
              </form>
            </div>
            <div className="col-3">
              <form className="inputconten universalFiltersClass w-100">
                <i class="bi bi-search"></i>
                <input
                  onChange={(e) => setState({ filterPhone: e.target.value })}
                  placeholder="Phone "
                />
              </form>
            </div>
            <div className="col-3">
              <form className="inputconten universalFiltersClass w-100">
                <i class="bi bi-search"></i>
                <input
                  onChange={(e) => setState({ filterOrders: e.target.value })}
                  placeholder="Total Orders "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
