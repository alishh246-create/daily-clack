function CartDrawer({ cart, setCart, onClose }) {

  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-2xl p-5 z-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose}>❌</button>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* Items */}
          <div className="space-y-4 overflow-y-auto h-[70%]">

            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-3">

                <img src={item.image} className="w-16 h-16 object-cover" />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p>Rs {item.price}</p>

                  {/* Qty */}
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev.map((p) =>
                            p.id === item.id
                              ? { ...p, qty: (p.qty || 1) - 1 }
                              : p
                          ).filter((p) => (p.qty || 1) > 0)
                        )
                      }
                    >
                      -
                    </button>

                    <span>{item.qty || 1}</span>

                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev.map((p) =>
                            p.id === item.id
                              ? { ...p, qty: (p.qty || 1) + 1 }
                              : p
                          )
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() =>
                    setCart((prev) =>
                      prev.filter((p) => p.id !== item.id)
                    )
                  }
                >
                  ❌
                </button>
              </div>
            ))}

          </div>

          {/* Footer */}
          <div className="mt-5 border-t pt-4">
            <h3 className="font-bold">Total: Rs {total}</h3>

            <button className="w-full bg-green-500 text-white py-2 mt-3">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;