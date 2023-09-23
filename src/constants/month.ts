export const MONTH_DAYS: Array<{ id: TMonthDay, label: string }> = Array(31).fill(null).map((_, index) => {
  return {
    id: index + 1,
    label: `${index + 1}`
  }
})