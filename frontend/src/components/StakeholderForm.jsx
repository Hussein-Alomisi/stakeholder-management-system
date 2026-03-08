import React, { useState } from "react";

const StakeholderForm = ({ onSave, onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    group_id: "",
    influence: "",
    interest: "",
    support: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    onSave(formData);

  };

  return (

    <div style={styles.overlay}>

      <div style={styles.modal}>

        <h2>إضافة صاحب مصلحة</h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            name="name"
            placeholder="اسم صاحب المصلحة"
            onChange={handleChange}
            required
          />

          <input
            name="organization"
            placeholder="الجهة"
            onChange={handleChange}
          />

          <input
            name="group_id"
            placeholder="رقم التصنيف"
            onChange={handleChange}
          />

          <label>مستوى التأثير</label>

          <select
            name="influence"
            onChange={handleChange}
            required
          >

            <option value="">اختر</option>
            <option value="low">منخفض</option>
            <option value="medium">متوسط</option>
            <option value="high">مرتفع</option>

          </select>


          <label>مستوى الاهتمام</label>

          <select
            name="interest"
            onChange={handleChange}
            required
          >

            <option value="">اختر</option>
            <option value="low">منخفض</option>
            <option value="medium">متوسط</option>
            <option value="high">مرتفع</option>

          </select>


          <label>الموقف</label>

          <select
            name="support"
            onChange={handleChange}
            required
          >

            <option value="">اختر</option>
            <option value="supporter">داعم</option>
            <option value="neutral">محايد</option>
            <option value="opponent">معارض</option>

          </select>


          <div style={styles.buttons}>

            <button type="submit">
              حفظ
            </button>

            <button type="button" onClick={onClose}>
              إلغاء
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};


const styles = {

  overlay: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    background: "white",
    padding: "20px",
    width: "420px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  }

};

export default StakeholderForm;