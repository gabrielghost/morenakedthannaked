import Tick as '../models/tick'

module.exports = {
  index: tickIndex,
  update: tickUpdate,
  show: tickShow,
  delete: tickDelete,
  create: tickCreate
};

const createTick = function (req, res) {
  const tick = new Tick(req.body.tick);
  tick
  .save((err, event) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(event);
  });
}
