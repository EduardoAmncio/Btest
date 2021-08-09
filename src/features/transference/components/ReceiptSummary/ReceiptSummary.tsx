import React from "react";

import { useStyles } from "./ReceiptSummary.style";

interface ReceiptSummaryProps {
  value: string;
  account: string;
  taxId: string;
  data: string;
  description: string;
}

export const ReceiptSummary: React.FC<ReceiptSummaryProps> = ({
  value,
  account,
  taxId,
  data,
  description,
}: ReceiptSummaryProps) => {
  const styles = useStyles();
  return (
    <div className={styles.voucherContent}>
      <div> Transferência no valor de </div>
      <strong> R$ {value} </strong>
      <div> para a conta Fitbank de </div>
      <strong> {account} </strong>
      <div> com CPF </div>
      <strong> {taxId} </strong>
      <div> no dia </div>
      <strong> {data} </strong>
      <div> descrição da transferência </div>
      <strong> {description} </strong>
    </div>
  );
};
