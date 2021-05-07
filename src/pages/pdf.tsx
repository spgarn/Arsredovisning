import {
  Page, Text, View, Document, StyleSheet, Font,
} from '@react-pdf/renderer';
import { observer } from 'mobx-react-lite';
import * as info from '../info/info.json';
import font from '../fonts/Comfortaa-Regular.ttf';
import type SieStore from '../stores/SieStore';
import Line from './components/Line';

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
    marginTop: '50px',
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
    fontSize: '10px',
    marginTop: '10px',
    color: 'gray',
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
const Pdf = observer(({ sieStore }: { sieStore: SieStore }) => {
  const { company } = sieStore;

  return (

    <Document language="sv">
      <Page size="A4" style={styles.page}>
        <View style={styles.front}>
          <Text style={styles.h1}>{company?.info?.name}</Text>
          <Text style={{ marginBottom: '50px', ...styles.h2 }}>{company?.info?.registrationNumber}</Text>
          <Text style={styles.h2}>{info.fiscal_year_text}</Text>
          <Text style={styles.h2}>{`${company?.info?.fiscalYearNowStart} - ${company?.info?.fiscalYearNowEnd}`}</Text>
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
          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Flerårsöversikt</Text>

          {/* Flerårsöversikt */}
          {/* Years */}
          <Line
            areaFour={`${company.info.fiscalYearNowStart}
              -${company.info.fiscalYearNowEnd}`}
            areaFive={`${company.info.fiscalYearLastStart}
            -${company.info.fiscalYearLastEnd}`}
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
            Bolaget har under 2020 ingått ett uppdragsavtal avseende redovisningstjänster vilket har påverkat omsättning starkt positivt.
            Uppdragsavtalet motsvarar en heltidstjänst och fortlöpt under hela räkenskapsåret.
          </Text>

          <Text style={{ fontWeight: 'bold', ...styles.h3 }}>Förändringar i eget kapital</Text>

          {/* Förändring i egent kapital */}
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

        </View>
        <View fixed style={styles.footer}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>{company?.info?.name}</Text>
            <Text>{company?.info?.registrationNumber}</Text>
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
