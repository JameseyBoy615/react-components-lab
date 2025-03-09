import "./WeatherForecast.css";

const WeatherForecast = (props) => {
    const { day, img, imgAlt, conditions, time } = props

  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p>
        <span>Conditions: {conditions} </span>
      </p>
      <p>
        <span>Time: {time}</span>
      </p>
    </div>
  );
};

export default WeatherForecast;
