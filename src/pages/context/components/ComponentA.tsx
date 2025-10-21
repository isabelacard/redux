import ComponentB from "./ComponentB";

export default function ComponentA() {
    console.info("Componente A renderizandose");
    return (
        <div className="p-6 w-128 border-4 rounded-4xl border-pink-400 min-w-max">
            <h1>Mi componente A</h1>
            {/* <button className="btn btn-secondary" onClick={() => setCounter((prev) => prev + 1)}>
                Aumentar
            </button> */}
            <ComponentB />
        </div>
    );
}
