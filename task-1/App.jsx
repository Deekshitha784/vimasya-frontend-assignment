import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SectionA from "./sections/SectionA";
import SectionB from "./sections/SectionB";
import SectionC from "./sections/SectionC";
import SectionD from "./sections/SectionD";

function App() {
  const [activeSections, setActiveSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["A", "B", "C", "D"];
      let active = [];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          active.push(sec);
        }
      });

      setActiveSections(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Required";
        if (!values.email) errors.email = "Required";
        return errors;
      }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form style={{ display: "flex" }}>
          <Sidebar activeSections={activeSections} />
          <div style={{ marginLeft: "150px" }}>
            <SectionA />
            <SectionB />
            <SectionC />
            <SectionD />
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default App;