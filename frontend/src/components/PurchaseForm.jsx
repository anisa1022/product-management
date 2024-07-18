import React, { useEffect } from 'react';

const PurchaseForm = ({
  product,
  supplier,
  quantity,
  price,
  totalPrice,
  setProduct,
  setSupplier,
  setQuantity,
  setPrice,
  setTotalPrice,
  handleAddPurchase,
  showForm,
  setShowForm,
  editPurchaseId,
  products,
  suppliers,
}) => {

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [price, quantity, setTotalPrice]);

  return (
    <>
      {showForm && (
        <div className="mb-4 flex flex-wrap space-y-4 md:space-y-0 md:space-x-2">
          <select
            className="border p-2 flex-1"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Select Product</option>
            {products.map((prod) => (
              <option key={prod._id} value={prod._id}>
                {prod.name}
              </option>
            ))}
          </select>
          <select
            className="border p-2 flex-1"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          >
            <option value="">Select Supplier</option>
            {suppliers.map((sup) => (
              <option key={sup._id} value={sup._id}>
                {sup.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="border p-2 flex-1"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 flex-1"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 flex-1"
            placeholder="Total Price"
            value={totalPrice}
            readOnly
          />
          <button
            className="bg-gray-900 text-white font-semibold p-2 rounded"
            onClick={handleAddPurchase}
          >
            {editPurchaseId ? 'UPDATE PURCHASE' : 'ADD PURCHASE'}
          </button>
          <button
            className="bg-gray-500 text-white p-2 rounded"
            onClick={() => setShowForm(false)}
          >
            CANCEL
          </button>
        </div>
      )}
    </>
  );
};

export default PurchaseForm;
