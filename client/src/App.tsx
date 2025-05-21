import Button from "./components/Button";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="">
      <Topbar />
      <div className="bg-[#162E5B] text-white font-poppins w-full h-[92.5dvh]">
        Some Content here <Button />
      </div>
    </div>
  );
}

export default App;
