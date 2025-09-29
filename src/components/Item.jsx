import { Link } from "react-router-dom";
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

export default function Item({ product }) {
  const src = normalize(product.thumbnail);
  const onError = (e) => {
    // evita loop si el fallback también fallara
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK;
  };

  return (
    <article className="card">
      <img src={src} alt={product.title} onError={onError} />
      <div className="p">
        <div className="row">
          <strong>{product.title}</strong>
          <span className="badge">{product.brand}</span>
        </div>
        <p>{money(product.price)}</p>
        <Link className="button primary" to={`/item/${product.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
