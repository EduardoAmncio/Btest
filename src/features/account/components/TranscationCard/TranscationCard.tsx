import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { TagButton } from "components/TagButton";
import { Transaction } from "features/account/redux/models/transaction";
import { CurrencyFormatter } from "_translate";
import IncomeIcon from "_assets/icons/Enter.svg";
import ExpenseIcon from "_assets/icons/Exit.svg";

import { useStyle } from "./TranscationCard.style";
import { useHistory } from "react-router-dom";
import { AccountRoutes } from "features/account/constants/routes";
import { OperationType } from "features/account/redux/models/operationType";

interface TranscationCardProps {
  transaction: Transaction;
}

export const TranscationCard: React.FC<TranscationCardProps> = ({
  transaction,
}) => {
  const {
    value,
    title,
    stablishment,
    tags,
    externalIdentifier,
    operationType,
  } = transaction;
  const history = useHistory();
  const style = useStyle();

  const formattedValue = CurrencyFormatter.format(value);
  const isCredit = value >= 0;
  const showDetailsAndReceiptButtons =
    operationType === OperationType.moneyTransfer || operationType === OperationType.internalTransfer;

  const onDetailsButtonClick = () => {
    history.push(AccountRoutes.detail, {
      externalIdentifier: externalIdentifier,
      operationType: operationType,
    });
  };

  const onReceiptButtonClick = () => {
    history.push(AccountRoutes.receipt, {
      externalIdentifier: externalIdentifier,
      operationType: operationType,
    });
  };

  return (
    <div className={style.card}>
      <img
        className={style.icon}
        src={isCredit ? IncomeIcon : ExpenseIcon}
        alt="Enter"
      />
      {showDetailsAndReceiptButtons && (
        <Grid
          container
          justify="flex-end"
          spacing={1}
          className={style.buttons}
        >
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={onDetailsButtonClick}
            >
              Detalhes
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={onReceiptButtonClick}
            >
              Comprovante
            </Button>
          </Grid>
        </Grid>
      )}
      <div>
        <Typography
          className={style.description}
          variant="caption"
          display="block"
          gutterBottom
        >
          {title}
        </Typography>
        <strong>{formattedValue}</strong>
        {stablishment && (
          <Typography
            className={style.description}
            variant="caption"
            display="block"
            gutterBottom
          >
            {stablishment}
          </Typography>
        )}
        {tags?.map((tag) => (
          <TagButton>{tag}</TagButton>
        ))}
      </div>
    </div>
  );
};
