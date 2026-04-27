const Sidebar = ({ activeSections }) => {
  const sections = ["A", "B", "C", "D"];

  return (
    <div style={{ position: "fixed", left: 0 }}>
      {sections.map((sec) => (
        <div
          key={sec}
          style={{
            color: activeSections.includes(sec) ? "green" : "gray",
          }}
        >
          Section {sec}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;