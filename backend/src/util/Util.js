const moment = require("moment");

const formatDate = (param) => {
    let dateFormat = moment(param).format("DD-MM-YYYY");
    return dateFormat
}

module.exports = {
    formatDate
}