module.exports = function reverse (n) {
    const str = n.toString()
    const rev = str.split('').reverse().join('')

        return parseInt(rev)
}
