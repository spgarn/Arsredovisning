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

const Line = (p: Props) => (
  <div style={{
    display: 'flex', flexDirection: 'row', marginTop: '8px', padding: '2px 0px', borderBottom: p.border && '1px black solid',
  }}
  >
    <Text style={styles.areaOne}>{p.areaOne}</Text>
    <Text style={styles.areaTwo}>{p.areaTwo}</Text>
    <Text style={styles.areaThree}>{p.areaThree}</Text>
    <Text style={styles.areaFour}>
      {p.areaFour}
    </Text>
    <Text style={styles.areaFive}>
      {p.areaFive}
    </Text>
  </div>
);

export default Line;
