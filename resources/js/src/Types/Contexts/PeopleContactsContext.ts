import IPerson from "../IPerson";

type IPeopleContactsContext = {
    isFetching: boolean
    list: IPerson[]
    addPersonContactsToList: (person: IPerson) => void
}

export default IPeopleContactsContext;
