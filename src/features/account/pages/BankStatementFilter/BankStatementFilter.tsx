import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { AccountRoutes } from "features/account/constants/routes";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { DateInput } from "components/DateInput";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { Divider } from "components/Divider";
import { FilterSectionTitleAndDescription } from "features/account/components/FilterSectionTitleAndDescription";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon/ButtonWithFloatingIcon";
import { PageContainer } from "components/PageContainer";
import { TagButton } from "components/TagButton";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { cancelLabel } from "constants/buttons/labels";
import { TransactionType } from "features/account/redux/models/transactionType";
import { closeAlert, getBankStatement } from "features/account/redux/actions";
import { StoreState } from "redux/state";
import placeholderFloatingIcon from "_assets/icons/bgClearButton.png";
import iconFilter from "_assets/icons/iconFilter.png";

import { useStyles } from "./BankStatementFilter.style";
import "_assets/css/forms/mainform.scss";

export const BankStatementFilter: React.FC = () => {
  const [startDate, setStartDate] = React.useState<string | undefined>(
    undefined
  );
  const [endDate, setEndDate] = React.useState<string | undefined>(undefined);
  const [transactionType, setTransactionType] = React.useState<
    TransactionType | undefined
  >(undefined);
  const [tags, setTags] = React.useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = React.useState(false);

  const { loading, bankStatement, errorMessage } = useSelector(
    (state: StoreState) => state.account
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    if (appliedFilters && !loading && bankStatement?.length) history.goBack();
  }, [appliedFilters, bankStatement, history, loading, tags]);

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.bankStatement);
  };

  const onStartDateChange = (date: MaterialUiPickersDate) => {
    const value = date?.toString();
    setStartDate(value);
  };

  const onEndDateChange = (date: MaterialUiPickersDate) => {
    const value = date?.toString();
    setEndDate(value);
  };

  const onTagClick = (tag: string) => {
    let newTags = [...tags];

    if (tags.includes(tag)) newTags = newTags.filter((x) => x !== tag);
    else newTags.push(tag);

    setTags(newTags);
  };

  const onApplyButtonClick = () => {
    setAppliedFilters(true);
    dispatch(
      getBankStatement(
        startDate ? new Date(startDate) : undefined,
        endDate ? new Date(endDate) : undefined,
        transactionType ? undefined : undefined
        
      )
    );
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={AccountRoutes.home}
            action={
              <Button
                palette="secondary"
                size="small"
                startIcon={<Close color="primary" />}
                onClick={onCancelButtonClick}
              >
                {cancelLabel}
              </Button>
            }
          />
        }
        header={
          <ProcessDescriptionHeader
            title="Filtrar Extrato"
            description="Selecione as características das transações que deseja visualizar."
          />
        }
        main={
          <React.Fragment>
            <section>
              <FilterSectionTitleAndDescription
                title="Por Data"
                description="Escolha o período que deseja visualizar"
              />
              <Grid
                container
                spacing={1}
                wrap="nowrap"
                className={styles.datesSection}
              >
                <Grid item>
                  <Grid container wrap="nowrap" alignItems="center">
                    <Grid item>
                      <Typography variant="body2">de&nbsp;</Typography>
                    </Grid>
                    <Grid item>
                      <DateInput
                        value={startDate}
                        onChange={onStartDateChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container wrap="nowrap" alignItems="center">
                    <Grid item>
                      <Typography variant="body2">até&nbsp;</Typography>
                    </Grid>
                    <Grid item>
                      <DateInput value={endDate} onChange={onEndDateChange} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className={styles.clearButton}>
                <ButtonWithFloatingIcon
                  onClick={() => {
                    setStartDate(undefined);
                    setEndDate(undefined);
                  }}
                  icon={placeholderFloatingIcon}
                  size="small"
                >
                  Limpar
                </ButtonWithFloatingIcon>
              </div>
            </section>
            <Divider spacing={2} />
            {/* <section>
              <FilterSectionTitleAndDescription
                title="Por Transação"
                description="Filtrar por gastos ou receitas"
              />
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant={
                      transactionType === TransactionType.sent
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    onClick={() =>
                      setTransactionType(
                        transactionType === TransactionType.sent
                          ? undefined
                          : TransactionType.sent
                      )
                    }
                  >
                    Enviados
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant={
                      transactionType === TransactionType.received
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    onClick={() =>
                      setTransactionType(
                        transactionType === TransactionType.received
                          ? undefined
                          : TransactionType.received
                      )
                    }
                  >
                    Recebidos
                  </Button>
                </Grid>
              </Grid>
              <div className={styles.clearButton}>
                <ButtonWithFloatingIcon
                  icon={placeholderFloatingIcon}
                  size="small"
                  onClick={() => setTransactionType(undefined)}
                >
                  Limpar
                </ButtonWithFloatingIcon>
              </div>
            </section>
            <Divider spacing={2} /> */}
            <section>
              <FilterSectionTitleAndDescription
                title="Por TAGs"
                description="As tags identificam suas transações, selecione
                            quais deseja visualizar"
              />
              <div className={styles.customTagButtonsFilter}>
                <TagButton
                  label="Crédito"
                  active={tags.includes("Crédito")}
                  onClick={() => onTagClick("Crédito")}
                />
                <TagButton
                  label="Débito"
                  active={tags.includes("Débito")}
                  onClick={() => onTagClick("Débito")}
                />
                <TagButton
                  label="Manutenção"
                  active={tags.includes("Manutenção")}
                  onClick={() => onTagClick("Manutenção")}
                />
                <TagButton
                  label="Escola"
                  active={tags.includes("Escola")}
                  onClick={() => onTagClick("Escola")}
                />
              </div>
            </section>
            <Divider spacing={2} />
            <section className={styles.applyButton}>
              <ButtonWithFloatingIcon
                icon={iconFilter}
                size="large"
                onClick={onApplyButtonClick}
              >
                Aplicar Filtros
              </ButtonWithFloatingIcon>
            </section>
          </React.Fragment>
        }
      />

      <Loader open={loading} />
      {errorMessage && (
        <Alert
          message={errorMessage}
          title="Erro"
          severity="error"
          onClose={() => dispatch(closeAlert())}
        />
      )}
    </PageContainer>
  );
};
