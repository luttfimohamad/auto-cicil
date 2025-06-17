import { CreditCard } from "lucide-react"
import { Label } from "@/components/ui/label"
import type { LoanResult, LoanFormData } from "@/types/loan"
import { formatCurrency } from "@/utils/loan-calculations"

interface MainResultProps {
  result: LoanResult
  formData: LoanFormData
}

export function MainResult({ result, formData }: MainResultProps) {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-full mb-4">
          <CreditCard className="h-8 w-8 text-white" />
        </div>
        <div>
          <Label className="text-lg font-medium text-emerald-700 block mb-2">Angsuran Per Bulan</Label>
          <p className="text-5xl font-bold text-emerald-600 mb-2">{formatCurrency(result.monthlyInstallment)}</p>
          <p className="text-emerald-600 font-medium">untuk {formData.loanTermMonths} bulan</p>
        </div>
      </div>
    </div>
  )
}
