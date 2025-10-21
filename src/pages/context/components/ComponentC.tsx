import { useContext } from "react";

import { type ContextType, CounterContext } from "../ContextPage";

export default function ComponentC() {
    const ctx = useContext<ContextType | null>(CounterContext);
    if (!ctx) {
        throw new Error("Contexto no provisto");
    }
    console.info("Componente C renderizandose");
    return (
        <div className="p-6 w-128 border-4 rounded-4xl min-w-max">
            <h1>Mi componente C</h1>
            <p>{ctx.counter}</p>
            <button className="btn btn-secondary" onClick={() => ctx.setCounter((prev) => prev + 1)}>
                Aumentar
            </button>
        </div>
    );
}
