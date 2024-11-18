const os = require('os');

const getHostname = () => os.hostname();

module.exports = {
  getHostname,
};
