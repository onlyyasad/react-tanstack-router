import { Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const PrivateLayout = () => {
  const navigate = useNavigate();
//   const isAuthenticated = localStorage.getItem("token"); // Example authentication check
  const isAuthenticated = true; // Example authentication check

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="private-layout">
      <h1>Private Area</h1>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
