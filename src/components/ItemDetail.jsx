import { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { money } from "../utils/format";

const FALLBACK = "/img/placeholder.png";

const normalize = (p = "") => {
  if (!p) return FALLBACK;
  p = String(p).replace(/\u200B/g, "").trim();
  if (/^https?:\/\//i.test(p)) return p;
  p = p.replace(/\\/g, "/");
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/^\/imgs\//i, "/img/");
  return p;
};

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <article className="card" style={{ padding: 16 }}>
      <div className="row" style={{ gap: 16 }}>
        <div style={{ flex: 1 }}>
          <img
            src={normalize(product.thumbnail)}
            alt={product.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK;
            }}
            style={{
              width: "100%",
              aspectRatio: "1/1",
              objectFit: "cover",
              background: "#0e0e0e",
              borderRadius: 12,
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ marginTop: 0 }}>{product.title}</h2>
          <p className="badge">{product.brand}</p>
          <p><strong>{money(product.price)}</strong></p>
          <p style={{ color: "#9aa0a6" }}>{product.description}</p>
          {product.stock > 0 ? (
            !added ? (
              <ItemCount stock={product.stock} onAdd={handleAdd} />
            ) : (
              <p>Agregado al carrito ✅</p>
            )
          ) : (
            <p>Producto sin stock</p>
          )}
        </div>
      </div>
    </article>
  );
}
