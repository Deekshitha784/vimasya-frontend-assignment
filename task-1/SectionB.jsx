import FormField from "../components/FormField";

const SectionB = () => {
  return (
    <div id="B" style={{ height: "100vh" }}>
      <h2>Section B - Personal Info</h2>
      <FormField name="name" placeholder="Name" />
      <FormField name="email" placeholder="Email" />
    </div>
  );
};

export default SectionB;