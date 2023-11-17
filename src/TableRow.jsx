import React from "react";
const TableRow = (props) => {
  const { days } = props;
  return (
    <tr>
      {days.map((day, index) => {
        return (
          
          //<div key={daily} className="list-row">
            <th>{day}</th>
          //</div>
        );
      })}
    </tr>
  )
}
export default TableRow