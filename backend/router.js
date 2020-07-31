const express = require("express");
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let list = [
  { id: "1", text: "milk", status: "added" },
  { id: "2", text: "bread", status: "added" }
];

router.get("/list", (req, res) => {
  console.log("## Backend hit");
  res.json(list);
});

router.post("/item", (req, res) => {
  const { body: { text } } = req;
  list = list.concat({ text, id: uuidv4(), status: "added" });
  res.json({ status: "ok" });
});

router.patch("/item/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  list = list.map((item) => {
    if (item.id === id) {
      item = { ...item, ...body };
    }
    return item;
  });
  res.json({ status: "ok" });
});

router.delete("/item/:id", (req, res) => {
  const { id } = req.params;
  list = list.filter((item) => item.id !== id);
  res.json({ status: "ok" });
});

module.exports = router;
