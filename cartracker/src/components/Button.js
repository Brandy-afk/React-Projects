import className from "classnames";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  roundedMed,
  roundedLG,
  roundedFull,
  ...rest
}) {
  const finalClassName = className(
    rest.className,
    "flex",
    "items-center",
    "px-2",
    "py-1",
    "font-medium",
    "border-2",
    {
      "bg-blue-500 border-blue-600 text-white": primary,
      "bg-slate-200 border-slate-400 text-slate-700": secondary,
      "bg-green-200 border-green-600 text-green-600": success,
      "bg-red-200 border-red-600 text-red-600": warning,
      "bg-yellow-300 border-yellow-600 text-yellow-600": danger,
      "rounded-full": roundedFull,
      "rounded-md": roundedMed,
      "rounded-lg": roundedLG,
      "bg-transparent": outline,
      "text-blue-600": outline && primary,
      "text-slate-400": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-600": outline && danger,
      "text-red-600": outline && warning,
    }
  );

  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
}
