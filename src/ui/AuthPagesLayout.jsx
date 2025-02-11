import { Outlet } from "react-router-dom";
import logo from "/assets/logo.svg";

function AuthPagesLayout() {
  return (
    <div className="bg-dark min-h-screen px-4  py-8 flex justify-start items-center flex-col gap-12 lg:gap-20 lg:justify-center">
      <img src={logo} alt="Logo Icon" />
      <Outlet />
    </div>
  );
}

export default AuthPagesLayout;
