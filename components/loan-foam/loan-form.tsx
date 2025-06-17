'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import type { LoanFormData } from '@/types/loan';
import { formatNumber, parseFormattedNumber } from '@/utils/loan-calculations';

interface LoanFormProps {
  formData: LoanFormData;
  isCalculating: boolean;
  onFormDataChange: (field: keyof LoanFormData, value: number) => void;
  onCalculate: () => void;
  onReset?: () => void;
}

export function LoanForm({
  formData,
  isCalculating,
  onFormDataChange,
  onCalculate,
  onReset,
}: LoanFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Input Data Kredit
        </CardTitle>
        <CardDescription>
          Masukkan data untuk menghitung angsuran bulanan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="otr">Harga Barang (All-in / OTR)</Label>
          <Input
            id="otr"
            type="text"
            value={formData.otr ? formatNumber(formData.otr) : ''}
            onChange={(e) => {
              const value = parseFormattedNumber(e.target.value);
              onFormDataChange('otr', value);
            }}
            placeholder="240.000.000"
          />
          <p className="text-sm text-gray-500">
            Contoh: Avanza = Rp 240.000.000
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dp">Down Payment (%)</Label>
          <Input
            id="dp"
            type="number"
            value={formData.dpPercentage || ''}
            onChange={(e) =>
              onFormDataChange('dpPercentage', Number(e.target.value))
            }
            placeholder="20"
            min="0"
            max="100"
          />
          <p className="text-sm text-gray-500">
            Persentase uang muka (contoh: 20%)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="term">Jangka Waktu (Bulan)</Label>
          <Input
            id="term"
            type="number"
            value={formData.loanTermMonths || ''}
            onChange={(e) =>
              onFormDataChange('loanTermMonths', Number(e.target.value))
            }
            placeholder="18"
            min="1"
          />
          <p className="text-sm text-gray-500">Contoh: 1.5 tahun = 18 bulan</p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onCalculate}
            className="flex-1"
            size="lg"
            disabled={isCalculating}
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Menghitung...
              </>
            ) : (
              <>
                <Calculator className="h-4 w-4 mr-2" />
                Hitung Angsuran
              </>
            )}
          </Button>

          {onReset && (
            <Button
              onClick={onReset}
              variant="outline"
              size="lg"
              disabled={isCalculating}
              className="px-6"
            >
              Reset
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
