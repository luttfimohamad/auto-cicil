"use client"

import { useState, useRef } from "react"
import type { LoanFormData, LoanResult } from "@/types/loan"
import { calculateInterestRate, calculateLoanDetails } from "@/utils/loan-calculations"
import { toast } from "@/hooks/use-toast"

export function useLoanCalculator() {
  const [formData, setFormData] = useState<LoanFormData>({
    otr: 0,
    dpPercentage: 0,
    loanTermMonths: 0,
  })

  const [result, setResult] = useState<LoanResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const updateFormData = (field: keyof LoanFormData, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateLoan = async () => {
    // Validation
    if (!formData.otr || !formData.dpPercentage || !formData.loanTermMonths) {
      toast({
        title: "Data Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan",
        variant: "destructive",
      })
      return
    }

    if (formData.dpPercentage < 0 || formData.dpPercentage > 100) {
      toast({
        title: "Down Payment Tidak Valid",
        description: "Down payment harus antara 0% - 100%",
        variant: "destructive",
      })
      return
    }

    setIsCalculating(true)
    setShowScrollHint(false)

    try {
      // Simulate calculation time for better UX
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const dp = (formData.otr * formData.dpPercentage) / 100 //dp
      const principal = formData.otr - dp //pokok utang
      const interestRate = calculateInterestRate(formData.loanTermMonths)
      const loanDetails = calculateLoanDetails(principal, interestRate, formData.loanTermMonths)

      setResult({
        dp,
        principal,
        interestRate,
        ...loanDetails,
        totalPayment: dp + principal + loanDetails.totalInterest,
      })

      setIsCalculating(false)
      setShowScrollHint(true)

      // Success toast
      toast({
        title: "Perhitungan Berhasil!",
        description: "Hasil perhitungan angsuran telah ditampilkan",
        variant: "success",
      })

      // Auto scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    } catch (error) {
      setIsCalculating(false)
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal menghitung angsuran. Silakan coba lagi.",
        variant: "destructive",
      })
    }
  }

  const resetCalculation = () => {
    setFormData({
      otr: 0,
      dpPercentage: 0,
      loanTermMonths: 0,
    })
    setResult(null)
    setShowScrollHint(false)

    toast({
      title: "Data Direset",
      description: "Semua data telah dikosongkan",
    })
  }

  return {
    formData,
    result,
    isCalculating,
    showScrollHint,
    resultsRef,
    updateFormData,
    calculateLoan,
    resetCalculation,
  }
}
