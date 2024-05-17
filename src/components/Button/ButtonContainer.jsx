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
    if (onClick) onClick(e);
    if (href !== undefined) {
      e.preventDefault();
      router[linkAction](typeof href === "string" ? href : String(href));
    }
  };

  return (
    <Button
      href={
        href === undefined || typeof href === "string" ? href : String(href)
      }
      onClick={handleClick}
      className={cn(s.button, { [className]: Boolean(className) })}
      {...props}
    />
  );
};

export default ButtonContainer;
