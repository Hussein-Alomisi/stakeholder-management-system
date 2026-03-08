// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div style={styles.sidebar}>
//       <h2 style={styles.logo}>نظام أصحاب المصلحة</h2>

//       <ul style={styles.menu}>

//         <li>
//           <Link to="/">لوحة التحكم</Link>
//         </li>

//         <li>
//           <Link to="/stakeholders">أصحاب المصلحة</Link>
//         </li>

//         <li>
//           <Link to="/groups">تصنيفات أصحاب المصلحة</Link>
//         </li>

//         <li>
//           <Link to="/interactions">التفاعلات</Link>
//         </li>

//         <li>
//           <Link to="/issues">القضايا</Link>
//         </li>

//       </ul>
//     </div>
//   );
// };

// const styles = {
//   sidebar: {
//     width: "260px",
//     height: "100vh",
//     background: "#1e293b",
//     color: "white",
//     padding: "20px",
//     textAlign: "right"
//   },

//   logo: {
//     marginBottom: "30px",
//   },

//   menu: {
//     listStyle: "none",
//     padding: 0,
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
// };

// export default Sidebar;


import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>نظام أصحاب المصلحة</h2>

      <ul style={styles.menu}>

        <li>
          <Link style={styles.link} to="/">لوحة التحكم</Link>
        </li>

        <li>
          <Link style={styles.link} to="/stakeholders">أصحاب المصلحة</Link>
        </li>

        <li>
          <Link style={styles.link} to="/groups">تصنيفات أصحاب المصلحة</Link>
        </li>

        <li>
          <Link style={styles.link} to="/interactions">التفاعلات</Link>
        </li>

        <li>
          <Link style={styles.link} to="/issues">القضايا</Link>
        </li>

      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "20px",
    textAlign: "right",
    borderLeft: "1px solid #334155",
  },

  logo: {
    marginBottom: "30px",
    color: "#38bdf8",
    fontWeight: "bold",
  },

  menu: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  link: {
    display: "block",
    padding: "10px 12px",
    borderRadius: "6px",
    color: "#e2e8f0",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
};

export default Sidebar;