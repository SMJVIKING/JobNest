import { useEffect, useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
//  const [phoneNumber, setPhoneNumber] = useState("");
    const [step, setStep] = useState(1);
    const { register, handleSubmit ,getValues} = useForm();
    const { isPending: isSendingOtp, mutateAsync, data: otpResponse } = useMutation({
        mutationFn: getOtp
    });
    const {user} = useUser();
    const navigate=useNavigate();

    // useEffect(()=>{
    //     if (user) navigate("/", {replace:true});
    // },[user,navigate]);

    const sendOtpHandler = async (data) => {
        try {
            const {message} = await mutateAsync(data);
            toast.success(message);
            setStep(2);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm
                    onSubmit={handleSubmit(sendOtpHandler)}
                    isSendingOtp={isSendingOtp}
                    setStep={setStep}
                    register={register}
                    // onSubmit={sendOtpHandler}
                    // phoneNumber={phoneNumber}
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                />
            case 2:
                return <CheckOTPForm
                    onResendOtp={handleSubmit(sendOtpHandler)}
                    phoneNumber={getValues("phoneNumber")}
                    onBack={() => setStep((s) => s - 1)}
                    otpResponse={otpResponse} />
            default:
                return null;
        }
    };

    return <div className="w-full sm:max-w-sm">{renderStep()}</div>
}
export default AuthContainer;