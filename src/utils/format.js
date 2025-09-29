export const money = (n) =>
  new Intl.NumberFormat('es-AR', { style:'currency', currency:'ARS', maximumFractionDigits: 0 }).format(n)
