const Button = ({
  children,
  disabled = false,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) => {
  const variants = {
    primary: {
      normal: "bg-primary hover:bg-primary-hover text-white",
      disabled: "bg-purple-500 text-white",
    },
    danger: {
      normal: "bg-danger hover:bg-red-400 text-white",
      disabled: "bg-danger/50 text-white",
    },
    normal: {
      normal: "bg-background text-black",
      disabled: "bg-background/50 text-gray-400",
    },
  };

  const styles = variants[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`rounded-md px-2 py-2 transition-all duration-200
        ${
          disabled
            ? `${styles.disabled} cursor-not-allowed rounded-md px-2 py-2`
            : `cursor-pointer ${styles.normal} active:scale-95`
        }
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
