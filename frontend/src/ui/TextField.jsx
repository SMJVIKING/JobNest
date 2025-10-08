function TextField({ label, name, errors, type = "text", register, required, validationSchema }) {
    // console.log(register(name));

    return (
        <div>
            <label
                className="mb-2 block text-secondary-700"
                htmlFor={name}>
                {label} {required && <span className="text-error">*</span>}
            </label>
            <input
                className="textField__input"
                {...register(name, validationSchema)}
                autoComplete="off"
                id={name}
                type={type}
            />
            {
                errors && errors[name] && (
                    <span className="text-error block text-sm mt-2">
                        {errors[name]?.message}
                    </span>
                )
            }
        </div>
    )
}
export default TextField;