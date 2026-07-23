import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'oasisoutback_cart'

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial)

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch { /* ignore */ }
  }, [items])

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.asin === product.asin)
      if (existing) {
        return prev.map((i) =>
          i.asin === product.asin ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...prev,
        {
          asin: product.asin,
          name: product.name,
          price: product.price ?? null,
          group: product.group,
          img: product.img || null,
          qty,
        },
      ]
    })
  }

  const setQty = (asin, qty) => {
    setItems((prev) =>
      prev
        .map((i) => (i.asin === asin ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }

  const removeItem = (asin) => setItems((prev) => prev.filter((i) => i.asin !== asin))
  const clear = () => setItems([])

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + (i.price || 0) * i.qty, 0),
    [items]
  )

  const value = { items, addItem, setQty, removeItem, clear, count, subtotal }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
