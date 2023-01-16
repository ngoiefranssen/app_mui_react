import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DatePicker(props) {
    // const date  = new DateTime();
    // const [value, setValue] = React.useState(DateTime());
    // const [dateWithNoInitialValue, setDateWithNoInitialValue] =
    // React.useState<Dayjs | null>(null);

    const { name, label, value, onChange } = props
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        },
    });
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label={label}
                name={name}
                value={value}
                onChange={(date) => onChange(convertToDefEventPara(name, date))}
                renderInput={(params) => (
                    <TextField {...params} helperText="Clear Initial State" />
                )}
            />
        </LocalizationProvider>
    );
}