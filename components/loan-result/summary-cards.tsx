import { Car, CreditCard, TrendingUp, Calculator } from 'lucide-react';
import type { LoanResult, LoanFormData } from '@/types/loan';
import { formatCurrency } from '@/utils/loan-calculations';

interface SummaryCardsProps {
  result: LoanResult;
  formData: LoanFormData;
}

export function SummaryCards({ result, formData }: SummaryCardsProps) {
  const getInterestRateCategory = (months: number) => {
    if (months < 12) return '< 12 bulan';
    if (months <= 24) return '12-24 bulan';
    return '> 24 bulan';
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm font-medium">Harga</p>
            <p className="text-xl font-bold">{formatCurrency(formData.otr)}</p>
          </div>
          <Car className="h-8 w-8 text-blue-200" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm font-medium">
              Down Payment ({formData.dpPercentage}%)
            </p>
            <p className="text-xl font-bold">{formatCurrency(result.dp)}</p>
          </div>
          <CreditCard className="h-8 w-8 text-green-200" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm font-medium">Pokok Utang</p>
            <p className="text-xl font-bold">
              {formatCurrency(result.principal)}
            </p>
          </div>
          <TrendingUp className="h-8 w-8 text-orange-200" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-red-100 text-sm font-medium">Suku Bunga</p>
            <p className="text-xl font-bold">{result.interestRate}%</p>
            <p className="text-xs text-red-200">
              {getInterestRateCategory(formData.loanTermMonths)}
            </p>
          </div>
          <Calculator className="h-8 w-8 text-red-200" />
        </div>
      </div>
    </div>
  );
}
