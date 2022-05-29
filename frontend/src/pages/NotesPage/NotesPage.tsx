import { Box, Button, SelectChangeEvent } from '@mui/material';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { useCallback, useState } from 'react';
import Card from '../../components/Card';
import Page from '../../components/Page';
import StyledNavLink from '../../components/StyledNavLink';
import SubTitle from '../../components/SubTitle';
import { Notes } from '../../functions/interfaces';
import useStore from '../../hooks/useStore';
import { NoteContent } from './NoteContent';
import { NotesSelector } from './NotesSelector';
import { NoteWrapper } from './NoteWrapper';

export const NOTES: Record<keyof Notes, { title: string }> = {
  accountingPrinciples: {
    title: 'Redovisningsprinciper',
  },
  averageAmountEmployees: {
    title: 'Medelantal anställda',
  },
  providedCollateral: {
    title: 'Ställda säkerheter',
  },
  contingentLiabilities: {
    title: 'Eventualförpliktelser',
  },
  exceptionalIncomeExpenses: {
    title: 'Exceptionella intäkter och kostnader',
  },
  assetsProvisionsLiabilities: {
    title: 'Tillgångar, avsättningar och skulder som avser flera poster',
  },
  financialArrangements: {
    title: 'Ekonomiska arrangemang som inte redovisas i balansräkningen',
  },
  otherComments: {
    title: 'Övriga kommentarer',
  },
};

const titleToKey = Object.entries(NOTES).reduce(
  (acc, [key, { title }]) => ({
    ...acc,
    [title]: key,
  }),
  {}
);

const NotesPage = observer(() => {
  const { companyStore } = useStore();
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);

  const handleChange = useCallback(
    ({ target: { value } }: SelectChangeEvent<typeof selectedNotes>) => {
      setSelectedNotes(typeof value === 'string' ? value.split(',') : value);
    },
    []
  );

  const handleSubmit = useCallback((data) => {
    console.log({ data });
  }, []);

  return (
    <>
      <Page>
        <Card>
          <SubTitle subTitle="Noter" />

          <NotesSelector value={selectedNotes} onChange={handleChange} />

          <Formik
            onSubmit={handleSubmit}
            initialValues={{ ...companyStore.company.notes }}
          >
            {({ dirty }) => (
              <Form>
                {selectedNotes.map((title) => (
                  <NoteWrapper key={titleToKey[title]} title={title}>
                    <NoteContent noteKey={titleToKey[title]} title={title} />
                  </NoteWrapper>
                ))}

                <Box mt={12} textAlign="center">
                  <Button disabled={!dirty} type="submit" variant="contained">
                    spara
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Card>
      </Page>

      <StyledNavLink to="/year-story">
        <Button variant="contained">Fortsätt</Button>
      </StyledNavLink>
    </>
  );
});
export default NotesPage;
