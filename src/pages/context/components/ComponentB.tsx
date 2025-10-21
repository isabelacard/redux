import ComponentC from "./ComponentC";

export default function ComponentB() {
    console.info("componente B renderizandose");
    return (
        <div className="p-6 w-128 border-4 border-purple-400 rounded-4xl min-w-max">
            <h1>Mi componente B</h1>
            <ComponentC />
        </div>
    );
}
