module.exports = {
  now: function() {
    return process.hrtime()
  },
  diff: function(last) {
    const diff = process.hrtime(last)
    return (diff[0] + (diff[1] * 1e-9)) * 1000
  }
}
