const NumberedList = ({ listOfStops }) => {
  return (
    <ol>
      {listOfStops.map((stop, index) => (
        <li key={index}>{stop}</li>
      ))}
    </ol>
  );
};

export default NumberedList;
