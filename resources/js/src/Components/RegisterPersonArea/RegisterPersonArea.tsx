import * as React from "react"
import axios from "axios";

import MaskInput from "../MaskInput";
import { CpfInputConfig } from "../MaskInput/masks";

import '../../../../css/RegisterPersonArea.css';
import usePeopleContacts from "../../Hooks/usePeopleContacts";
import ContactFilling from "./ContactFilling";
import { IContact } from "../../Types/IContact";
import { toast } from "react-toastify";

export default () => {
    const [sending, setSending] = React.useState(false);
    const { addPersonContactsToList } = usePeopleContacts()

    const handleAddPersonAndContacts = async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const cpfInput = document.getElementById('cpf') as HTMLInputElement;
        const addressInput = document.getElementById('address') as HTMLInputElement;
        const contacts: IContact[] = [];
        const contactsPhone = document.getElementsByClassName('contact-telephone');
        const contactsPhoneDesc = document.getElementsByClassName('contact-telephone-desc');

        for (let index = 0; index < 5; index++) {
            const telephone = (contactsPhone[index] as HTMLInputElement).value;
            const telephone_description = (contactsPhoneDesc[index] as HTMLInputElement).value;

            if (telephone) {
                contacts.push({ telephone: telephone.replace(/\D/g, ''), telephone_description });
            };
        }

        if (contacts.length == 0) {
            return toast.error('O número mínimo de contatos é de 1.');
        }

        if (contacts.some(contact => !contact.telephone_description)) {
            return toast.error('A descrição do telefone não pode estar vazia.');
        }

        setSending(true);

        const data = {
            name: nameInput.value.trim(),
            cpf: cpfInput.value.replace(/\D/g, ''),
            address: addressInput.value.trim(),
            contacts
        }

        try {
            const registerResponse = await axios
                .post('/api/person', data, {
                    headers: { 'Content-Type': 'application/json' }
                });

            addPersonContactsToList(registerResponse.data)
        } catch (error) {
            if (error.response.data.message == 'person already exists.') {
                return toast.error('Pessoa já cadastrada.');
            }
        } finally {
            setSending(false);
            e.target.reset();
        }
    }

    return (
        <div id="register-person-and-contacts-area">
            <form onSubmit={handleAddPersonAndContacts}>
                <span id="register-person-area">
                    <strong className="section-title">Cadastro de Pessoa</strong>

                    <div id="register-person-labels-inputs-area">
                        <span id="register-person-labels-area">
                            <label htmlFor="name">Nome:</label>
                            <label htmlFor="cpf">CPF:</label>
                            <label htmlFor="address">Endereço:</label>
                        </span>
                        <span id="register-person-inputs-area">
                            <input
                                className="person-registering-input"
                                id="name"
                                required
                            />
                            <MaskInput
                                {...CpfInputConfig}
                                className="person-registering-input"
                                id="cpf"
                                required
                            />
                            <input
                                className="person-registering-input"
                                id="address"
                                required
                            />
                        </span>
                    </div>
                    <button
                        type="submit"
                        id="register-person-button"
                        disabled={sending}
                    >{sending ? 'enviando...' : 'Gravar'}</button>
                </span>
                <span id="contact-inputs-area">
                    <table id="contacts-fill-table">
                        <thead>
                            <tr>
                                <th>Telefone</th>
                                <th>Descrição Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ContactFilling />
                            <ContactFilling />
                            <ContactFilling />
                            <ContactFilling />
                            <ContactFilling />
                        </tbody>
                    </table>
                </span>
            </form>
        </div>
    );
}
