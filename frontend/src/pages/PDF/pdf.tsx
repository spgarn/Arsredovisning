import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { observer } from 'mobx-react-lite';
import * as info from '../../info/info.json';
import fontRegular from '../../fonts/Comfortaa-Light.ttf';
import fontBold from '../../fonts/Comfortaa-Bold.ttf';
import type CompanyStore from '../../stores/CompanyStore';
import Line from '../components/Line';
import Result from './Result';
import { formatDate } from '../../functions/formatting';
import BalanceAssets from './BalanceAssets';
import BalanceEquity from './BalanceEquity';

Font.register({ family: 'ComfortaaRegular', src: fontRegular });
Font.register({ family: 'ComfortaaBold', src: fontBold });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    fontFamily: 'ComfortaaRegular',
    color: '#191919',
  },
  section: {
    marginTop: '10px',
    padding: '10px 30px',
    flexGrow: 1,
    textAlign: 'left',
    lineHeight: 1.4,
  },
  front: {
    marginTop: '50px',
    padding: '50px',
    flexGrow: 1,
    textAlign: 'center',
    lineHeight: 1.4,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '50px',
    borderTop: '1px black solid',
    width: '80%',
    fontSize: '10px',
    padding: '4px 0px',
  },
  h1: {
    fontSize: '24px',
  },
  h2: {
    fontSize: '18px',
    marginTop: '18px',
  },
  h3: {
    fontSize: '14px',
    marginTop: '14px',
  },
  h4Bold: {
    fontSize: '11px',
    marginTop: '11px',
    fontWeight: 'bolder',
    fontFamily: 'ComfortaaBold',
  },
  h4: {
    fontSize: '9px',
    marginTop: '10px',
    color: '#808080',
  },

  areaOne: {
    minWidth: '40%',
    textAlign: 'left',
    fontSize: '10px',
  },
  areaTwo: {
    width: '15%',
    textAlign: 'right',
    fontSize: '8px',
  },
  areaThree: {
    width: '15%',
    textAlign: 'right',
    fontSize: '8px',
  },
  areaFour: {
    width: '15%',
    textAlign: 'right',
    fontSize: '8px',
  },
  areaFive: {
    width: '15%',
    textAlign: 'right',
    fontSize: '8px',
  },
});

