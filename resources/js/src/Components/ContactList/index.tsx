import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import '../../../../css/ContactList.css';

import conditionalString from "../../Utils/conditional.string";
import usePeopleContacts from "../../Hooks/usePeopleContacts";
import { sortCpf, sortNameAlphabetically } from "./sort.people.contacts";

import { ContactListSortKey } from "../../Types/Components/ContactList"; // Types

export default () => {
    const { isFetching, list } = usePeopleContacts();
    const [sortKey, setSortKey] = React.useState<ContactListSortKey>(null);

    const sortList = React.useCallback(() => {
        const mutateList = [...list];

        if (sortKey == 'name') {
            return sortNameAlphabetically(mutateList)
        } else if (sortKey == 'cpf') {
            return sortCpf(mutateList)
        } else return mutateList;
    }, [list, sortKey]);

    const handleChangeKey = (e, key: ContactListSortKey) => {
        e.preventDefault();
        setSortKey(value => value == key ? null : key);
    }

    return (
        <div id="person-data-listing-area">
            <strong className="section-title">Dados Gravados</strong>

            <table id="people-contacts-table">
                <thead>
                    <tr>
                        <th>
                            <span>
                                <label>Nome</label>
                                <a onClick={(e) => handleChangeKey(e, 'name')} id="sort-arrow">
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                        style={{ transform: `rotate(${sortKey == 'name' ? '-' : ''}90deg)` }}
                                    />
                                </a>
                            </span>
                        </th>
                        <th>
                            <span>
                                <label>CPF</label>
                                <a onClick={(e) => handleChangeKey(e, 'cpf')} id="sort-arrow">
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                        style={{ transform: `rotate(${sortKey == 'cpf' ? '-' : ''}90deg)` }}
                                    />
                                </a>
                            </span>
                        </th>
                        <th>
                            <span>
                                <label>Telefone - Descrição</label>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (isFetching || list.length == 0) ? (
                            <tr>
                                <td style={{ border: 0 }}>{isFetching ? 'Carregando contatos...' : 'Sem registros.'}</td>
                            </tr>
                        ) : sortList().map(personContacts => (
                            <tr key={personContacts.id}>
                                <td>{personContacts.name}</td>
                                <td>{personContacts.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}</td>
                                <td>
                                    <ul>
                                        {personContacts.contacts.map(contact => (
                                            <li key={contact.telephone}>
                                                {`
                                                    ${contact.telephone.replace(/\D/, '').replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')} - ${conditionalString(contact.telephone_description, 'Sem descrição')}
                                                `}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
