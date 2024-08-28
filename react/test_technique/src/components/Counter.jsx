import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <div>
            <h1 style={{textAlign: "center"}}>{count}</h1>
            <button style={{marginLeft: "20px", marginRight: "20px"}} onClick={() => setCount(count - 1)}>Diminuer le compteur</button>
            <button style={{marginLeft: "20px", marginRight: "20px"}} onClick={() => setCount(count + 1)}>Augmenter le compteur</button>
        </div>
        </>
    );
}
export default Counter;