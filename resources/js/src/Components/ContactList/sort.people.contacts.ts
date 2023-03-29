
// Types
import IPerson from "../../Types/IPerson";

export const sortNameAlphabetically = (mutateList: IPerson[]) => {
    return mutateList.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    })
}

export const sortCpf = (mutateList: IPerson[]) => {
    return mutateList.sort(({ cpf: previousCpf }, { cpf: currentCpf }) => {
        const { previous, current } = {
            previous: Number(previousCpf.replace(/\D/g, '')),
            current: Number(currentCpf.replace(/\D/g, '')),
        }
        if (previous > current) return 1;
        if (previous < current) return -1;
        return 0;
    })
}
