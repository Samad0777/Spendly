import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
  label,
  name,
  placeholder,
  register,
  rules,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <div className="flex items-center rounded-md border px-2">
        <input
          className="w-full py-2 outline-none"
          {...register(name, rules)}
          type={showPassword ? "password" : "text"}
          placeholder={placeholder}
        />

        {showPassword ? (
          <EyeOff
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
            size={20}
          />
        ) : (
          <Eye
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
            size={20}
          />
        )}
      </div>

      {error && (
        <p className="text-danger">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;