import { useFormikContext, getIn } from "formik";
import Input from "./Input";

const InputContainer = (props) => {
    const { errors } = useFormikContext();
    const isInvalid = getIn(errors, props.name);

    return <Input isInvalid={isInvalid} { ...props} />;
};

export default InputContainer;
