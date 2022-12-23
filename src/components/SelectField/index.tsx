import Select from 'react-select';
import { ErrorMessage } from "@hookform/error-message";
import { Control, Controller } from "react-hook-form";

import { customStylesSelect } from "../../Config/custom-react-select";
import { ISelect } from "../../interfaces/ISelect";

interface ISelectComponent {
    description: string;
    cias: ISelect[];
    control: Control<any>;
    errors: any;
    name: string;
    state?: Boolean;
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
                            isDisabled={props.state && true}
                            className="text-center"
                            styles={customStylesSelect}
                            options={props.cias}
                            value={props.cias.find((e: any) => e.value == value)}
                            onChange={(e: any) => onChange(e.value)}
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