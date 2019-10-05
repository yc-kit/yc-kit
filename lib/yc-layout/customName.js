module.exports = function customName (name) {
  const transformed = name
    .split('-')
    .slice(2)
    .map(c => c.charAt(0).toUpperCase() + c.slice(1))
    .join('')
  return `yc-layout/${transformed}`
}
