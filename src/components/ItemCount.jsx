import { useState } from 'react'


export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial)
    const canDec = count > 1
    const canInc = count < stock


    const inc = () => canInc && setCount(c => c + 1)
    const dec = () => canDec && setCount(c => c - 1)
    const add = () => stock > 0 && onAdd?.(count)


    if (stock === 0) return <p className="badge">Producto sin stock</p>


    return (
        <div className="row">
            <div className="row">
                <button className="button" onClick={dec} disabled={!canDec}>-</button>
                <span style={{ padding: '0 8px' }}>{count}</span>
                <button className="button" onClick={inc} disabled={!canInc}>+</button>
            </div>
            <button className="button" onClick={add}>Agregar</button>
        </div>
    )
}