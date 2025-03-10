interface BlurerBgCircleProps {
  backgroundColor?: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  opacity?: number;
}

const BlurerBgCircle: React.FC<BlurerBgCircleProps> = ({
  backgroundColor = "lime",
  left = 0,
  top = 0,
  width = 200,
  height = 200,
  opacity = 0.5,
}) => {
  return (
    <div
      className="bluredCircle"
      style={{ backgroundColor, left, top, width, height, opacity}}
    ></div>
  );
};

export default BlurerBgCircle;
