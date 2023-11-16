export function getDate(date: Date): string {
  const dateObject = new Date(date)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // Extract day, month, and year from the date object
  const day = dateObject.getUTCDate()
  const monthIndex = dateObject.getUTCMonth()
  const year = dateObject.getUTCFullYear()

  // Get the month name from the array
  const month = monthNames[monthIndex]

  // Create a string in the "day month year" format
  return `${day} ${month} ${year}`
}
