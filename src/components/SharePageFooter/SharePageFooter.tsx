import React from "react";
import { Box } from "@material-ui/core";
import IconBgButton from "_assets/icons/buttonBg.png";
import { ButtonWithFloatingIcon } from "../ButtonWithFloatingIcon";
import { saveLabel, shareLabel } from "constants/buttons/labels";
import { useStyles } from "./SharePageFooter.style";

interface SharePageFooterProps {
  base64: string;
}
export const SharePageFooter: React.FC<SharePageFooterProps> = ({
  base64,
}) => {
  const styles = useStyles();

  const shareReceipt = () => {
    const file = base64toBlob();
    const shareData = {
      files: [file],
      title: "COMPROVANTE DE PAGAMENTO",
      text: "Em anexo o comprovante de pagamento!",
      url: "https://www.fitbank.com.br/"
    }
    navigator.share(shareData);
  }

  const base64toBlob = () => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });
    return new File([blob], "Comprovante.png", { type: "image/png" });
  }

  const saveReceipt = () => {
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:image/png;base64,' + base64;
    downloadLink.download = "Comprovante.png";
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <Box className={styles.buttonsWrapper}>
      <ButtonWithFloatingIcon
        size={"large"}
        icon={IconBgButton}
        onClick={saveReceipt}
      >
        {saveLabel}
      </ButtonWithFloatingIcon>
      <ButtonWithFloatingIcon
        size={"large"}
        icon={IconBgButton}
        onClick={shareReceipt}
      >
        {shareLabel}
      </ButtonWithFloatingIcon>
    </Box>
  );
};
