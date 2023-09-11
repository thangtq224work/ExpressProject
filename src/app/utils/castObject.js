const castObjects = (arr) => {
    return arr.map(i => i.toObject());
}
const castObject = (obj) => {
    return obj.toObject();
}
module.exports = { castObject, castObjects };