import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FieldProps } from 'formik';
import { useCallback, useEffect, useState } from 'react';

const YES = 'Ja';
const NO = 'Nej';

interface IProps {
  field: FieldProps;
  initialValue?: string;
}

export const YesOrNo = ({
  field: { name, value = false },
  form: { setFieldValue },
}: FieldProps) => {
  useEffect(() => {
    setFieldValue(name, value);
  }, []);

  const handleChange = useCallback((_, newValue) => {
    if (typeof newValue !== 'boolean') return;
    setFieldValue(name, newValue);
  }, []);

  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value={true}>{YES}</ToggleButton>
      <ToggleButton value={false}>{NO}</ToggleButton>
    </ToggleButtonGroup>
  );
};
