import { Text, StyleSheet } from '@react-pdf/renderer';

interface IProps {
  areaOne?: React.ReactNode;
  areaTwo?: React.ReactNode;
  areaThree?: React.ReactNode;
  areaFour?: React.ReactNode;
  areaFive?: React.ReactNode;
  border?: boolean;
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

const ResultLine = (props: IProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '8px',
      borderBottom: props.border && '1px black solid',
    }}
  >
    <Text style={styles.areaOne}>{props.areaOne}</Text>
    <Text style={styles.areaThree}>{props.areaThree}</Text>
    <Text style={styles.areaFour}>{props.areaFour}</Text>
    <Text style={styles.areaFive}>{props.areaFive}</Text>
  </div>
);

export default ResultLine;
