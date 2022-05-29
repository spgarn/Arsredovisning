import { styled, TextareaAutosize, TextField } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { useEffect } from 'react';
import MultiRow from '../../components/MultiRow';
import { YesOrNo } from '../../components/YesOrNo';
import { NOTES } from './NotesPage';

interface IProps {
  title: string;
  children?: React.ReactNode;
  noteKey: string;
}

const WhiteTextField = styled(TextField)({
  backgroundColor: 'white',
});

export const NoteContent = ({ noteKey, title }: IProps) => {
  const { setFieldValue } = useFormikContext();
  useEffect(() => {
    return () => {
      setFieldValue(noteKey, undefined);
    };
  }, []);

  const renderAdditionals = () => {
    switch (title) {
      case NOTES.accountingPrinciples.title:
        return (
          <>
            <MultiRow
              isBig
              isBold
              isSum
              isNoBorder
              subTitle="Tjänste- och entreprenaduppdrag"
            />
            <MultiRow
              isBig
              isSum
              isNoBorder
              subTitle="Utför företaget tjänste- och/eller entreprenaduppdrag till fast pris?"
              current={
                <Field
                  name={`${noteKey}.hasFixedPriceAssignments`}
                  component={YesOrNo}
                />
              }
            />
            <MultiRow
              isBig
              isBold
              isSum
              isNoBorder
              subTitle="Egentillverkade varor"
            />
            <MultiRow
              isBig
              isSum
              isNoBorder
              subTitle="Tillverkar företaget egna varor?"
              current={
                <Field
                  name={`${noteKey}.hasSelfMadeGoods`}
                  component={YesOrNo}
                />
              }
            />
          </>
        );
      case NOTES.averageAmountEmployees.title:
        return (
          <MultiRow
            isBig
            isSum
            isNoBorder
            subTitle="Medelantal anställda under året *"
            current={<Field name={`${noteKey}.amount`} as={WhiteTextField} />}
          />
        );
    }
  };

  return (
    <>
      {renderAdditionals()}
      <MultiRow isSum isNoBorder isBig subTitle="Kommentarer">
        <Field
          name={`${noteKey}.comment`}
          as={TextareaAutosize}
          cols={50}
          minRows={5}
          minLength={200}
        />
      </MultiRow>
    </>
  );
};
