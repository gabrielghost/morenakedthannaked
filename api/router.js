import passport from 'passport';
import multer from 'multer';
// const auth = require('./controllers/authorization');
import tick from './controllers/tick';
// const children = require('./controllers/case/children');
// const mou = require('./controllers/case/mou');
// const fS = require('./controllers/case/financialStatement');
// const note = require('./controllers/case/note');
// const financialSummaryUnit = require('./controllers/case/financial_summary_unit');
// const splitSummaryUnit = require('./controllers/case/split_summary_unit');
//
// const user = require('./controllers/user_types/user');
// const assetClass = require('./controllers/finance/assetclass');
// const attachment = require('./controllers/finance/attachment');
// const financeInfo = require('./controllers/finance/finance');
// const solicitor = require('./controllers/user_types/solicitor');

const upload = multer({ dest: '/tmp/' });
// require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

const A = 'Admin';
const CA = 'ClientA';
const CB = 'ClientB';
const M = 'Mediator';
const S = 'Solicitor';

module.exports = function (app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'Super secret code is ABC123' });
  });
  app.post('/newtick', tick.create);
  app.get('/ticks', tick.index);

};
