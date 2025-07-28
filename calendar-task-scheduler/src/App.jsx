import { useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React Calendar Task Scheduler</h1>
      <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
    </div>
  );
};

export default App;
