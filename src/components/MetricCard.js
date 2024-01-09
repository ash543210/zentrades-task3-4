const MetricCard = (props) => {
  return (
    <div
      style={{
        width: "22%",
        borderLeft: "8px solid #7FFFD4",
      }}
      className={"bg-white shadow ps-3 pt-3 fs-5 fw-semibold"}>
      <p className={props.valueColor}>{props.value}</p>
      <p>{props.metric}</p>
    </div>
  );
};

export default MetricCard;
