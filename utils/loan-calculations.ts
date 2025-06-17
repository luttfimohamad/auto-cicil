export function calculateInterestRate(loanTermMonths: number): number {
  if (loanTermMonths <= 12) return 12
  if (loanTermMonths > 12 && loanTermMonths <= 24) return 14
  return 16.5
}

export function calculateLoanDetails(principal: number, interestRate: number, loanTermMonths: number) {
  const totalInterest = (principal * interestRate) / 100
  const monthlyInstallment = (principal + totalInterest) / loanTermMonths

  return {
    monthlyInstallment,
    totalInterest,
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("id-ID").format(value)
}

export function parseFormattedNumber(value: string): number {
  return Number(value.replace(/\D/g, ""))
}
