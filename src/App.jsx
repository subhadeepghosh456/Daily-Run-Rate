import { useState } from "react";

import "./App.css";
import Body from "./Body";
import InputBody from "./InputBody";
function getDaysDifference(startDate, endDate) {
  // Convert the dates to milliseconds
  const date1_ms = startDate.getTime();
  const date2_ms = endDate.getTime();

  // Calculate the difference in milliseconds
  const difference_ms = date2_ms - date1_ms;

  // Convert the difference to days
  const days_difference = Math.floor(difference_ms / (1000 * 60 * 60 * 24));

  return days_difference;
}

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateExcluded, setDateExcluded] = useState([]);
  const [leadCount, setLeadCount] = useState(0);
  const [data, setData] = useState([]);

  // console.log(startDate.split("-"));

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (
      newEndDate >= startDate &&
      newEndDate.split("-")[1] === startDate.split("-")[1]
    ) {
      setEndDate(newEndDate);
    } else {
      alert(
        "End date can't precede start date and shoud be within same month!!"
      );
    }
  };

  // console.log(dateExcluded);

  const handleDataChange = (e) => {
    const newDate = e.target.value;
    // console.log(newDate);
    if (
      !dateExcluded.includes(newDate) &&
      newDate >= startDate &&
      newDate <= endDate &&
      startDate !== endDate
    ) {
      setDateExcluded([...dateExcluded, newDate]);
    } else {
      alert("Invalid Date!");
    }
  };

  let numberOfDays = null;
  if (startDate && endDate) {
    numberOfDays =
      getDaysDifference(new Date(startDate), new Date(endDate)) +
      1 -
      dateExcluded.length;
    // setDaysCount(numberOfDays);
  }

  const handleClick = () => {
    if (!startDate || !endDate || !leadCount) {
      alert("Some inputs are missing, Fill the form correctly!!");
      return;
    }
    setData([
      ...data,
      {
        id: Date.now(),
        startDate: startDate,
        endDate: endDate,
        dateExcluded: dateExcluded,
        month_year: startDate.split("-")[1] + "," + startDate.split("-")[0],
        numberOfDays: numberOfDays,
        leadCount: leadCount,
        drr: Math.round(leadCount / numberOfDays),
      },
    ]);
    setStartDate("");
    setEndDate("");
    setDateExcluded([]);
    setLeadCount(0);
    console.log(data);
  };

  return (
    <div className="container">
      <table border="1">
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Month,Year</th>
            <th>Dates Excluded</th>
            <th>Number of Days</th>
            <th>Lead Count</th>
            <th>Expected DRR</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>
          <InputBody
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            handleEndDateChange={handleEndDateChange}
            dateExcluded={dateExcluded}
            handleDataChange={handleDataChange}
            numberOfDays={numberOfDays}
            leadCount={leadCount}
            setLeadCount={setLeadCount}
            handleClick={handleClick}
          />
          {data.map((item) => (
            <Body key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
