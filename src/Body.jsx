import React from "react";

const Body = ({ item }) => {
  return (
    <tr>
      <td>{item.startDate}</td>
      <td>{item.endDate}</td>
      <td>{item.month_year}</td>
      <td>
        {item.dateExcluded.length !== 0
          ? item.dateExcluded.map((item) => item + ",")
          : "N/A"}
      </td>
      <td>{item.numberOfDays}</td>
      <td>{item.leadCount}</td>
      <td>{item.drr}</td>
      <td></td>
    </tr>
  );
};

export default Body;
