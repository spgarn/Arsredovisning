import {
  Page, Text, View, Document, StyleSheet, Font,
} from '@react-pdf/renderer';
import { observer } from 'mobx-react-lite';
import * as info from '../info/info.json';
import font from '../fonts/Comfortaa-Regular.ttf';
import type CompanyStore from '../stores/CompanyStore';
import Line from './components/line';
import { AccountBalance } from '../functions/interfaces';
import Result from './Result';

Font.register({ family: 'Comfortaa', src: font });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    fontFamily: 'Comfortaa',

  },
  section: {
    marginTop: '10px',
    padding: '50px',
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
    color: 'black',
  },
  h4: {
    fontSize: '9px',
    marginTop: '10px',
    color: '#808080',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '75px',
    borderTop: '1px black solid',
    width: '80%',
    fontSize: '10px',
    padding: '8px 0px',
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
          <Text style={{ marginBottom: '50px', ...styles.h2 }}>{company?.info?.registrationNumber}</Text>
          <Text style={styles.h2}>{info.fiscal_year_text}</Text>
          <Text style={styles.h2}>{`${company.fiscalYears.currentStart} - ${company.fiscalYears.currentEnd}`}</Text>
          <Text style={styles.h4}>{info.presentation_ceo_text}</Text>
          <Text style={styles.h4}>{info.round_up_method}</Text>
          <Text style={{ marginTop: '24px', ...styles.h4 }}>{info.confirmation_certificate}</Text>
          <Text style={{ marginTop: '24px', ...styles.h4 }}>{info.director_approve_text}</Text>
        </View>
        <View break style={styles.section}>
          <Text style={styles.h2}>Förvaltningsberättelse</Text>
          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Verksamheten</Text>
          <Text style={styles.h4Bold}>Allmänt om verksamheten</Text>
          <Text style={styles.h4}>{info.year_text}</Text>

          {/* Flerårsöversikt */}
          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Flerårsöversikt</Text>
          {/* Years */}
          <Line
            areaFour={`${company.fiscalYears.currentStart}
              -${company.fiscalYears.currentEnd}`}
            areaFive={`${company.fiscalYears.previousStart}
            -${company.fiscalYears.previousEnd}`}
            border
          />

          {/* Nettoomsättning */}
          <Line areaOne="Nettoomsättning" areaFour="123 123" areaFive="0" />

          {/* resultat efter finansiella poster */}
          <Line areaOne="Resultat efter finansiella poster" areaFour="321 321" areaFive="1 214" />

          {/* Soliditet */}
          <Line areaOne="Soliditet (%)" areaFour="38" areaFive="7" />

          {/* Description changes year -1 to 0 */}
          <Text style={styles.h4}>
            {'Bolaget har under 2020 ingått ett uppdragsavtal avseende redovisningstjänster'
            + 'vilket har påverkat omsättning starkt positivt.'}
            Uppdragsavtalet motsvarar en heltidstjänst och fortlöpt under hela räkenskapsåret.
          </Text>

          {/* Förändring i egent kapital */}
          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Förändringar i eget kapital</Text>

          {/* aktiekapital */}
          <Line
            areaTwo="Aktiekapital"
            areaThree={`Balanserat
              resultat`}
            areaFour={`Årets
            resultat`}
            areaFive="Totalt"
            border
          />

          {/* vid årets ingång */}
          <Line
            areaOne="Vid årets ingång"
            areaTwo="50 000"
            areaThree="0"
            areaFour="1 073"
            areaFive="51 073"
          />

          {/* Balanseras i en ny räkning */}
          <Line
            areaOne="Balanseras i en ny räkning"
            areaThree="1 073"
            areaFour="-1 073"
            areaFive="0"
          />

          {/* Årets resultat */}
          <Line
            areaOne="Årets resultat"
            areaFour="485 281"
            areaFive="485 281"
          />
          {/* Vid årets utgång */}
          <Line
            areaOne="Vid årets ingång"
            areaTwo="50 000"
            areaThree="0"
            areaFour="485 281"
            areaFive="485 281"
          />

          {/* Resultatdispotions */}
          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Resultatdispotion</Text>

          {/* Stående medel */}
          <Line
            areaOne="Styrelsen och VD föreslår att till förfogande stående medel"
          />

          {/* Balanserat resultat */}
          <Line
            areaOne="Balanserat resultat"
            areaFive="1 073"
          />

          {/* Årets resultat */}
          <Line
            areaOne="Årets resultat"
            areaFive="485 281"
          />

          {/* Summa */}
          <Line
            areaOne="Summa"
            areaFive="486 354"
          />

          {/* Disponeras */}
          <Line
            areaOne="Disponeras enligt följande"
          />

          {/* Utdelas */}
          <Line
            areaOne="Utdelas till aktieägare"
            areaFive="177 100"
          />

          {/* Balanseras i ny räkning */}
          <Line
            areaOne="Balanseras i ny räkning"
            areaFive="309 254"
          />

          {/* Summa */}
          <Line
            areaOne="Summa"
            areaFive="486 354"
          />

          {/* Text regelverk */}
          <Text style={styles.h4}>
            Med hänvisning till ovanstående och vad som i övrigt kommit till styrelsens kännedom
            är det styrelsens bedömning att utdelningen är försvarbar (enligt ABL 17 kap 3 §) med
            tanke på de krav som verksamhetens art och omfattning samt risker ställer på storleken
            av bolagets egna kapital, konsolideringsbehov, likviditet och ställning i övrigt.
          </Text>

        </View>
        <View style={styles.section}>
          {/* Resultaträkning */}
          <Text style={{ fontWeight: 'bold', ...styles.h2 }}>Resultaträkning</Text>
          <Line
            areaThree={`not
            1`}
            areaFour={`${company.fiscalYears.currentStart}
            -${company.fiscalYears.currentEnd}`}
            areaFive={`${company.fiscalYears.previousStart}
            -${company.fiscalYears.previousEnd}`}
            border
          />

          <Result results={company.accounts} />

        </View>

        <View break style={styles.section}>
          {/* Balansräkning */}
          <Text style={{ fontWeight: 'bold', ...styles.h2 }}>Balansräkning</Text>
          <Line
            areaThree={`not
            1`}
            areaFour={`${company.fiscalYears.currentStart}
            -${company.fiscalYears.currentEnd}`}
            areaFive={`${company.fiscalYears.previousStart}
            -${company.fiscalYears.previousEnd}`}
            border
          />

          {/* Tillgångar */}
          <Line
            areaOne="Tillgångar"
          />
          <Line
            areaOne="Anläggningstillgångar"
          />
          <Line
            areaOne="Finansiella anläggningstillgångar"
          />

        </View>
        <View break style={styles.section}>
          {/* Balansräkning */}
          <Text style={{ fontWeight: 'bold', ...styles.h2 }}>Balansräkning</Text>
          <Line
            areaThree={`not
            1`}
            areaFour={`${company.fiscalYears.currentStart}
            -${company.fiscalYears.currentEnd}`}
            areaFive={`${company.fiscalYears.previousStart}
            -${company.fiscalYears.previousEnd}`}
            border
          />

          {/* Eget kapital och skulder */}
          <Line
            areaOne="Eget kapital och skulder"
          />
          <Line
            areaOne="Eget kapital"
          />
          <Line
            areaOne="Bundet eget kapital"
          />

        </View>

        <View break style={styles.section}>
          {/* Noter */}
          <Text style={{ fontWeight: 'bold', ...styles.h2 }}>Noter</Text>
          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Not 1 - Redovisningsprinciper</Text>
          <Text style={styles.h4}>
            {`Årsredovisningen är upprättad i enlighet med årsredovisningslagen och Bokföringsnämndens allmänna
            råd (BFNAR 2016:10) om årsredovisning i mindre företag.
            Nyckeltalsdefinitioner
            Nettoomsättning
            Rörelsens huvudintäkter, fakturerade kostnader, sidointäkter samt intäktskorrigeringar.
            Resultat efter finansiella poster
            Resultat efter finansiella intäkter och kostnader men före bokslutsdispositioner och skatter.
            Soliditet
            Justerat eget kapital (eget kapital och obeskattade reserver med avdrag för uppskjuten skatt) i procent av balansomslutningen.`}
          </Text>

        </View>

        <View break style={styles.section}>
          {/* Underskrifter */}
          <Text style={{ fontWeight: 'bold', ...styles.h2 }}>Underskrifter</Text>
          <Text style={styles.h4}>
            {`
            Årsredovisning för ${company.info.name}, ${company.info.registrationNumber}
            Avseende räkenskapsåret ${company.fiscalYears.currentEnd} - ${company.fiscalYears.currentEnd}`}
          </Text>

        </View>

        <View fixed style={styles.footer}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>{company.info.name}</Text>
            <Text>{company.info.registrationNumber}</Text>
          </View>
          <Text render={({ pageNumber, totalPages }) => (
            `sida ${pageNumber} av ${totalPages}`
          )}
          />

        </View>
      </Page>
    </Document>
  );
});

export default Pdf;
