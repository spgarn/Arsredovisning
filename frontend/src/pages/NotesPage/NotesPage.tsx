import {
  Button, Switch, TextareaAutosize, TextField,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';
import MultiRow from '../../components/MultiRow';
import Note from '../../components/Notes';
import Page from '../../components/Page';
import SubTitle from '../../components/SubTitle';
import { formatDate } from '../../functions/formatting';
import useStore from '../../hooks/useStore';

const NotesPage = observer(() => {
  const { companyStore } = useStore();

  const [activeNotes, setActiveNotes] = useState(new Set());

  const onClick = (e: any) => {
    setActiveNotes((previousState) => new Set([...previousState, e.target.name]));
  };

  return (
    <Page>
      <Card>
        <SubTitle subTitle="Noter" />
        <Note isActive title="Redovisningsprinciper">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />
          <MultiRow isBig isBold isSum isNoBorder subTitle="Tjänste- och entreprenaduppdrag" />
          <MultiRow isBold isSum isNoBorder subTitle="Utför företaget tjänste- och/eller entreprenaduppdrag till fast pris?" current={<Switch />} />
          <MultiRow isBig isBold isSum isNoBorder subTitle="Egentillverkade varor" />
          <MultiRow isBold isSum isNoBorder subTitle="Tillverkar företaget egna varor?" current={<Switch />} />
        </Note>
        <Note isActive title="Medelantal anställda">
          <MultiRow subTitle="" current={`${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(companyStore.company.fiscalYears.currentEnd)}`} />
          <MultiRow
            subTitle="Medelantal anställda under året"
            current={(
              <TextField label="Måste anges" />
)}
          />
        </Note>
        <Note onClick={(e) => onClick(e)} isActive={activeNotes.has('Ställda säkerheter')} title="Ställda säkerheter">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />

        </Note>
        <Note onClick={(e) => onClick(e)} isActive={activeNotes.has('Eventualförpliktelser')} title="Eventualförpliktelser">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />

        </Note>
        <Note onClick={(e) => onClick(e)} isActive={activeNotes.has('Exceptionella intäkter och kostnder')} title="Exceptionella intäkter och kostnder">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />

        </Note>
        <Note onClick={(e) => onClick(e)} isActive={activeNotes.has('Tillgångar, Avsättningar och Skulder som avser flera poster')} title="Tillgångar, Avsättningar och Skulder som avser flera poster">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />

        </Note>
        <Note onClick={(e) => onClick(e)} isActive={activeNotes.has('Ekonomiska arrangemang som inte redovisas i balansräkningen')} title="Ekonomiska arrangemang som inte redovisas i balansräkningen">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />

        </Note>
        <Note onClick={(e) => onClick(e)} isActive={activeNotes.has('Övriga kommentarer')} title="Övriga kommentarer">
          <MultiRow isBig isBold isSum isNoBorder subTitle="Regelverk" current={<TextareaAutosize cols={50} minRows={5} minLength={200} />} />

        </Note>

        <NavLink to="/year-story">
          <div style={{ display: 'grid', justifyContent: 'center', marginTop: 12 }}>
            <Button variant="contained">Fortsätt</Button>
          </div>
        </NavLink>
      </Card>
    </Page>
  );
});
export default NotesPage;
