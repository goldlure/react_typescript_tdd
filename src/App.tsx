import React from "react";
import "./App.css";

export const label = (name: string) => `Hello ${name}`;

const App: React.FC = () => {
    return (
        <div>
            <h1>{label('React')}</h1>
            <p>Nice TDD</p>
        </div>
    );
};

export default App;

