import React from "react";

function Table() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Action </th>
          </tr>
        </thead>
        {/* <tbody>
          {records.map((data, index) => (
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
                  <div>
                    <form>
                      <input
                        type="checkbox"
                        value={data.id}
                        checked={data.id.newArray}
                        // onChange={(e) => CheckBoxHandler(e, data)}
                      />
                    </form>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default Table;
