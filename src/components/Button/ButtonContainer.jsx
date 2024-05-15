import cn from "classnames";
import { useRouter } from "next/navigation";
import Button from "./Button";
import s from "./Button.module.scss";

const ButtonContainer = ({
  href,
  linkAction,
  onClick,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    onClick(e);
    if (href) {
      e.preventDefault();
      router[linkAction](href);
    }
  };

  return (
    <Button
      href={href}
      onClick={handleClick}
      className={cn(s.button, { [className]: Boolean(className) })}
      {...props}
    />
  );
};

export default ButtonContainer;
