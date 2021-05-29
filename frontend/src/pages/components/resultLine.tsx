import {
  Text, StyleSheet,
} from '@react-pdf/renderer';

interface Props {
  areaOne?:any;
  areaTwo?:any;
  areaThree?:any;
  areaFour?:any;
  areaFive?:any;
  border?:boolean
}

const styles = StyleSheet.create({
  areaOne: {
    fontFamily: 'ComfortaaBold',
    minWidth: '55%',
    textAlign: 'left',
    fontSize: '10px',
  },
  areaThree: {
    width: '13%',
    textAlign: 'right',
    fontSize: '8px',
  },
  areaFour: {
    width: '16%',
    textAlign: 'right',
    fontSize: '8px',
  },
  areaFive: {
    width: '16%',
    textAlign: 'right',
    fontSize: '8px',
  },
});

const resultLine = (p: Props) => (
  <div style={{
    display: 'flex', flexDirection: 'row', marginTop: '8px', borderBottom: p.border && '1px black solid',
  }}
  >
    <Text style={styles.areaOne}>{p.areaOne}</Text>
    <Text style={styles.areaThree}>{p.areaThree}</Text>
    <Text style={styles.areaFour}>
      {p.areaFour}
    </Text>
    <Text style={styles.areaFive}>
      {p.areaFive}
    </Text>
  </div>
);

export default resultLine;
