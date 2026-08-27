const FormInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  rules,
  error,
  className="",
  labelClassName="",
}) => {
  return (

    <div className="flex flex-col gap-1">
      <label className={`${labelClassName}`}>{label}</label>
      <input
        className={`px-2 py-2 rounded-md border ${className}`}
        {...register(name, rules)}
        type={type}
        placeholder={placeholder}
        />
      {error && (
          <p className="text-danger">{error.message}</p>
        )}
    </div>

  );
};

export default FormInput;
