import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase'

const SAMPLE = [
  {
    title: 'Nike Air Max 90',
    brand: 'Nike',
    price: 129.99,
    stock: 12,
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'lifestyle',
    colorway: 'Infrared',
    description: 'Clásico con unidad Air visible.'
  },
  {
    title: 'Adidas Ultraboost',
    brand: 'Adidas',
    price: 149.99,
    stock: 8,
    thumbnail: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
    category: 'running',
    colorway: 'Core Black',
    description: 'Ajuste cómodo y retorno de energía.'
  }

]

export async function seedProducts() {
  const ref = collection(db, 'products')
  for (const p of SAMPLE) {
    await addDoc(ref, p)
  }
}
