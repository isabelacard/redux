import { createContext, useState } from "react";

import ComponentA from "./components/ComponentA";

export const CounterContext = createContext(null);

export default function ContextPage() {
    console.info("Componente ContextPage renderizandose");
    const [counter, setCounter] = useState(0);
    return (
        <div className="card shadow-2xl flex flex-col justify-start items-center p-5 min-w-screen">
            <h1>Context page!</h1>
            <p>{counter}</p>
            <button className="btn btn-primary" onClick={() => setCounter((prev) => prev + 1)}>
                Aumentar
            </button>
            <CounterContext.Provider value={{ counter, setCounter }}>
                <ComponentA />
            </CounterContext.Provider>
        </div>
    );
}
