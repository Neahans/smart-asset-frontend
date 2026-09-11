import React, { useState } from "react";

import Table from "../components/Table";

import "./Tickets.css";

const initialTickets = [
  {
    id: 1,
    asset: "HP LaserJet Pro",
    issue: "Paper jam and printing error",
    priority: "High",
    status: "Open",
    technician: "Arun",
    created: "2026-09-08",
  },
  {
    id: 2,
    asset: "Dell Latitude 5420",
    issue: "Battery not charging",
    priority: "Medium",
    status: "In Progress",
    technician: "Rahul",
    created: "2026-09-07",
  },
  {
    id: 3,
    asset: "Samsung Monitor",
    issue: "Display flickering",
    priority: "Low",
    status: "Resolved",
    technician: "Anu",
    created: "2026-09-05",
  },
];

function Tickets() {
  const [tickets, setTickets] = useState(initialTickets);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    asset: "",
    issue: "",
    priority: "Medium",
    technician: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const openModal = () => {
    setFormData({
      asset: "",
      issue: "",
      priority: "Medium",
      technician: "",
    });

    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTicket = {
      id: Date.now(),
      asset: formData.asset,
      issue: formData.issue,
      priority: formData.priority,
      status: "Open",
      technician: formData.technician || "Unassigned",
      created: new Date().toISOString().split("T")[0],
    };

    setTickets((current) => [newTicket, ...current]);

    setShowModal(false);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return "ticket-badge ticket-open";

      case "In Progress":
        return "ticket-badge ticket-progress";

      case "Resolved":
        return "ticket-badge ticket-resolved";

      default:
        return "ticket-badge";
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "ticket-badge priority-high";

      case "Medium":
        return "ticket-badge priority-medium";

      case "Low":
        return "ticket-badge priority-low";

      default:
        return "ticket-badge";
    }
  };

  const columns = [
    {
      key: "asset",
      label: "Asset",
    },
    {
      key: "issue",
      label: "Issue",
    },
    {
      key: "priority",
      label: "Priority",
      render: (ticket) => (
        <span className={getPriorityClass(ticket.priority)}>
          {ticket.priority}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (ticket) => (
        <span className={getStatusClass(ticket.status)}>
          {ticket.status}
        </span>
      ),
    },
    {
      key: "technician",
      label: "Technician",
    },
    {
      key: "created",
      label: "Created",
    },
  ];

  const openCount = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const progressCount = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedCount = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  return (
    <div className="tickets-page">

      
      <div className="page-heading">
        <div>
          <h2>Repair Tickets</h2>
          <p>Track and manage asset repair requests.</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={openModal}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Create Ticket
        </button>
      </div>

      
      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="ticket-summary-card">
            <div className="ticket-summary-icon red">
              <i className="bi bi-exclamation-circle"></i>
            </div>

            <div>
              <span>Open Tickets</span>
              <strong>{openCount}</strong>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="ticket-summary-card">
            <div className="ticket-summary-icon yellow">
              <i className="bi bi-clock-history"></i>
            </div>

            <div>
              <span>In Progress</span>
              <strong>{progressCount}</strong>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="ticket-summary-card">
            <div className="ticket-summary-icon green">
              <i className="bi bi-check-circle"></i>
            </div>

            <div>
              <span>Resolved</span>
              <strong>{resolvedCount}</strong>
            </div>
          </div>
        </div>

      </div>

      
      <div className="tickets-table-card">
        <Table columns={columns} data={tickets} />
      </div>

      {showModal && (
        <div className="modal-backdrop-custom">

          <div className="ticket-modal">

            <div className="modal-heading">
              <div>
                <h4>Create Repair Ticket</h4>
                <p>Report an issue with an asset.</p>
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
                  Asset
                </label>

                <select
                  name="asset"
                  className="form-select"
                  value={formData.asset}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select an asset
                  </option>
                  <option>Dell Latitude 5420</option>
                  <option>MacBook Pro 14</option>
                  <option>HP LaserJet Pro</option>
                  <option>Samsung Monitor</option>
                  <option>Lenovo ThinkPad</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Issue
                </label>

                <textarea
                  name="issue"
                  className="form-control"
                  rows="4"
                  placeholder="Describe the problem..."
                  value={formData.issue}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Priority
                  </label>

                  <select
                    name="priority"
                    className="form-select"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Technician
                  </label>

                  <input
                    type="text"
                    name="technician"
                    className="form-control"
                    placeholder="Assign technician"
                    value={formData.technician}
                    onChange={handleChange}
                  />
                </div>

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
                  <i className="bi bi-send me-2"></i>
                  Create Ticket
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default Tickets;