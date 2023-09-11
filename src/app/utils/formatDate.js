
const formatDate = (date) => {
    if (date == null || date == '') {
        return '';
    }
    date = new Date(date);
    let d = date.getDate(),
        M = date.getMonth() + 1,
        y = date.getFullYear(),
        H = 0,
        s = 0,
        m = 1;

    if (d < 10) {
        d = "0" + d;
    };
    if (M < 10) {
        M = "0" + M;
    };
    return `${y}-${M}-${d}`
}
module.exports = { formatDate }
