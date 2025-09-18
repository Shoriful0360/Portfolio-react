const Bubble = ({ size, left, duration, delay }) => {
  return (
    <div
      className="absolute rounded-full bg-purple-400 opacity-50"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animation: `floatBubble ${duration}s ease-in-out ${delay}s infinite`,
      }}
    ></div>
  );
};

export default Bubble;
