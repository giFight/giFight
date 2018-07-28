const db = require("../models")

module.exports = {
  get: function(req, res) {
    console.log(req.params.id)
    db.Convo.findById(req.params.id).then(foundRecord => {
      console.log(foundRecord.gifUrl)
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
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err.message));
    },
  };
  