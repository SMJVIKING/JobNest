import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import toPersianNumbersWithComma from "../../utils/toPersianNumbersWithComma";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import truncateText from "../../utils/truncateText";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();
console.log("project is:", project);
console.log("project.category is:", project ? project.category : null);
console.log("project.category.title is:", project?.category?.title);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project?.category?.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td><ToggleProjectStatus project={project} /></td>

      <td>
        <div className="flex items-center gap-x-2">
          {/* FRAGMENT: */}

          {/* Edit: */}
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal open={isEditOpen} onClose={(e) => setIsEditOpen(false)} title={`${project.title} ویرایش`}>
              <CreateProjectForm projectToEdit={project} onClose={() => setIsEditOpen(false)} />
            </Modal>
          </>

          {/* Delete: */}
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal open={isDeleteOpen} onClose={(e) => setIsDeleteOpen(false)} title={`حذف ${project.title}`}>
              <ConfirmDelete
                resourceName={project.title}
                onClose={(e) => setIsDeleteOpen(false)}
                onConfirm={() => {
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }}
                disabled={false} />
            </Modal>
          </>

        </div>
      </td>

      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="text-primary-800 h-6 w-6" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;

// نکته: اگه چندتا ارگومان ورودی داشته باشیم اونارو تو
// ی ابجکت میزاریم و پاس میدم ب فانکشن

// نکته: اگه دیدی پروژه داره چندین درخواست اضافی
//  میفرسته سمت بک اند پس اون بخشی باید ب صوزت کال بک مینوشتی رو درست کن =>
//   onConfirm={()=>removeProject(project._id={} {
//     onSuccess: () => setIsDeleteOpen(false)={}
//   })}

//   مثلا اینجا اگه کال بک فانکشن نزاری هزاران درخواست میفرسته سمت بک اند

// نکته: تو بک اند این پروژه تنظیم شده ک پروژه های باز قابل حذف شدن نیستن