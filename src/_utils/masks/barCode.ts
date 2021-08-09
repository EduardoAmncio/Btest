export const MaskbarCode  = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{11})(\d)/, "$1 $2 ")
    .replace(/(\d{11})(\d)/, "$1 $2\n")
    .replace(/(\d{11})(\d)/, "$1 $2 ")
    .replace(/(.\d{11})(\d)+?$/, "$1 $2");
    
