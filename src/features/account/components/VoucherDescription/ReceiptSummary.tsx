import React from "react";

interface ReceiptSummaryProps {
  value: string;
  account: string;
  cpf: string;
  data: string;
  description: string;
}

export const ReceiptSummary: React.FC<ReceiptSummaryProps> = ({
  value,
  account,
  cpf,
  data,
  description,
}: ReceiptSummaryProps) => {
  return (
    <div className="voucher-content">
      <div> Transferência no valor de </div>
      <strong> R$ {value} </strong>
      <div> para a conta Fitbank de </div>
      <strong> {account} </strong>
      <div> com CPF </div>
      <strong> {cpf} </strong>
      <div> no dia </div>
      <strong> {data} </strong>
      <div> descrição da transferência </div>
      <strong> {description} </strong>
    </div>
  );
};
