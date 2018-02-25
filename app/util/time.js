const dateToString = (date) => date.toISOString().slice(0, 10)

const today = dateToString(new Date())
const yesterday = dateToString(new Date(new Date().setDate(new Date().getDate() - 1)))
const tomorrow = dateToString(new Date(new Date().setDate(new Date().getDate() + 1)))

const mapDateToWord = {
  [today]: 'today',
  [yesterday]: 'yesterday',
  [tomorrow]: 'tomorrow'
}

export const convertDateToWord = (date) => mapDateToWord[date] || date
