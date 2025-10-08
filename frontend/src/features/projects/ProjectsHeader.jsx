import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="font-black text-secondary-700 text0xl">پروژه های شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>

      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
      
    </div>
  );
}

export default ProjectsHeader;
