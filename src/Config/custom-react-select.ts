export const customStylesSelect = {
    control: (base: any) => ({
        ...base,
        backgroundColor: "#FFF",
        border: '1px solid #CCC',
        padding: '.5rem'
    }),

    placeholder: (provided: any) => ({
        ...provided,
        fontWeight: '500',
        fontSize: '1rem'
    }),

    singleValue: (provided: any) => ({
        ...provided,
        color: '#CCC',
        fontWeight: '500',
        fontSize: '1rem'
    }),

    option: (provided: any, state: any) => ({
        ...provided,
        borderBottom: '1px solid #CCC',
        fontWeight: '500',
        color: state.isSelected ? 'white' : '#757575',
        padding: 5,
        fontSize: '1rem'
    }),
}