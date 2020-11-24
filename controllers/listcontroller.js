const express = require("express");
const router = express.Router();
const { List } = require("../models");
const { listcontroller } = require(".");

//  EDIT/UPDATE LIST
router.put("/:id", (req, res) => {
  const query = req.params.id;
  List.update(req.body, { where: { id: query } })
    .then((listsUpdated) => {
      List.findOne({ where: { id: query } }).then((locatedUpdatedList) => {
        res.status(200).json({
          list: locatedUpdatedList,
          message: "List updated successful",
          listsChanged: listsUpdated,
        });
      });
    })
    //basic error message
    .catch((err) =>
      res.json({
        err,
      })
    );
});
//  DELETE LIST
router.delete("/:id", (req, res) => {
  List.destroy({
    where: { id: req.params.id },
  })
    .then((list) => res.status(200).json(list))
    .catch((err) => res.json(err));
});

module.exports = router;
