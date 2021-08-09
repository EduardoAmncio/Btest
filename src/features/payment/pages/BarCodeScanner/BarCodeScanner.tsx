import React from "react";
import { PageContainer } from "components/PageContainer";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { LandscapeContainner } from "features/payment/components/LandscapeContainer";
import { BarcodeInfors } from "features/payment/components/BarcodeInfors";
import { Box } from "@material-ui/core";
import {useStyles} from "./BarCodeScanner.style";
import './BarCodeScanner.scss';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { findInforsPaymentByBarCode } from "features/payment/redux/actions";
import { PaymentsRoutes } from "features/payment/constants/routes";


export const BarCodeScanner: React.FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();
  const [barcode, setBarCode] = React.useState('Not Found');

  const send = async (barcode: string) => {
    dispatch(findInforsPaymentByBarCode(barcode));
    onScanCode();
  };
  const onScanCode = () => {
    history.push(PaymentsRoutes.PaymentData);
  };

  return (
    <PageContainer> 
      <LandscapeContainner>
        <BarcodeInfors/> 
      <Box className = {styles.scanner}>
        <BarcodeScannerComponent
          width={-1}
          height={0}
          onUpdate={(err, result) => {
            if (result) {
              setBarCode(result.getText());
              send(barcode);
            }
            else setBarCode('');
          }}
        />  
        </Box>   
      </LandscapeContainner> 
    </PageContainer>
  );
};