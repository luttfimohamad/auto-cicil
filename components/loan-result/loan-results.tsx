import { forwardRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrendingUp, CheckCircle } from 'lucide-react';
import type { LoanResult, LoanFormData } from '@/types/loan';
import { SummaryCards } from '@/components/loan-result/summary-cards';
import { MainResult } from '@/components/loan-result/main-result';
import { DetailCards } from '@/components/loan-result/detail-cards';
import { PaymentBreakdown } from '@/components/loan-result/payment-breakdown';

interface LoanResultsProps {
  result: LoanResult;
  formData: LoanFormData;
}

export const LoanResults = forwardRef<HTMLDivElement, LoanResultsProps>(
  ({ result, formData }, ref) => {
    return (
      <Card className="mt-8" ref={ref}>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4 rounded-r-lg">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
            <p className="text-green-700 font-medium">
              Perhitungan berhasil! Scroll untuk melihat detail lengkap.
            </p>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Hasil Perhitungan
          </CardTitle>
          <CardDescription>Detail perhitungan angsuran kredit</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <SummaryCards result={result} formData={formData} />
            <MainResult result={result} formData={formData} />
            <DetailCards result={result} />
            <PaymentBreakdown result={result} />
          </div>
        </CardContent>
      </Card>
    );
  }
);

LoanResults.displayName = 'LoanResults';
