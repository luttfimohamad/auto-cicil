import { TrendingUp, Calculator, CreditCard } from "lucide-react"
import { Label } from "@/components/ui/label"
import type { LoanResult } from "@/types/loan"
import { formatCurrency } from "@/utils/loan-calculations"

interface DetailCardsProps {
  result: LoanResult
}

export function DetailCards({ result }: DetailCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-center">
        <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <Label className="text-sm font-medium text-slate-600 block mb-1">Total Bunga</Label>
        <p className="text-2xl font-bold text-slate-700">{formatCurrency(result.totalInterest)}</p>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl text-center">
        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <Label className="text-sm font-medium text-indigo-600 block mb-1">Total Cicilan</Label>
        <p className="text-2xl font-bold text-indigo-700">{formatCurrency(result.totalInterest + result.principal)}</p>
      </div>

      <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl text-center">
        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <CreditCard className="h-6 w-6 text-white" />
        </div>
        <Label className="text-sm font-medium text-purple-600 block mb-1">Total Pembayaran</Label>
        <p className="text-2xl font-bold text-purple-700">{formatCurrency(result.totalPayment)}</p>
      </div>
    </div>
  )
}
