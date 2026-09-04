import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hook/useAuth";
import { toast } from "sonner";
import Button from "../components/Ui/Button";
import FormInput from "../components/Ui/FormInput";
import PasswordInput from "../components/Ui/PasswordInput";
import logo from "../../public/spendly-favicon.png";

const Login = () => {
  const navigate = useNavigate();
  const { loginHandler, loading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginHandler(data.email, data.password);
      reset();
      navigate("/dashboard");
      toast.success("Login successfull.");
    } catch (err) {
      const message = "something went wrong. please try again.";
      toast.error(err.response?.data?.message ?? message);
      setError("root", {
        type: "manual",
        message: err.response?.data?.message ?? message,
      });
    }
  };
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="shadow-lg w-full max-w-md rounded-md p-8 bg-surface">
        <div>
          <img src={logo} alt="brand-logo" className="w-14 h-14 mx-auto rounded-2xl" />
          <h1 className="text-center text-text-primary text-3xl pb-4 pt-2">Login to Spendly</h1>
        </div>
        {errors.root && (
          <p className="text-danger mt-2 mb-2 text-center">
            {errors.root.message}
          </p>
        )}
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            register={register}
            rules={{
              required: "*Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            error={errors.email}
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            register={register}
            rules={{
              required: "*Password is required"
            }}
            error={errors.password}
          />
          <Button disabled={loading} type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
          <h2 className="text-center">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="cursor-pointer text-blue-900 underline"
            >
              register
            </NavLink>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
