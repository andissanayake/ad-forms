import { AntDesignUIComponents } from '@ad-forms/antd';
import {
  FormControlConfig,
  BasicFormControls,
  useUIForms,
  NativeUIComponents,
} from '@ad-forms/core';
import { MuiUIComponents } from '@ad-forms/mui';
import { useState } from 'react';

const MyForm = () => {
  const formControls: {
    controlKey: string;
    parameters: FormControlConfig<BasicFormControls>;
  }[] = [
    {
      controlKey: 'theme',
      parameters: {
        type: 'dropdown',
        label: 'Theme',
        wrapperClassName: 'ui-forms-grid-item-12',
        config: {
          options: [
            { value: 'native', text: 'Native UI Components' },
            { value: 'antd', text: 'Ant Design Components' },
            { value: 'mui', text: 'MUI Components' },
          ],
        },
      },
    },
    {
      controlKey: 'f1',
      parameters: {
        type: 'textInput',
        label: 'Text Field',
        config: {
          placeholder: 'Enter text',
          type: 'password',
        },
        wrapperClassName: 'ui-forms-grid-item-3',
        value: 'Sagara',
      },
    },
    {
      controlKey: 'f2',
      parameters: {
        type: 'numberInput',
        label: 'Number Field',
        config: {
          min: 0,
          max: 100,
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f3',
      parameters: {
        type: 'dropdown',
        label: 'Dropdown Field',
        config: {
          options: [
            { value: '', text: 'Select an option' },
            { value: 'opt1', text: 'Option 1' },
            { value: 'opt2', text: 'Option 2' },
          ],
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f4',
      parameters: {
        type: 'checkbox',
        label: 'Agree to Terms',
        config: {},
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f5',
      parameters: {
        type: 'dateInput',
        label: 'Select a Date',
        config: {
          minDate: '2024-01-01',
          maxDate: '2024-12-31',
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f6',
      parameters: {
        type: 'textArea',
        label: 'Comments',
        config: {
          placeholder: 'Enter your comments',
          rows: 4,
          maxLength: 200,
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f7',
      parameters: {
        type: 'radioGroup',
        label: 'Select an Option',
        config: {
          options: [
            { value: 'A', text: 'Option A' },
            { value: 'B', text: 'Option B' },
            { value: 'C', text: 'Option C' },
          ],
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f8',
      parameters: {
        type: 'multiSelect',
        label: 'Select Multiple Options',
        config: {
          options: [
            { value: 'opt1', text: 'Option 1' },
            { value: 'opt2', text: 'Option 2' },
            { value: 'opt3', text: 'Option 3' },
          ],
        },
        wrapperClassName: 'ui-forms-grid-item-3',
        value: [],
      },
    },
    {
      controlKey: 'f10',
      parameters: {
        type: 'slider',
        label: 'Adjust Value',
        config: {
          min: 0,
          max: 100,
          step: 10,
        },
        wrapperClassName: 'ui-forms-grid-item-3',
        value: 50,
      },
    },
    {
      controlKey: 'f11',
      parameters: {
        type: 'timeInput',
        label: 'Select a Time',
        config: {
          minTime: '09:00',
          maxTime: '17:00',
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
    {
      controlKey: 'f12',
      parameters: {
        type: 'dateTimeInput',
        label: 'Select a Date & Time',
        config: {
          minDateTime: '2024-01-20T09:00',
          maxDateTime: '2024-12-31T17:00',
        },
        wrapperClassName: 'ui-forms-grid-item-3',
      },
    },
  ];

  const [uiLibrary, setUiLibrary] = useState<'native' | 'antd' | 'mui'>(
    'native'
  );

  // Dynamically choose UI components
  const currentUIComponents =
    uiLibrary === 'native'
      ? NativeUIComponents
      : uiLibrary === 'antd'
      ? AntDesignUIComponents
      : MuiUIComponents;

  // Use the form hook with configuration
  const form = useUIForms<BasicFormControls>(
    currentUIComponents,
    formControls,
    (formState) => {
      if (formState.theme) {
        setUiLibrary(formState.theme as 'native' | 'antd' | 'mui');
      }
    }
  );

  const handleSubmit = () => {
    const { values, isValid, errors } = form.validate();

    console.log('Form isValid:', isValid);
    console.log('Form values:', values);
    console.log('Form errors:', errors);
  };

  return (
    <div style={{ width: 1024, margin: '0 auto' }}>
      <h2>Dynamic Form Demonstration</h2>
      <label>Choose UI Library:</label>
      <div className="ui-forms-grid">{form.render()}</div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MyForm;
