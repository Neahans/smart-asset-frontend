import React, { useState } from "react";

import Table from "../components/Table";

import "./Inventory.css";

const initialInventory = [
  {
    id: 1,
    itemType: "Laptop",
    quantity: 25,
    threshold: 10,
  },
  {
    id: 2,
    itemType: "Keyboard",
    quantity: 42,
    threshold: 15,
  },
  {
    id: 3,
    itemType: "Mouse",
    quantity: 8,
    threshold: 10,
  },
  {
    id: 4,
    itemType: "Monitor",
    quantity: 18,
    threshold: 5,
  },
  {
    id: 5,
    itemType: "Printer Toner",
    quantity: 4,
    threshold: 8,
  },
];

function Inventory() {
  const [inventory] = useState(initialInventory);

  const getStockClass = (item) => {
    if (item.quantity === 0) {
      return "stock-badge stock-out";
    }

    if (item.quantity <= item.threshold) {
      return "stock-badge stock-low";
    }

    return "stock-badge stock-good";
  };

  const getStockText = (item) => {
    if (item.quantity === 0) {
      return "Out of Stock";
    }

    if (item.quantity <= item.threshold) {
      return "Low Stock";
    }

    return "In Stock";
  };

  const columns = [
    {
      key: "itemType",
      label: "Item Type",
    },
    {
      key: "quantity",
      label: "Quantity",
    },
    {
      key: "threshold",
      label: "Threshold",
    },
    {
      key: "status",
      label: "Stock Status",
      render: (item) => (
        <span className={getStockClass(item)}>
          {getStockText(item)}
        </span>
      ),
    },
  ];

  const totalItems = inventory.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const lowStock = inventory.filter(
    (item) => item.quantity > 0 && item.quantity <= item.threshold
  ).length;

  const outOfStock = inventory.filter(
    (item) => item.quantity === 0
  ).length;

  return (
    <div className="inventory-page">

      <div className="page-heading">
        <div>
          <h2>Inventory</h2>
          <p>Monitor available items and stock levels.</p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          Add Item
        </button>
      </div>

      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon blue">
              <i className="bi bi-boxes"></i>
            </div>

            <div>
              <span>Total Items</span>
              <strong>{totalItems}</strong>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon yellow">
              <i className="bi bi-exclamation-triangle"></i>
            </div>

            <div>
              <span>Low Stock</span>
              <strong>{lowStock}</strong>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon red">
              <i className="bi bi-x-circle"></i>
            </div>

            <div>
              <span>Out of Stock</span>
              <strong>{outOfStock}</strong>
            </div>
          </div>
        </div>

      </div>

      <div className="inventory-table-card">
        <Table columns={columns} data={inventory} />
      </div>

    </div>
  );
}

export default Inventory;