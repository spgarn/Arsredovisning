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

const Line:React.FC<Props> = (p: Props) => {
  const { border } = p;
  const { areaOne } = p;
  const { areaTwo } = p;
  const { areaThree } = p;
  const { areaFour } = p;
  const { areaFive } = p;
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', marginTop: '8px', padding: '2px 0px', borderBottom: border && '1px black solid',
    }}
    >
      <Text style={styles.areaOne}>{areaOne}</Text>
      <Text style={styles.areaTwo}>{areaTwo}</Text>
      <Text style={styles.areaThree}>{areaThree}</Text>
      <Text style={styles.areaFour}>
        {areaFour}
      </Text>
      <Text style={styles.areaFive}>
        {areaFive}
      </Text>
    </div>
  );
};

export default Line;
