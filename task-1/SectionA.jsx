import FormField from "../components/FormField";

const SectionA = () => {
  return (
    <div id="A" style={{ height: "100vh" }}>
      <h2>Section A - Personal Info</h2>
      <FormField name="name" placeholder="Name" />
      <FormField name="email" placeholder="Email" />
    </div>
  );
};

export default SectionA;