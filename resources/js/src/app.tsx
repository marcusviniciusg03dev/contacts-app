import * as React from 'react'

import ContactList from './Components/ContactList'
import RegisterPersonArea from './Components/RegisterPersonArea/RegisterPersonArea'

import '../../css/App.css'
import { PeopleContactsProvider } from './Contexts/PeopleContactsContext'

function App() {
  return (
        <PeopleContactsProvider>
            <main id="app">
                <RegisterPersonArea />
                <ContactList />
            </main>
        </PeopleContactsProvider>
  )
}

export default App
