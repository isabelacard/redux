import ComponentC from "./ComponentC";

export default function ComponentB() {
    return (
        <div className="p-6 w-128 border-4 rounded-4xl ">
            <h1>Mi componente B</h1>
            <ComponentC />
        </div>
    );
}
