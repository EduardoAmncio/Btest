import React from "react";
import { Redirect } from "react-router-dom";

import "./VoucherDetail.scss";

interface VoucherDetailProps {
  redirectRoute: string;
  imagePath: string;
  title: string;
}

export const VoucherDetail:React.FC<VoucherDetailProps> = ({ title, imagePath, redirectRoute }: VoucherDetailProps) => {

  const [redirect, setRedirect] = React.useState(false);

  const handleOnClick = () => {
    setRedirect(true);
  }

  return (

    <div className="containerVoucherDetail">  

      {redirect ? <Redirect to={redirectRoute} /> : null}
    
          <div className="propButtonVoucherDetail" onClick={handleOnClick}>
            <div className="iconVoucherDetail">
            <img src={imagePath} className="icon" alt="bgButton" />
            </div>

            <div className="label">
              {title}
            </div>
          </div>

    </div>
  );
};
