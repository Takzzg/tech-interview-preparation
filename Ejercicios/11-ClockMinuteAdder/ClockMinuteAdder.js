function clockMinuteAdder(time, minutesToAdd) {
  const [hours, minutes] = time.split(':')

  let totalMinutes = parseInt(minutes) + minutesToAdd
  let totalHours = Math.floor(totalMinutes / 60) + parseInt(hours)

  totalMinutes = totalMinutes % 60

  if (totalHours > 12) totalHours = totalHours - 12
  if (totalHours < 10) totalHours = '0' + totalHours
  if (totalMinutes < 10) totalMinutes = '0' + totalMinutes

  return `${totalHours}:${totalMinutes}`
}

module.exports = clockMinuteAdder
