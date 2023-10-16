import React from "react";

const InputBody = ({
  startDate,
  setStartDate,
  endDate,
  handleEndDateChange,
  dateExcluded,
  handleDataChange,
  numberOfDays,
  leadCount,
  setLeadCount,
  handleClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="empty"
        />
      </td>
      <td>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </td>
      <td>
        {startDate &&
          endDate &&
          startDate.split("-")[1] + "," + startDate.split("-")[0]}
      </td>
      <td>
        <input type="date" onChange={handleDataChange} />
        {dateExcluded.map((item) => item + ",")}
      </td>
      <td>{numberOfDays !== null ? numberOfDays : ""}</td>
      <td>
        <input
          type="number"
          value={leadCount}
          onChange={(e) => setLeadCount(e.target.value)}
        />
      </td>
      <td>{leadCount && numberOfDays && leadCount / numberOfDays}</td>
      <td>
        <button onClick={handleClick}>Save</button>
      </td>
    </tr>
  );
};

export default InputBody;
