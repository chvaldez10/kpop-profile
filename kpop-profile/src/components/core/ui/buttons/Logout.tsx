"use client"; // This line makes it a Client Component

import { logout } from "@/app/login/actions"; // Import your logout action

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
