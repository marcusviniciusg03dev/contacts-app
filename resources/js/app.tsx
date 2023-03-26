import { createRoot } from 'react-dom/client';
import * as React from 'react';

const App = () => {
    return (
        <h1>app</h1>
    );
}

createRoot(document.getElementById('app')).render(<App />);
