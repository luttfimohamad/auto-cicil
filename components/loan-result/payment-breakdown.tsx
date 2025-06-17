import { Label } from "@/components/ui/label"
import type { LoanResult } from "@/types/loan"

interface PaymentBreakdownProps {
  result: LoanResult
}

export function PaymentBreakdown({ result }: PaymentBreakdownProps) {
  const dpPercentage = ((result.dp / result.totalPayment) * 100).toFixed(1)
  const principalPercentage = ((result.principal / result.totalPayment) * 100).toFixed(1)
  const interestPercentage = ((result.totalInterest / result.totalPayment) * 100).toFixed(1)

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <Label className="font-medium text-gray-700">Breakdown Pembayaran</Label>
        <span className="text-sm text-gray-500">100%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div className="flex h-4 rounded-full overflow-hidden">
          <div
            className="bg-green-500 flex items-center justify-center text-xs text-white font-medium"
            style={{ width: `${dpPercentage}%` }}
          >
            DP
          </div>
          <div
            className="bg-blue-500 flex items-center justify-center text-xs text-white font-medium"
            style={{ width: `${principalPercentage}%` }}
          >
            Pokok
          </div>
          <div
            className="bg-red-500 flex items-center justify-center text-xs text-white font-medium"
            style={{ width: `${interestPercentage}%` }}
          >
            Bunga
          </div>
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          DP: {dpPercentage}%
        </span>
        <span className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          Pokok: {principalPercentage}%
        </span>
        <span className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          Bunga: {interestPercentage}%
        </span>
      </div>
    </div>
  )
}
