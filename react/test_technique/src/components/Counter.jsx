import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Diminuer le compteur</button>
            <button onClick={() => setCount(count + 1)}>Augmenter le compteur</button>
        </div>
        </>
    );
}
export default Counter;