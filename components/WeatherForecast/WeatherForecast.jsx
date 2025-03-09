import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>
        <span>Conditions: {props.conditions} </span>
      </p>
      <p>
        <span>Time: {props.time}</span>
      </p>
    </div>
  );
};

export default WeatherForecast;
