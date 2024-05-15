import Link from "next/link";

const Button = (props) => (props.href ? <Link {...props} /> : <button {...props} />);

export default Button;
