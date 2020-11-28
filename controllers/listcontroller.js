const express = require('express');
const router = express.Router();
const { List } = require('../models');
const validateSession = require('../middleware/validateSession');

router.get('/taskmaster'), (req, res) => res.send('Did this work???');

router.get('/getalltasks', validateSession, (req, res) => {
  List.findAll()
    .then(list => res.status(200).json(list))
    .catch(err =>
      res.status(500).json({
        error: err,
      })
    );
});

router.get('/:date', (req, res) => {
  List.findone({ where: { date: req.params.flavor } })
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: err }));
});

router.post('/createlist', validateSession, async (req, res) => {
  console.log('Listcontroller =>', req.user);
  try {
    const {
      owner_id,
      date,
      listName,
      duration,
      timeDue,
      description,
      isChecked,
    } = req.body;

    let newList = await List.create({
      owner_id: req.user.id,
      date,
      listName,
      duration,
      timeDue,
      description,
      isChecked,
    });
    res.status(200).json({
      list: newList,
      message: "You've made a new list! Look at you!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Sorry bub, we weren't able to do that right now :(",
    });
  }
});

router.put('/:id', (req, res) => {
  const query = req.params.id;
  List.update(req.body, { where: { id: query } })
    .then(listsUpdated => {
      List.findOne({ where: { id: query } }).then(locatedUpdatedList => {
        res.status(200).json({
          list: locatedUpdatedList,
          message: 'List updated successful',
          listsChanged: listsUpdated,
        });
      });
    })
    //basic error message
    .catch(err =>
      res.json({
        err,
      })
    );
});
//  DELETE LIST
router.delete('/:id', (req, res) => {
  List.destroy({
    where: { id: req.params.id },
  })
    .then(list => res.status(200).json(list))
    .catch(err => res.json(err));
});

module.exports = router;
