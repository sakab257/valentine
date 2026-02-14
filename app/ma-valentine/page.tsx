"use client";
import React, { useState } from "react";
import { SuccessView } from "@/components/valentine/SuccessView";
import { QuestionView } from "@/components/valentine/QuestionView";

export default function ValentinePage() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const diagonalPattern = `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23cfb8c0' stroke-width='0.5' stroke-opacity='0.6'%3E%3Cpath d='M0 20L20 0'/%3E%3Cpath d='M0 0L20 20'/%3E%3C/g%3E%3C/svg%3E`;

  if (yesPressed) {
    return <SuccessView diagonalPattern={diagonalPattern} />;
  }

  return (
    <QuestionView
      onYes={() => setYesPressed(true)}
      onNo={() => setNoCount(noCount + 1)}
      noCount={noCount}
      diagonalPattern={diagonalPattern}
    />
  );
}