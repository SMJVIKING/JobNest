import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
    const [otp, setOtp] = useState("");
    const [time, setTime] = useState(RESEND_TIME);
    const navigate = useNavigate();

    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkOtp
    });

    // const checkOtpHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const { user, message } = await mutateAsync({ phoneNumber, otp });
    //         toast.success(message);

    //         if (user.status !== 2) {
    //             navigate("complete-profile");
    //             toast("پروفایل شما در انتظار تایید است", { icon: "👏🏻" });
    //             return;
    //         }
    //         if (user && user.role === "FREELANCER") navigate("/freelancer");
    //         if (user && user.role === "OWNER") navigate("/owner");
    //         if (user && user.role === "ADMIN") navigate("/admin");

    //     } catch (error) {
    //         toast.error(error?.response?.data?.message);
    //     }
    // }

    const checkOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const { user, message } = await mutateAsync({ phoneNumber, otp });
            toast.success(message);

            if (user.status !== 2) {
                navigate("complete-profile");
                toast("پروفایل شما در انتظار تایید است", { icon: "👏🏻" });
                return;
            }

            if (user.role === "FREELANCER") {
                navigate("/freelancer");
                return;
            }
            if (user.role === "OWNER") {
                navigate("/owner");
                return;
            }
            if (user.role === "ADMIN") {
                navigate("/admin");
                return;
            }

            navigate("/");
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "خطایی رخ داد");
        }
    };


    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
        return () => {
            if (timer) clearInterval(timer);
        }

    }, [time]);


    return (
        <div>
            <button onClick={onBack}>
                <HiArrowRight className="w-6 h-6 text-secondary-500 " />
            </button>
            {otpResponse && (<p>
                {otpResponse?.message}
                <button onClick={onBack}>
                    <CiEdit w-6 h-6 text-primary-900 />
                </button>
            </p>)}
            <div className="mb-4 mt-2 text-secondary-500">
                {time > 0 ?
                    (
                        <p>{time}ثانیه تا ارسال مجدد کد</p>
                    ) : (
                        <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
                    )}
            </div>
            <form className="space-y-8" onSubmit={checkOtpHandler}>
                <p className="font-bold text-secondary-500">کد تایید را وارد کنید</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input type="number" {...props} />}
                    containerStyle="flex justify-center flex-row-reverse gap-x-2 "
                    inputStyle={{
                        outline: "none",
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-400))",
                        borderRadius: "0.5rem",
                    }}
                />
                <div>
                    {
                        isPending ?
                            <Loading />
                            :
                            <button type="submit" className="btn btn--primary w-full">
                                ارسال کد تایید
                            </button>
                    }

                </div>
            </form>
        </div>
    );
}
export default CheckOTPForm;