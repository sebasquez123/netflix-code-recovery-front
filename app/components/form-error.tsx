'use client';
import get from 'lodash/get';
import { FieldErrors, FieldValues } from 'react-hook-form';

interface FormStateProxy<TFieldValues extends FieldValues = FieldValues> {
  errors: FieldErrors<TFieldValues>;
  field: string;
  className?: string;
}
const FormError = ({ errors, field, className }: FormStateProxy) => {
  const message = get(errors, `${field}.message`);

  return (
    <>
      {message && (
        <p className={`formError mt-1 ${className}`}>{String(message)}</p>
      )}
    </>
  );
};

export default FormError;
