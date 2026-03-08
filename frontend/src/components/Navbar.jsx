import React from "react";

const Navbar = () => {
  return (
    <div style={styles.navbar}>

      <h3>نظام إدارة أصحاب المصلحة</h3>

      <div>
        <span style={{ marginLeft: "20px" }}>المدير</span>
        <button>تسجيل الخروج</button>
      </div>

    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
    direction: "rtl"
  }
};

export default Navbar;