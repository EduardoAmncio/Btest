import React from "react";

export type ApplyMask = (pureValue: string) => string;

export const useMask = (
  applyMask: ApplyMask,
  initialValue: string = ""
): [maskedValue: string, setMaskedValue: (value: string) => void] => {
  const [maskedValue, setMaskedValue] = React.useState(applyMask(initialValue));

  React.useEffect(() => {
    setMaskedValue(applyMask(maskedValue));
  }, [applyMask, maskedValue]);

  return [maskedValue, setMaskedValue];
};
