const formatCurrency = (value: string | number, fixed = false): string => {
  const newValue = Number(value)
  return fixed ? newValue.toFixed(2) : newValue.toString()
}

export { formatCurrency }
