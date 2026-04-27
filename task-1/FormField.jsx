import { useField } from "formik";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </div>
  );
};

export default FormField;