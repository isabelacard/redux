import { useContext } from "react";

import { CounterContext } from "../ContextPage";

export default function ComponentC() {
    const { counter, setCounter } = useContext(CounterContext);
    console.info("Componente C renderizandose");
    return (
        <div className="p-6 w-128 border-4 rounded-4xl min-w-max">
            <h1>Mi componente C</h1>
            <p>{counter}</p>
            <button className="btn btn-secondary" onClick={() => setCounter((prev) => prev + 1)}>
                Aumentar
            </button>
        </div>
    );
}
