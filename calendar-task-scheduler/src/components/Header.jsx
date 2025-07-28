import dayjs from "dayjs";

const Header = ({ currentMonth, setCurrentMonth }) => {
  const handlePrev = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNext = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={handlePrev}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ←
      </button>

      <h2 className="text-xl font-semibold">
        {currentMonth.format("MMMM YYYY")}
      </h2>

      <button
        onClick={handleNext}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
      >
        →
      </button>
    </div>
  );
};

export default Header;
