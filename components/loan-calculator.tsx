'use client';
import { Car } from 'lucide-react';
import { LoanForm } from '@/components/loan-foam/loan-form';
import { LoanResults } from '@/components/loan-result/loan-results';
import { useLoanCalculator } from '@/hooks/use-loan-calculator';

export default function CarLoanCalculator() {
  const {
    formData,
    result,
    isCalculating,
    resultsRef,
    updateFormData,
    calculateLoan,
    resetCalculation,
  } = useLoanCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Auto Cicil - By UPI
            </h1>
          </div>
          <p className="text-gray-600">
            Aplikasi perhitungan angsuran kredit berdasarkan flowchart IMS
            Finance
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <LoanForm
            formData={formData}
            isCalculating={isCalculating}
            onFormDataChange={updateFormData}
            onCalculate={calculateLoan}
            onReset={resetCalculation}
          />
        </div>

        {/* Results */}
        {result && (
          <LoanResults ref={resultsRef} result={result} formData={formData} />
        )}
      </div>
    </div>
  );
}
