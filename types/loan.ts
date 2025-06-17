export interface LoanFormData {
  otr: number
  dpPercentage: number
  loanTermMonths: number
}

export interface LoanResult {
  dp: number
  principal: number
  interestRate: number
  monthlyInstallment: number
  totalInterest: number
  totalPayment: number
}
