import ComponentB from "./ComponentB";

export default function ComponentA() {
    console.info("componente A renderizandose");
    return (
        <div className="p-6 w-128 border-4 border-pink-400 rounded-4xl min-w-max">
            <h1>Mi componente A</h1>
            <ComponentB />
        </div>
    );
}
