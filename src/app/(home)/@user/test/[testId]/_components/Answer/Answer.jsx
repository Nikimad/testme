import Input from "@/components/Input";

const Answer = ({ name , validate}) => (
  <div aria-describedby={`${name}-error`}>
    <label htmlFor={name} className="visually-hidden">
      Answer
    </label>
    <Input name={name} id={name} type="number" validate={validate} />
  </div>
);

export default Answer;
