import {
  Page, Text, View, Document, StyleSheet, Font,
} from '@react-pdf/renderer';
import { observer } from 'mobx-react-lite';
import * as info from '../info/info.json';
import font from '../fonts/Comfortaa-Regular.ttf';
import type SieStore from '../stores/SieStore';

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
  AreaOne: {
    minWidth: '40%',
    textAlign: 'left',
    fontSize: '14px',
  },
  AreaTwo: {
    width: '15%',
    textAlign: 'right',
    fontSize: '10px',
  },
  AreaThree: {
    width: '15%',
    textAlign: 'right',
    fontSize: '10px',
  },
  AreaFour: {
    width: '15%',
    textAlign: 'right',
    fontSize: '10px',
  },
  AreaFive: {
    width: '15%',
    textAlign: 'right',
    fontSize: '10px',
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.AreaOne}>1</Text>
            <Text style={styles.AreaTwo}>2</Text>
            <Text style={styles.AreaThree}>3</Text>
            <Text style={styles.AreaFour}>
              {`${company.info.fiscalYearNowStart}
              -${company.info.fiscalYearNowEnd}`}
            </Text>
            <Text style={styles.AreaFive}>
              {`${company.info.fiscalYearLastStart}
              -${company.info.fiscalYearLastEnd}`}
            </Text>
          </div>
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
