import * as React from 'react'

import ContactList from './Components/ContactList'
import RegisterPersonArea from './Components/RegisterPersonArea/RegisterPersonArea'

import '../../css/App.css'
import { PeopleContactsProvider } from './Contexts/PeopleContactsContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <PeopleContactsProvider>
            <ToastContainer />
            <main id="app">
                <RegisterPersonArea />
                <ContactList />
            </main>
        </PeopleContactsProvider>
    )
}

export default App
