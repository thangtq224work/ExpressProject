const formatVND = (money) => {
    money = Number(money);
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}
module.exports =  { formatVND }