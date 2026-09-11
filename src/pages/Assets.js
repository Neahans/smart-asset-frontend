import React, { useState } from "react";

import Table from "../components/Table";
import { assets as initialAssets } from "../data/mockData";

import "./Assets.css";

function Assets() {
  const [assets, setAssets] = useState(initialAssets);
  const [showModal, setShowModal] = useState(false);
  const [editingAsset, setEditingAsset] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "Laptop",
    serialNumber: "",
    status: "Available",
    purchaseDate: "",
  });

  const openAddModal = () => {
    setEditingAsset(null);

    setFormData({
      name: "",
      type: "Laptop",
      serialNumber: "",
      status: "Available",
      purchaseDate: "",
    });

    setShowModal(true);
  };

  const openEditModal = (asset) => {
    setEditingAsset(asset);

    setFormData({
      name: asset.name,
      type: asset.type,
      serialNumber: asset.serialNumber,
      status: asset.status,
      purchaseDate: asset.purchaseDate,
    });

    setShowModal(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingAsset) {
      setAssets((current) =>
        current.map((asset) =>
          asset.id === editingAsset.id
            ? {
                ...asset,
                ...formData,
              }
            : asset
        )
      );
    } else {
      const newAsset = {
        id: Date.now(),
        ...formData,
      };

      setAssets((current) => [...current, newAsset]);
    }

    setShowModal(false);
  };

  const deleteAsset = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this asset?"
    );

    if (confirmed) {
      setAssets((current) =>
        current.filter((asset) => asset.id !== id)
      );
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Available":
        return "status-badge status-available";

      case "Assigned":
        return "status-badge status-assigned";

      case "Under Repair":
        return "status-badge status-repair";

      default:
        return "status-badge";
    }
  };

  const columns = [
    {
      key: "name",
      label: "Asset Name",
    },
    {
      key: "type",
      label: "Type",
    },
    {
      key: "serialNumber",
      label: "Serial Number",
    },
    {
      key: "status",
      label: "Status",
      render: (asset) => (
        <span className={getStatusClass(asset.status)}>
          {asset.status}
        </span>
      ),
    },
    {
      key: "purchaseDate",
      label: "Purchase Date",
    },
    {
      key: "actions",
      label: "Actions",
      render: (asset) => (
        <div className="asset-actions">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => openEditModal(asset)}
            title="Edit"
          >
            <i className="bi bi-pencil"></i>
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deleteAsset(asset.id)}
            title="Delete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="assets-page">

      <div className="page-heading">
        <div>
          <h2>Assets</h2>
          <p>Manage and track company assets.</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={openAddModal}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Add Asset
        </button>
      </div>

      <div className="asset-summary row g-3 mb-4">
        <div className="col-md-4">
          <div className="asset-mini-card">
            <span>Total Assets</span>
            <strong>{assets.length}</strong>
          </div>
        </div>

        <div className="col-md-4">
          <div className="asset-mini-card">
            <span>Available</span>
            <strong>
              {assets.filter(
                (asset) => asset.status === "Available"
              ).length}
            </strong>
          </div>
        </div>

        <div className="col-md-4">
          <div className="asset-mini-card">
            <span>Under Repair</span>
            <strong>
              {assets.filter(
                (asset) => asset.status === "Under Repair"
              ).length}
            </strong>
          </div>
        </div>
      </div>

      <div className="assets-table-card">
        <Table columns={columns} data={assets} />
      </div>

      {showModal && (
        <div className="modal-backdrop-custom">
          <div className="asset-modal">

            <div className="modal-heading">
              <div>
                <h4>
                  {editingAsset
                    ? "Edit Asset"
                    : "Add New Asset"}
                </h4>

                <p>
                  {editingAsset
                    ? "Update asset information."
                    : "Enter the asset details below."}
                </p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Asset Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter asset name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Type
                  </label>

                  <select
                    name="type"
                    className="form-select"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option>Laptop</option>
                    <option>Desktop</option>
                    <option>Monitor</option>
                    <option>Printer</option>
                    <option>Phone</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Status
                  </label>

                  <select
                    name="status"
                    className="form-select"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Available</option>
                    <option>Assigned</option>
                    <option>Under Repair</option>
                    <option>Retired</option>
                  </select>
                </div>

              </div>

              <div className="mb-3">
                <label className="form-label">
                  Serial Number
                </label>

                <input
                  type="text"
                  name="serialNumber"
                  className="form-control"
                  placeholder="Enter serial number"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Purchase Date
                </label>

                <input
                  type="date"
                  name="purchaseDate"
                  className="form-control"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <i className="bi bi-check-lg me-2"></i>
                  {editingAsset ? "Update Asset" : "Add Asset"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Assets;