// Create Document Component
const Pdf = observer(({ companyStore }: { companyStore: CompanyStore }) => {
  const { company } = companyStore;

  return (
    <Document language="sv">
      <Page size="A4" style={styles.page}>
        <View style={styles.front}>
          <Text style={styles.h1}>{company.info.name}</Text>
          <Text style={{ marginBottom: '50px', ...styles.h2 }}>
            {company?.info?.registrationNumber}
          </Text>
          <Text style={styles.h2}>{info.fiscal_year_text}</Text>
          <Text style={styles.h2}>{`${formatDate(
            company.fiscalYears.currentStart
          )} - ${formatDate(company.fiscalYears.currentEnd)}`}</Text>
          <Text style={styles.h4}>{info.presentation_ceo_text}</Text>
          <Text style={styles.h4}>{info.round_up_method}</Text>
          <Text style={{ marginTop: '24px', ...styles.h4 }}>
            {info.confirmation_certificate}
          </Text>
          <Text style={{ marginTop: '24px', ...styles.h4 }}>
            {info.director_approve_text}
          </Text>
        </View>
        <View break style={styles.section}>
          <Text style={styles.h2}>F??rvaltningsber??ttelse</Text>
          <Text style={styles.h3}>Verksamheten</Text>
          <Text style={styles.h4Bold}>Allm??nt om verksamheten</Text>
          <Text style={styles.h4}>{info.year_text}</Text>

          {/* Fler??rs??versikt */}
          <Text style={styles.h3}>Fler??rs??versikt</Text>
          {/* Years */}
          <Line
            areaFour={`${formatDate(company.fiscalYears.currentStart)}
              -${formatDate(company.fiscalYears.currentEnd)}`}
            areaFive={`${formatDate(company.fiscalYears.previousStart)}
            -${formatDate(company.fiscalYears.previousEnd)}`}
            border
          />

          {/* Nettooms??ttning */}
          <Line areaOne="Nettooms??ttning" areaFour="123 123" areaFive="0" />

          {/* resultat efter finansiella poster */}
          <Line
            areaOne="Resultat efter finansiella poster"
            areaFour="321 321"
            areaFive="1 214"
          />

          {/* Soliditet */}
          <Line areaOne="Soliditet (%)" areaFour="38" areaFive="7" />

          {/* Description changes year -1 to 0 */}
          <Text style={styles.h4}>
            {'Bolaget har under 2020 ing??tt ett uppdragsavtal avseende redovisningstj??nster' +
              'vilket har p??verkat oms??ttning starkt positivt.'}
            Uppdragsavtalet motsvarar en heltidstj??nst och fortl??pt under hela
            r??kenskaps??ret.
          </Text>

          {/* F??r??ndring i egent kapital */}
          <Text style={styles.h3}>F??r??ndringar i eget kapital</Text>

          {/* aktiekapital */}
          <Line
            areaTwo="Aktiekapital"
            areaThree={`Balanserat
              resultat`}
            areaFour={`??rets
            resultat`}
            areaFive="Totalt"
            border
          />

          {/* vid ??rets ing??ng */}
          <Line
            areaOne="Vid ??rets ing??ng"
            areaTwo="50 000"
            areaThree="0"
            areaFour="1 073"
            areaFive="51 073"
          />

          {/* Balanseras i en ny r??kning */}
          <Line
            areaOne="Balanseras i en ny r??kning"
            areaThree="1 073"
            areaFour="-1 073"
            areaFive="0"
          />

          {/* ??rets resultat */}
          <Line
            areaOne="??rets resultat"
            areaFour="485 281"
            areaFive="485 281"
          />
          {/* Vid ??rets utg??ng */}
          <Line
            areaOne="Vid ??rets ing??ng"
            areaTwo="50 000"
            areaThree="0"
            areaFour="485 281"
            areaFive="485 281"
          />

          {/* Resultatdispotions */}
          <Text style={styles.h3}>Resultatdispotion</Text>

          {/* St??ende medel */}
          <Line areaOne="Styrelsen och VD f??resl??r att till f??rfogande st??ende medel" />

          {/* Balanserat resultat */}
          <Line areaOne="Balanserat resultat" areaFive="1 073" />

          {/* ??rets resultat */}
          <Line areaOne="??rets resultat" areaFive="485 281" />

          {/* Summa */}
          <Line areaOne="Summa" areaFive="486 354" />

          {/* Disponeras */}
          <Line areaOne="Disponeras enligt f??ljande" />

          {/* Utdelas */}
          <Line areaOne="Utdelas till aktie??gare" areaFive="177 100" />

          {/* Balanseras i ny r??kning */}
          <Line areaOne="Balanseras i ny r??kning" areaFive="309 254" />

          {/* Summa */}
          <Line areaOne="Summa" areaFive="486 354" />

          {/* Text regelverk */}
          <Text style={styles.h4}>
            Med h??nvisning till ovanst??ende och vad som i ??vrigt kommit till
            styrelsens k??nnedom ??r det styrelsens bed??mning att utdelningen ??r
            f??rsvarbar (enligt ABL 17 kap 3 ??) med tanke p?? de krav som
            verksamhetens art och omfattning samt risker st??ller p?? storleken av
            bolagets egna kapital, konsolideringsbehov, likviditet och st??llning
            i ??vrigt.
          </Text>
        </View>
        <View break style={styles.section}>
          {/* Resultatr??kning */}
          <Text style={styles.h2}>Resultatr??kning</Text>
          <Line
            areaThree={`not
            1`}
            areaFour={`${formatDate(company.fiscalYears.currentStart)}
            -${formatDate(company.fiscalYears.currentEnd)}`}
            areaFive={`${formatDate(company.fiscalYears.previousStart)}
            -${formatDate(company.fiscalYears.previousEnd)}`}
            border
          />

          <Result result={company.result} />
        </View>

        <View break style={styles.section}>
          {/* Balansr??kning */}
          <Text style={styles.h2}>Balansr??kning</Text>
          <Line
            areaThree={`not
            1`}
            areaFour={`${formatDate(company.fiscalYears.currentStart)}
            -${formatDate(company.fiscalYears.currentEnd)}`}
            areaFive={`${formatDate(company.fiscalYears.previousStart)}
            -${formatDate(company.fiscalYears.previousEnd)}`}
            border
          />

          <BalanceAssets balance={company.balance?.assets} />
        </View>
        <View break style={styles.section}>
          {/* Balansr??kning */}
          <Text style={styles.h2}>Balansr??kning</Text>
          <Line
            areaThree={`not
            1`}
            areaFour={`${formatDate(company.fiscalYears.currentStart)}
            -${formatDate(company.fiscalYears.currentEnd)}`}
            areaFive={`${formatDate(company.fiscalYears.previousStart)}
            -${formatDate(company.fiscalYears.previousEnd)}`}
            border
          />

          {/* Eget kapital och skulder */}
          <BalanceEquity balance={company.balance?.equity} />
        </View>

        <View break style={styles.section}>
          {/* Noter */}
          <Text style={styles.h2}>Noter</Text>
          <Text style={styles.h3}>Not 1 - Redovisningsprinciper</Text>
          <Text style={styles.h4}>
            {`??rsredovisningen ??r uppr??ttad i enlighet med ??rsredovisningslagen och Bokf??ringsn??mndens allm??nna
            r??d (BFNAR 2016:10) om ??rsredovisning i mindre f??retag.
            Nyckeltalsdefinitioner
            Nettooms??ttning
            R??relsens huvudint??kter, fakturerade kostnader, sidoint??kter samt int??ktskorrigeringar.
            Resultat efter finansiella poster
            Resultat efter finansiella int??kter och kostnader men f??re bokslutsdispositioner och skatter.
            Soliditet
            Justerat eget kapital (eget kapital och obeskattade reserver med avdrag f??r uppskjuten skatt) i procent av balansomslutningen.`}
          </Text>
        </View>

        <View break style={styles.section}>
          {/* Underskrifter */}
          <Text style={styles.h2}>Underskrifter</Text>
          <Text style={styles.h4}>
            {`
            ??rsredovisning f??r ${company.info.name}, ${
              company.info.registrationNumber
            }
            Avseende r??kenskaps??ret ${formatDate(
              company.fiscalYears.currentEnd
            )} - ${formatDate(company.fiscalYears.currentEnd)}`}
          </Text>
        </View>

        <View fixed style={styles.footer}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>{company.info.name}</Text>
            <Text>{company.info.registrationNumber}</Text>
          </View>
          <Text
            render={({ pageNumber, totalPages }) =>
              `sida ${pageNumber} av ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
});

export default Pdf;
