import Tick from '../models/tick';

module.exports = {
  create: tickCreate,
  index: tickIndex
};

function tickCreate(req, res) {
  const tick = new Tick(req.body.tick);
  tick
  .save((err, tick) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err);
    }
    return res.status(201).json(tick);
  });
}

function tickIndex(req, res){
  Tick
  .find({
  })
  .exec((err, ticks) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(ticks);
  });
}
