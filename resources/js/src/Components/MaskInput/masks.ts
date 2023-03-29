export const TelephoneInputConfig = {
    mask: (e) => {
        let value = e.currentTarget.value.replace(/\D/g, '');
        e.currentTarget.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    },
    maxLength: 11,
    pattern: '\\([0-9]{2}\\)[0-9]{5}-[0-9]{4}'
}

export const CpfInputConfig = {
    mask: (e) => {
        let value = e.currentTarget.value.replace(/\D/g, '');
        e.currentTarget.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    maxLength: 11,
    pattern: '[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}'
}