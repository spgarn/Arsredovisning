import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import * as companyJson from '../info/company.json'
import * as info from '../../src/info/info.json'
import font from '../fonts/Comfortaa-Regular.ttf'
import { Company } from '../functions/interfaces';
import { infoStore } from '../functions/infoStore'




Font.register({  family: 'Comfortaa', src: font  });

const company:Partial<Company> = infoStore.company



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
    textAlign: 'center',
    lineHeight: 1.4
  },
  h1: {
    fontSize: '24px',
  },
  h2: {
    fontSize: '18px',
    marginTop: '18px',
  },
  h3: {
    fontSize: '10px',
    marginTop: '14px',
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
    padding: '8px 0px'
  }
});
// Create Document Component
export const MyDocument = () => (
  <Document language={'sv'}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.h1}>{company?.company_info?.name}</Text>
        <Text style={{ marginBottom: '50px', ...styles.h2 }}>{company?.company_info?.registration_number}</Text>
        <Text style={styles.h2}>{info.fiscal_year_text}</Text>
        <Text style={styles.h2}>{company?.company_info?.fiscal_year_now}</Text>
        <Text style={styles.h3}>{info.presentation_ceo_text}</Text>
        <Text style={styles.h3}>{info.round_up_method}</Text>
        <Text style={{ marginTop: '24px', ...styles.h3 }}>{info.confirmation_certificate}</Text>
        <Text style={{ marginTop: '24px', ...styles.h3 }}>{info.director_approve_text}</Text>
      </View>
      <View break style={styles.section}>
        <Text style={styles.h1}>Förvaltningsberättelse</Text>
      </View>
      <View fixed style={styles.footer} >
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text>{company?.company_info?.name}</Text>
          <Text>{company?.company_info?.registration_number}</Text>
        </View>
        <Text render={({ pageNumber, totalPages }) => (
          `sida ${pageNumber} av ${totalPages}`
        )} />

      </View>
    </Page>
  </Document>
);