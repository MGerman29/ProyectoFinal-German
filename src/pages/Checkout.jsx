import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/firebase'

export default function Checkout(){
  const { items, totalPrice, clear } = useCart()
  const [form, setForm] = useState({ name:'', email:'', phone:'' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!items.length) return

    setLoading(true)
    try {
      const order = {
        buyer: form,
        items: items.map(({id,title,price,quantity}) => ({ productId:id, title, price, quantity })),
        total: totalPrice
      }
      const id = await createOrder(order)
      clear()

      await Swal.fire({
        title: '¡Compra confirmada!',
        html: `
          <div style="text-align:left;line-height:1.6">
            <div><b>Orden:</b> ${id}</div>
            <div><b>Nombre:</b> ${form.name}</div>
            <div><b>Total:</b> $${totalPrice.toFixed(2)}</div>
            <hr/>
            <div style="max-height:140px;overflow:auto">
              ${order.items.map(i => `
                <div>• ${i.title} x${i.quantity} — $${(i.price*i.quantity).toFixed(2)}</div>
              `).join('')}
            </div>
          </div>
        `,
        icon: 'success',
        iconColor: '#22c55e',
        confirmButtonText: 'Volver al inicio',
        showDenyButton: true,
        denyButtonText: 'Copiar ID',
        focusConfirm: true,
        background: '#0f0f0f',
        color: '#fff',
        confirmButtonColor: '#2563eb',
        denyButtonColor: '#374151',
        backdrop: `
          rgba(0,0,0,0.6)
          left top
          no-repeat
        `,
        heightAuto: true,
        allowOutsideClick: false,
        didOpen: () => {
          // select text si querés
        }
      }).then(async (res) => {
        if (res.isDenied) {
          try {
            await navigator.clipboard.writeText(id)
            await Swal.fire({ toast:true, position:'top-end', icon:'success', title:'ID copiado', showConfirmButton:false, timer:1400 })
          } catch {}
        }
        navigate('/') // redirige siempre al cerrar
      })

    } catch (err) {
      await Swal.fire({ title: 'Ups', text: 'No pudimos procesar tu compra', icon: 'error', confirmButtonText:'Entendido' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="card" style={{padding:16}}>
      <h2>Checkout</h2>
      <div className="row">
        <input name="name"  placeholder="Nombre"   value={form.name}  onChange={onChange} required />
        <input name="email" placeholder="Email"    value={form.email} onChange={onChange} required />
        <input name="phone" placeholder="Teléfono" value={form.phone} onChange={onChange} required />
      </div>
      <button className="button" disabled={!items.length || loading}>
        {loading ? 'Procesando…' : `Confirmar compra ($${totalPrice.toFixed(2)})`}
      </button>
    </form>
  )
}
