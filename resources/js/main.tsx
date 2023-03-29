import { createRoot } from 'react-dom/client';
import * as React from 'react';

import App from './src/app';
import '../css/index.css';

createRoot(document.getElementById('render-app')).render(
    <React.StrictMode>
       <App />
    </React.StrictMode>
);
