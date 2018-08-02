const db = require("../models")

module.exports = {
  all: function(req, res) {
    db.Convo.find({}).then(records => {
      return res.send(records);
    })
  },
  get: function(req, res) {
    console.log(req.params.id)
    db.Convo.findById(req.params.id).then(foundRecord => {
      res.send({
        topicName: foundRecord.topicName,
        gifUrls: foundRecord.gifUrls
      })
    });
    return;
  },
    create: function(req, res) {
      db.Convo
        .create(req.body)
        .then(dbModel => res.send(dbModel))
        .catch(err => res.status(422).json(err.message));
    },
    update: function(req, res ){
      db.Convo
        .findByIdAndUpdate(req.params.id, {$push: {gifUrls: req.body.gifUrls}})
        .then(dbModel => res.send({ gifUrl: req.body.gifUrls }))
        .catch(err => res.status(422).json(err.message))
    }
  };
  