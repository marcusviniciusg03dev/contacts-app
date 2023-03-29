import * as React from "react"
import PeopleContactsContext from "../Contexts/PeopleContactsContext";
import IPeopleContactsContext from "../Types/Contexts/PeopleContactsContext";

export default () => {
    return React.useContext<IPeopleContactsContext>(PeopleContactsContext);
}
