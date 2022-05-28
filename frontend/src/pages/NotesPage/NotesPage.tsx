import { Button, Switch, TextareaAutosize, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
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

  return (
    <Page>
      <Card>
        <SubTitle subTitle="Noter" />
        <Note title="Redovisningsprinciper">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
          <MultiRow isBig isBold isSum isNoBorder subTitle="Tjänste- och entreprenaduppdrag" />
          <MultiRow
            isBold
            isSum
            isNoBorder
            subTitle="Utför företaget tjänste- och/eller entreprenaduppdrag till fast pris?"
            current={<Switch />}
          />
          <MultiRow isBig isBold isSum isNoBorder subTitle="Egentillverkade varor" />
          <MultiRow isBold isSum isNoBorder subTitle="Tillverkar företaget egna varor?" current={<Switch />} />
        </Note>
        <Note title="Medelantal anställda">
          <MultiRow
            subTitle=""
            current={`${formatDate(companyStore.company.fiscalYears.currentStart)} - ${formatDate(
              companyStore.company.fiscalYears.currentEnd
            )}`}
          />
          <MultiRow subTitle="Medelantal anställda under året" current={<TextField label="Måste anges" />} />
        </Note>
        <Note title="Ställda säkerheter">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
        </Note>
        <Note title="Eventualförpliktelser">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
        </Note>
        <Note title="Exceptionella intäkter och kostnder">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
        </Note>
        <Note title="Tillgångar, Avsättningar och Skulder som avser flera poster">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
        </Note>
        <Note title="Ekonomiska arrangemang som inte redovisas i balansräkningen">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
        </Note>
        <Note title="Övriga kommentarer">
          <MultiRow
            isBig
            isBold
            isSum
            isNoBorder
            subTitle="Regelverk"
            current={<TextareaAutosize cols={50} minRows={5} minLength={200} />}
          />
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
