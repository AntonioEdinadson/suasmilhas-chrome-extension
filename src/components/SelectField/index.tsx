import Select from 'react-select';
import { ErrorMessage } from "@hookform/error-message";
import { Control, Controller } from "react-hook-form";

import { customStylesSelect } from "../../Config/custom-react-select";
import { ISelect } from "../../interfaces/ISelect";

interface ISelectComponent {
    description: string;
    data: ISelect[];
    control: Control<any>;
    errors: any;
    name: string;
    state: Boolean;
    value?: ISelect | null;
    execute: (event: Event) => void;
}

export const SelectField = (props: ISelectComponent) => {

    return (
        <div>
            <div className="w-full">
                <Controller
                    name={props.name}
                    control={props.control}
                    render={({ field: { value, onChange } }) => (
                        <Select
                            isDisabled={props.state ? true : false}
                            className="text-center"
                            styles={customStylesSelect}
                            options={props.data}
                            value={props.value && { label: props.value.label, value: props.value.value }}
                            onChange={(event: any) => { onChange(event.value); props.execute(event) }}
                            placeholder={props.description}
                        />
                    )}
                />
                <ErrorMessage
                    errors={props.errors}
                    name={props.name}
                    render={({ message }) => <p className="text-red-400 text-[.8rem] py-1">{message}</p>}
                />
            </div>

        </div>
    );
};