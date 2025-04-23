import React, { useState } from 'react';

/**
 * @styles
 */
import './App.css';

/**
 * @requires Components
 */
import {
    HelloWorld,
} from './components';

export default function App() {
    
    return (
        <main>
            <section className='VideoContainer'>
                video
            </section>
            <HelloWorld />
        </main>
    );
}
