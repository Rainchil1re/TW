import {UtilsFun} from '../src/utils/index'

const Mock = require('mockjs');
const resourcesArr = ["Firefox", "Safari", "Ubuntu", "Chrome"]

let db = Mock.mock({
  'data|8': [{
    'id|+1': 1,
    name: /bjstdmngbdr\d{1,2}\.thoughtworks\.com/,
    'os|1': ['centos', 'debian', 'ubuntu', 'windows', 'suse'],
    'status|1': ['idle', 'building'],
    'type|1': ['virtual', 'physical'],
    ip: /192\.168\.1\.[1-2][0-5][0-5]/,
    location: '/var/lib/cruise-agent',
    'resources|1':[['firefox','Safari','Chrome','Ubuntu'],['firefox','Safari'],["Ubuntu", "Chrome"], []]

  }]
});

module.exports = {
  [`GET /agents`](req, res) {
    res.status(200).json(db);
  },

  [`POST /api/users`](req, res) {

    let user = req.body;
    console.log(req);
    user.id = Mock.mock('@id');
    db.data.push(user);

    res.status(200).json(user);
  }
}
