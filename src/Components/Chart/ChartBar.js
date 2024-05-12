import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeightFill = "0%";

  if (props.maxValue > 0) {
    barHeightFill = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log(barHeightFill);
  }

  return (
    <div className='bar'>
      <div className='bar-inner'>
        <div className='bar-fill' style={{ height: barHeightFill }}></div>
      </div>
      <div className='bar-label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
