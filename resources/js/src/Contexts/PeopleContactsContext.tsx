import axios from "axios";
import * as React from "react"
import IPerson from "../Types/IPerson";
import IPeopleContactsContext from "../Types/Contexts/PeopleContactsContext";
import { toast } from "react-toastify";

const PeopleContactsContext = React.createContext({} as IPeopleContactsContext)

export const PeopleContactsProvider = ({ children }) => {
    const [isFetching, setIsFetching] = React.useState<boolean>(false)
    const [peopleContacts, setPeopleContacts] = React.useState<IPerson[]>([])

    const getContacts = async() => {
        try {
            setIsFetching(true);
            const peopleContactsResponse = await axios.get('/api/people-contacts');
            setPeopleContacts(peopleContactsResponse.data);
        } catch (error) {
            toast.error('Houve um erro ao buscar pessoas e seus contatos.');
        } finally {
            setIsFetching(false);
        }
    }

    React.useEffect(() => {
        getContacts();
    }, []);

    return (
        <PeopleContactsContext.Provider
            value={{
                isFetching,
                list: peopleContacts,
                addPersonContactsToList: (person) => setPeopleContacts(value => ([...value, person]))
        }}>
            {children}
        </PeopleContactsContext.Provider>
    )
}

export default PeopleContactsContext;
