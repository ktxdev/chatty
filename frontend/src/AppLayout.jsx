import Sidebar from "./Sidebar";
import Content from "./Content";

function AppLayout() {
  return (
    <div className="w-full h-full absolute top-8 flex justify-center">
      <div className="bg-slate-50 h-[95%] w-[95%] max-w-[1560px] overflow-hidden flex ">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default AppLayout;
