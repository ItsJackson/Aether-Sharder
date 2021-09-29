const Sharder = require('./sharding/ClusterManager')
const Base = require('./structures/Base')
module.exports = {
    Master: Sharder,
    Base: Base
};