import { Paper, Switch, Typography } from '@mui/material';

type Props = {
  title:string,
  isActive?:boolean
  onClick?:(e:any) => void
}

const Note:React.FC<Props> = ({
  title, isActive = false, onClick, children,
}) => (
  <Paper elevation={5} style={{ padding: '24px', backgroundColor: '#f3f0f0', marginTop: '24px' }}>
    {isActive ? (
      <>
        <Typography variant="h5">{title}</Typography>
        {children}
      </>
    ) : (
      <div style={{ display: 'flex', gap: '120px', alignItems: 'center' }}>
        <div>{title}</div>
        <Switch name={title} onClick={onClick} />
      </div>

    )}
  </Paper>
);

export default Note;
