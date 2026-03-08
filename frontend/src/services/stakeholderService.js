const API_URL = "http://localhost:5000/api/stakeholders";

export const getStakeholders = async () => {

  const res = await fetch(API_URL);
  return res.json();

};

export const addStakeholder = async (data) => {

  const res = await fetch(API_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)

  });

  return res.json();

};

export const deleteStakeholder = async (id) => {

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  return res.json();

};