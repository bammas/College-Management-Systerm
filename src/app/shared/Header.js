"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa"; 

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  // Fetch the user's name from session storage
  const facultyName = sessionStorage.getItem("facultyName");
  const studentName = sessionStorage.getItem("studentName");
  const userName = facultyName || studentName || "User";

  const handleLogout = () => {
    // Clear session data
    sessionStorage.removeItem("facultyName");
    sessionStorage.removeItem("studentName");

    // Redirect to the signup page
    router.push("/signup");
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
      <h3>College Management System</h3>

      <div className="d-flex align-items-center">
        <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
          <DropdownButton
            variant="link"
            id="profile-dropdown"
            title={<FaUserCircle size={30} className="text-white" />} 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {/* <Dropdown.ItemText>{userName}</Dropdown.ItemText> */}
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
