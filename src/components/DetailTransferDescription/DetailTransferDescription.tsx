import React from "react";
import { CurrencyFormatter, DateFormatter } from "_translate";
import "./DetailTransferDescription.scss";

interface DetailTransferDescriptionProps {
  value: number;
  accountName: string;
  date: Date;
  description: string;
}

export const DetailTransferDescription: React.FC<DetailTransferDescriptionProps> =
  ({ value, accountName, date, description }) => {
    return (
      <div className="detailTransfer-content">
        <div> Transferência no valor de </div>
        <div className="transfer-detail">{CurrencyFormatter.format(value)}</div>
        <div> para a conta Fitbank de </div>
        <div className="transfer-detail"> {accountName} </div>
        <div> no dia </div>
        <div className="transfer-detail">{DateFormatter.format(date)}</div>
        <div> sua descrição foi </div>
        <div className="transfer-detail"> {description} </div>
        <div> Anexos </div>
      </div>
    );
  };
