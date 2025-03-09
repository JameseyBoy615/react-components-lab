const WeatherData = ({ conditionData, timeData }) => {
  return (
    <div>
      <p>
        <span>Conditions: {conditionData}</span>
      </p>
      <p>
        <span>Time: {timeData}</span>
      </p>
    </div>
  );
};

export default WeatherData;
