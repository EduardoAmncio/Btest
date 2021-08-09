import React from "react";
// import { useStyles } from "./BarCodePayment.style";
// import { PaymentRoutes } from "features/payment/constants/routes"

// import { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core"
import { PageContainer } from "components/PageContainer"
import { ProcessPageLayout } from "components/ProcessPageLayout"
import { ProcessPageFooter } from "components/ProcessPageFooter"
import { Button } from "components/Button"
import { Divider } from "components/Divider"
import { TextField } from "components/TextField"
import { useMask } from "hooks/useMask"
import { MaskbarCode } from "_utils/masks/barCode"
import { AppBar } from "components/AppBar"
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon"
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader"
import { AccountBalance } from "features/payment/components/AccountBalance"
import { ShowBalanceButton } from "features/payment/components/ShowBalanceButton"//mudar a cor do icone
import { nextLabel } from "constants/buttons/labels"
import { returnLabel } from "constants/buttons/labels"
import { PaymentsRoutes } from "features/payment/constants/routes"

import { CameraAltOutlined, KeyboardArrowRight } from "@material-ui/icons"
// import QrCodeIcon from "_assets/icons/QrCode.svg"
// import PixIcon from "_assets/icons/Pix.svg"
// import bgClearButton from "_assets/icons/bgClearButton.png"

import { findInforsPaymentByBarCode } from "features/payment/redux/actions";

import { useStyles } from "./BarCodePayment.style"
import { useHistory } from "react-router";
import { useDispatch} from "react-redux";


export const BarCodePayment: React.FC = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();
  const [showBalance, setShowBalance] = React.useState(true);
  const [barCode, setBarCode] = useMask(MaskbarCode);
  const agency = "Tim Brasil", value = 90;

  const onShowBalanceButtonClick = () => setShowBalance(!showBalance);
  const onScanBarCodeClick = () => {
    history.push(PaymentsRoutes.BarCodeScanner)
  };
  const onNextButtonClick = () => {
    dispatch(findInforsPaymentByBarCode(barCode));
    history.push(PaymentsRoutes.PaymentData);
  };

  const onBarCodeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBarCode(event.target.value);

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute="/" />}
        header={<React.Fragment>
          <ProcessDescriptionHeader
            title="Pagamentos"
            subtitle="Boletos e contas de consumo"
            description="Para pagamentos de boletos e contas de consumo como agua, luz, cartao de crédito, etc."
          />
          <Divider />
          <Grid container className={styles.optionsSubheader}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Grid container>
                  <Typography>Seu saldo:&nbsp;</Typography>
                  <AccountBalance variant="body1" show={showBalance} />
                </Grid>
              </Grid>

              <Grid item>
                <ShowBalanceButton
                  showBalance={showBalance}
                  onClick={onShowBalanceButtonClick}
                />
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>}
        main={
          <React.Fragment>
            <Box className="barCodeSubheader">
              <Grid>
                <TextField multiline rows="2" placeholder='' label='Codigo de Barras' value={barCode} onChange={onBarCodeChange}></TextField>
                {/* <Box>
                    <Typography variant="body2">
                      confira
                    </Typography>
                  </Box> */}
              </Grid>
              {/* <Grid container justify="space-between" alignItems="center">
                    <Typography variant="subtitle2">{agency}</Typography>
                    <Typography className={styles.fieldValue} variant="subtitle2"> R$ {value}</Typography>
                </Grid> */}
            </Box>
            <Box marginTop="20px">
              <Typography variant="caption">Use a câmera</Typography>
            </Box>
            <Box display="flex" className={styles.optionsSubheader}>
              <Box className={styles.btn}>
                <Button
                  size="large"
                  palette="secondary"
                  startIcon={<CameraAltOutlined className={styles.img} />}
                  onClick={onScanBarCodeClick}
                ><span>Ler codigo de barras</span></Button>
              </Box>
              {/* <Box className={styles.btn}>
                  <Button 
                  size="large"
                  palette="secondary"
                  startIcon={<img className={styles.img} src={QrCodeIcon} alt=""></img>}
                  onClick={onScanBarCodeClick}
                  ><span>conta FIT QR Code</span></Button>
              </Box>
              <Box className={styles.btn}>
                  <Button 
                  size="large"
                  palette="secondary"
                  startIcon={<img className={styles.img} src={PixIcon} alt=""></img>}
                  onClick={onScanBarCodeClick}
                  ><span>PIX QR Code</span></Button>
              </Box> */}
            </Box>
            {/* <Grid className={styles.btnDisplay}>
              <ButtonWithFloatingIcon icon={bgClearButton}>Outros pagamentos</ButtonWithFloatingIcon>
            </Grid> */}
          </React.Fragment>
        }
        footer={<ProcessPageFooter
          primaryButton={
            <Button
              endIcon={<KeyboardArrowRight color="secondary" />}
              onClick={onNextButtonClick}
            >
              {nextLabel}
            </Button>
          }
        />}
      ></ProcessPageLayout>
    </PageContainer>
  );
}