import * as React from 'react';
import Select from 'react-select';

type Option = {
  label: string;
  value: any;
};

type Field = {
  name: string;
  type: 'text' | 'select' | 'textarea' | 'password';
  value?: any;
  onChange?: (value: any) => void;
  options?: Option[];
  params?: any;
};

type Props = {
  viewOnly?: boolean;
  fields: Field[];
  primaryActionText: string;
};

const RenderField = ({ field, viewOnly }: { field: Field; viewOnly: Props['viewOnly'] }) => {
  if (field.type === 'select') {
    return (
      <Select
        value={field.value}
        onChange={(value) => {
          if (field.onChange) {
            field.onChange(value);
          }
        }}
        isDisabled={viewOnly}
        isClearable
        isSearchable
        name="reviewee"
        options={field.options}
        {...field.params}
      />
    );
  }

  if (viewOnly) {
    return <span style={styles.input}> {field.value} </span>;
  }

  if (field.type === 'textarea') {
    return <textarea name={field.name} value={field.value} rows={4} />;
  }

  return <input style={styles.input} type={field.type} name={field.name} value={field.value} />;
};

const BasicForm = ({ viewOnly, fields, primaryActionText }: Props) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // @todo pending implementation
        }}
        style={styles.form}
      >
        {fields.map((field, index) => {
          return (
            <>
              <label style={styles.label}>{`${field.name}:`}</label>
              <RenderField field={field} viewOnly={viewOnly} />
            </>
          );
        })}
        {!viewOnly && <input type="submit" style={styles.input} value={primaryActionText} />}
      </form>
    </div>
  );
};

const styles = {
  form: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    width: '450px',
  },
  label: {
    gridColumn: '1/2',
  },
  input: {
    gridColumn: '2/3',
  },
};

export default BasicForm;
