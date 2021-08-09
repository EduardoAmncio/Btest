import React from "react";
import { Typography, FormControlLabel, Checkbox, Box } from "@material-ui/core";
import { useStyles } from "./TermsText.style";

interface TermsTextProps {
  termsAcceptCheckBox: (event: any) => void;
  valueCheckBox: boolean;
}

export const TermsText = ({
  valueCheckBox,
  termsAcceptCheckBox,
}: TermsTextProps) => {
  const styles = useStyles();

  return (
    <Box
      className={styles.wrapper}
      flexDirection={"column"}
      alignItems="center"
    >
      <Box>
        <Typography variant="caption">{terms}</Typography>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={valueCheckBox}
            onChange={termsAcceptCheckBox}
            name="check"
            color="primary"
          />
        }
        label="Concordo com os termos"
      />
    </Box>
  );
};

const terms = `O “Termo de Uso” é o contrato eletrônico que visa limitar a
responsabilidade, direcionar a forma de utilização do seu produto por
parte dos clientes, assim como esclarecer possíveis dúvidas que seu
cliente tenha sobre o funcionamento do seu software/produto. O Termo de
Uso estabelece as regras de utilização do aplicativos-site, nele contém
uma descrição ampla do site- aplicativo, descreve o produto/serviço,
informa a qual empresa pertence, explica as nomenclaturas adotada para
os itens essenciais, delimita como o usuário deverá utilizar o
aplicativo-site, quais são as vedações para a utilização, por fim, a
quem pertence os direitos autorais, além de inúmeras outras
possibilidades de cláusulas que poderão conter esse documento. Antes
mesmo de indicarmos quais cláusulas devemos incluir na Política de
Privacidade e no termo de uso, devemos entender que para que esses
documentos tenham validade jurídica precisamos estabelecer as cláusulas
de modo coerente e sem abusividade, já que esses documentos são
contratos de adesão (significa que há imposição dos termos e condições
de uso do produto ou serviço pela Startup aos usuários) e, caso seja
considerado abusivo, serão desconsiderados em caso de controvérsia
judicial, deixando de surtir o efeito desejado. Indicamos que nos
“Termos de Uso” contenham as seguintes cláusulas: A) Defina os termos a
serem usados no documento. Lembre-se que o usuário, muitas vezes, não
tem conhecimento técnico sobre programação ou tecnologia, por isso é
importante que você explique a ele de forma clara, objetiva e específica
o significado de cada um dos termos utilizados para para a execução do
serviços oferecidos ou utilização do produto. B) Delimite o escopo do
serviço/produto a ser oferecido via site ou aplicativo. Informa os
usuários o que eles estão utilizando ou adquirindo, somente isso evitará
reclamações relacionadas ao serviço ou produto. Seja transparente com o
seu cliente. C) Informe as responsabilidades da sua empresa e do
usuário. Defina a responsabilidade de cada uma das partes. Indicamos a
utilização moderada das cláusulas que limitam responsabilidades, tais
como as cláusulas de “disclaimer” (Todas as opiniões expressadas nos
comentários deste site-aplicativo não expressam a opinião da Startup,
mas tão somente a opinião de quem os escreveu”) ou, então, as
excludentes de responsabilidade (Exemplo de cláusula: A Startup não se
responsabiliza por qualquer dano ou prejuízo com envio de informações ou
de conteúdo publicitário que não tenham sido disparados pela própria
Startup, sejam esses últimos legítimos ou indesejados (Spam), e também
não se responsabiliza pelo conteúdo das opiniões postadas no aplicativo
ou site). Elas são uma ótima forma de limitação de responsabilidade,
gerando menos riscos a startup, porém utilize-a com moderação para que
seu contrato não seja anulado por ser excessivamente oneroso a uma das
partes quando numa futura ação judicial e, com isso, o objetivo da
política de privacidade ou termo de uso não seja cumprido. D) Divulgue a
quem pertence os direitos autorais. Inclua cláusula sobre direitos
autorais para impossibilitar o uso da tecnologia desenvolvida pela sua
Startup por terceiros não autorizados. E) Disponha como se dará o
processo de compra pelo usuário. Informe como será feita a aquisição do
seu serviço/produto, como será o processo de devolução ou rescisão do
contrato, se haverá reembolso dos valores pagos e como será feito, além
disso como deverá proceder para cancelar o serviço. Caso o seu produto
ou serviço seja para adultos, alerte sobre a impossibilidade de uso para
menores.`;
