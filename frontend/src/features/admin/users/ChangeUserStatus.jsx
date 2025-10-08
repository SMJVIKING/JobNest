import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import Loading from "../../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({userId,onClose}) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data}, //{userId,data:{status:0,1,2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      }
    );
  };
    return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          register={register}
          options={options}
          label="تغییر وضعیت"
          required
        />
        <div className="!mb-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="mt-8 btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
    )
}

export default ChangeUserStatus;
