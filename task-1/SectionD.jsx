import FormField from "../components/FormField";

const SectionD = () => {
  return (
    <div id="D" style={{ height: "100vh" }}>
      <h2>Section D - Personal Info</h2>
      <FormField name="name" placeholder="Name" />
      <FormField name="email" placeholder="Email" />
    </div>
  );
};

export default SectionD;