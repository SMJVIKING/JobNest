import RadioInput from "./RadioInput";

export default function RadioInputGroup({ watch, register, errors, configs }) {
    const { name, options, validationSchema = {} } = configs;
    return (
        <div>
            <div className="flex flex-wrap items-center justify-center gap-x-8">
                {options.map(({ label, value }) => (
                    <RadioInput
                        watch={watch}
                        register={register}
                        errors={errors}
                        key={value}
                        name={name}
                        id={value}
                        value={value}
                        label={label}
                        validationSchema={validationSchema}
                    />
                ))}
            </div>
            {
                errors && errors[name] && (
                    <span className="text-error block text-sm mt-2 flex-1">
                        {errors[name]?.message}
                    </span>
                )
            }
        </div>
    );
}
