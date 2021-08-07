import React, {useState} from "react";
import SimpleModal from "./SimpleModal";

import "./SideBar.css";
import SideBarForm from "./SideBarForm";
import InfoButtons from "./InfoButtons";
import MediaCard from "./MediaCard";

import ChartPie from "./ChartPie";

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="sideBar">
      <ChartPie />
      <div className="title">
        <SimpleModal open={open} setOpen={setOpen} />
        <h4>
          გაანგარიშების ინსტრუქცია{" "}
          <i className="fas fa-info-circle" onClick={handleOpen}></i>
        </h4>
        <p>დროის პერიოდი</p>
      </div>
      <SideBarForm />
      <InfoButtons />
      <MediaCard />
    </div>
  );
}

export default SideBar;
