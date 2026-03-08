const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {

  const sql = "SELECT * FROM stakeholders";

  db.query(sql, (err, result) => {

    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }

  });

});

router.post("/", (req, res) => {

  const data = req.body;

  const sql = `
  INSERT INTO stakeholders 
  (name, organization, group_id, influence_level, interest_level, support_level)
  VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.name,
      data.organization,
      data.group_id,
      data.influence,
      data.interest,
      data.support
    ],
    (err, result) => {

      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }

    }
  );

});

router.delete("/:id", (req, res) => {

  const id = req.params.id;

  const sql = "DELETE FROM stakeholders WHERE id = ?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      res.status(500).json(err);
    } else {
      res.json({ message: "Deleted successfully" });
    }

  });

});

module.exports = router;