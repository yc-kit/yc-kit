module.exports = function customName (name) {
  const transformed = name
    .split('-')
    .slice(1)
    .map(c => c.charAt(0).toUpperCase() + c.slice(1))
    .join('')
  return `yc-ui/${transformed}`
}
