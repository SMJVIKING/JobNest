import { useState } from "react";
import RHFSelect from "../../ui/RHFselect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { TagsInput } from 'react-tag-input-component';
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
    // edit project :
    const { isEditing, editProject } = useEditProject();
    const { _id: editId } = projectToEdit;
    const isEditSession = Boolean(editId);

    const { title, description, category, budget, deadline, tags: prevTags } = projectToEdit;

    let editValues = {};
    if (isEditSession) {
        editValues = {
            title,
            description,
            budget,
            category: category._id,
        }
    }

    // ----------------------------------------------------------------------------
    // create project :
    const [tags, setTags] = useState(prevTags || []);
    const [date, setDate] = useState(new Date(deadline || ""));
    const { categories } = useCategories();
    const { isCreating, createProject } = useCreateProject();
    const { register, reset, formState: { errors }, handleSubmit } = useForm({ defaultValues: editValues });
  
    // ----------------------------------------------------------------------------
    // create and edit :
    const onSubmit = (data) => {
        const newProject = { ...data, deadline: new Date(date).toISOString(), tags };

        if (isEditSession) {
            editProject({ id: editId, newProject }, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            });

        } else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="عنوان پروژه"
                name="title"
                type="text"
                register={register}
                required
                validationSchema={
                    {
                        required: "عنوان ضروری است",
                        minLength: {
                            value: 8,
                            message: "حداقل 8 کاراکتر وارد کنید",
                        }
                    }
                }
                errors={errors}
            />
            <TextField
                label="توضیحات"
                name="description"
                type="text"
                register={register}
                required
                validationSchema={
                    {
                        required: "توضیحات ضروری است",
                        minLength: {
                            value: 15,
                            message: "حداقل 15 کاراکتر وارد کنید",
                        }
                    }
                }
                errors={errors}
            />
            <TextField
                label="بودجه"
                name="budget"
                type="text"
                register={register}
                required
                validationSchema={
                    {
                        required: "بودجه ضروری است",
                    }
                }
                errors={errors}
            />

            <RHFSelect
                name="category"
                label="دسته بندی"
                register={register}
                required
                options={categories}
            />

            <div>
                <label className="mb-2 block text-secondary-700">تگ</label>
                <TagsInput
                    value={tags}
                    onChange={setTags}
                    name="tags"
                />
            </div>

            <DatePickerField date={date} setDate={setDate} label="ددلاین" />

            <div className="!mt-8">{
                isCreating ?
                    <Loading />
                    :
                    <button
                        type="submit"
                        className="btn btn--primary w-full">تایید</button>
            }
            </div>
        </form>
    );
}

export default CreateProjectForm;

// register replace instead => value & onChange