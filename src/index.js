module.exports = function reverse (n) {
    var num = 0;
    while (Math.abs(n) > 0) {
        num = num * 10 + Math.abs(n) % 10;
        n = Math.floor(Math.abs(n) / 10);
    }
    return num;
}
