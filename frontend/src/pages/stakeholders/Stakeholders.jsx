import React, { useEffect, useState } from "react";

import StakeholderForm from "../../components/StakeholderForm";

import {
  getStakeholders,
  addStakeholder,
  deleteStakeholder
} from "../../services/stakeholderService";

const Stakeholders = () => {

  const [stakeholders, setStakeholders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadStakeholders();
  }, []);

  const loadStakeholders = async () => {

    const data = await getStakeholders();
    setStakeholders(data);

  };

  const handleAdd = async (formData) => {

    await addStakeholder(formData);

    loadStakeholders();

    setShowForm(false);

  };

  const handleDelete = async (id) => {

    await deleteStakeholder(id);

    loadStakeholders();

  };

  return (

    <div>

      <h1>أصحاب المصلحة</h1>

      <button onClick={() => setShowForm(true)}>
        إضافة صاحب مصلحة
      </button>

      <table style={styles.table}>

        <thead>
          <tr>
            <th>الاسم</th>
            <th>الجهة</th>
            <th>التصنيف</th>
            <th>التأثير</th>
            <th>الاهتمام</th>
            <th>الموقف</th>
            <th>الإجراءات</th>
          </tr>
        </thead>

        <tbody>

          {stakeholders.map((s) => (

            <tr key={s.id}>

              <td>{s.name}</td>
              <td>{s.organization}</td>
              <td>{s.group_id}</td>
              <td>{s.influence_level}</td>
              <td>{s.interest_level}</td>
              <td>{s.support_level}</td>

              <td>

                <button
                  style={styles.delete}
                  onClick={() => handleDelete(s.id)}
                >
                  حذف
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {showForm && (
        <StakeholderForm
          onSave={handleAdd}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>

  );

};

const styles = {

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  },

  delete: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  }

};

export default Stakeholders;