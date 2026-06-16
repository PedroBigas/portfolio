import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

type SharedProps = {
  label?: string;
  hint?: string;
  error?: boolean;
  required?: boolean;
  multiline?: boolean;
  id?: string;
  className?: string;
};

export type InputProps = SharedProps &
  Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, keyof SharedProps>;

export function Input({
  label,
  hint,
  error = false,
  required = false,
  multiline = false,
  id,
  className = '',
  ...rest
}: InputProps) {
  const fieldId = id || (label ? `pb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const fieldCls = [styles.field, error ? styles.error : '', className].filter(Boolean).join(' ');

  return (
    <div className={fieldCls}>
      {label && (
        <label className={styles.label} htmlFor={fieldId}>
          {label}
          {required && <span className={styles.req}>*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={fieldId}
          className={styles.input}
          aria-invalid={error || undefined}
          required={required}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          className={styles.input}
          aria-invalid={error || undefined}
          required={required}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
