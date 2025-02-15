import { Outlet } from "react-router-dom";

function ApplicationLayout() {
  return (
    <div className="bg-dark min-h-screen p-8  gap-9 text-white">
      {/* <div className="text-xl">Sidebar</div> */}
      <Outlet />
    </div>
  );
}

export default ApplicationLayout;
