import FormField from "../components/FormField";

const SectionC = () => {
  return (
    <div id="C" style={{ height: "100vh" }}>
      <h2>Section C - Personal Info</h2>
      <FormField name="name" placeholder="Name" />
      <FormField name="email" placeholder="Email" />
    </div>
  );
};

export default SectionC;