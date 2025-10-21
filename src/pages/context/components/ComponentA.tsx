import ComponentB from "./ComponentB";

export default function ComponentA() {
    return (
        <div className="p-6 w-128 border-4 rounded-4xl ">
            <h1>Mi componente A</h1>
            <ComponentB />
        </div>
    );
}
