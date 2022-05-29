import {
  Checkbox,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { NOTES } from './NotesPage';

interface IProps {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
}

export const NotesSelector = ({ value, onChange }: IProps) => {
  return (
    <FormControl sx={{ minWidth: '250px', maxWidth: '50%' }}>
      <InputLabel id="notes-selector">Välj noter</InputLabel>
      <Select
        labelId="notes-selector"
        multiple
        input={<OutlinedInput label="Välj noter" />}
        value={value}
        onChange={onChange}
        renderValue={(selected) => (
          <Grid container spacing={6}>
            {selected.map((value) => (
              <Grid item key={value}>
                <Chip label={value} />
              </Grid>
            ))}
          </Grid>
        )}
      >
        {Object.entries(NOTES).map(([key, { title }]) => (
          <MenuItem key={key} value={title}>
            <Checkbox checked={value.includes(title)} />
            <ListItemText primary={title} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
