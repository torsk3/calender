import React from "react";
import TableRow from "./TableRow";

const Table = () => {

  const week_list = ["日", "月", "火", "水", "木", "金", "土"]
  var blank_list = ["", "", ""]
  var day_list = [...blank_list]
  for (let index = 1; index < 31; index++) {
    day_list = [...day_list, index];
  }
  day_list = [...day_list, ...blank_list] 

  var seven_day_list = []
  
  return (
    <table border="1">
      <TableRow days = {week_list}></TableRow>
      {day_list.map((day, index) => {
        seven_day_list = [...seven_day_list, day]
        if (index % 7 === 0){
          seven_day_list = [day];
        }

        if (index % 7 === 6) {
          return (
            <TableRow days = {seven_day_list}></TableRow>
          );
        }

      })}
    </table>
  )
}

export default Table
