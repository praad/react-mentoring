import React from 'react'
import { createRoot } from 'react-dom/client';
import CounterApp from './components/CounterApp'

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<CounterApp />);