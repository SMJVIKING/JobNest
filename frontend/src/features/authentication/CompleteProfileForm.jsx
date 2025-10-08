// import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [role, setRole] = useState("");
    const navigate = useNavigate();

    const { isPending, mutateAsync } = useMutation({
        mutationFn: completeProfile
    });
    const CompleteProfileHandler = async (data) => {
        try {
            const { user, message } = await mutateAsync(data);
            toast.success(message);

            if (user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید است", { icon: "👏🏻" });
                return;
            }
            if (user.role === "FREELANCER") navigate("/freelancer");
            if (user.role === "OWNER") navigate("/owner");
            if (user.role === "ADMIN") navigate("/admin");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="flex justify-center pt-10">
            <div className="sm:max-w-sm w-full">
                <form onSubmit={handleSubmit(CompleteProfileHandler)} className="space-y-8">
                    <TextField
                        label="نام و نام خانوادگی"
                        name="name"
                        register={register}
                        validationSchema={{
                            required: "نام و نام خانوادگی ضروری است",
                        }}
                        errors={errors}
                    />
                    <TextField
                        label="ایمیل"
                        name="email"
                        register={register}
                        validationSchema={{
                            required: "ایمیل ضروری است",
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:"ایمیل نا معتبر است",
                            }
                        }}
                        errors={errors}
                    />
                    <RadioInputGroup
                        watch={watch}
                        register={register}
                        errors={errors}
                        configs={{
                            name: "role",
                            validationSchema: {
                                required: "انتخاب نقش ضروری است",
                            },
                            options: [
                                {
                                    value: "OWNER",
                                    label: "کارفرما",
                                },
                                {
                                    value: "FREELANCER",
                                    label: "فریلنسر",
                                },
                            ],

                        }}
                    />

                    <div>
                        {isPending ?
                            <Loading /> :
                            <button type="submit" className="btn btn--primary w-full">
                                تایید
                            </button>}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CompleteProfileForm;