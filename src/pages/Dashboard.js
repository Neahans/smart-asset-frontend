import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./Dashboard.css";

const adminAssetStatusData = [
  { name: "Available", value: 18 },
  { name: "Assigned", value: 12 },
  { name: "Under Repair", value: 5 },
  { name: "Retired", value: 3 },
];

const adminMonthlyData = [
  { month: "Jan", assets: 8 },
  { month: "Feb", assets: 11 },
  { month: "Mar", assets: 14 },
  { month: "Apr", assets: 10 },
  { month: "May", assets: 18 },
  { month: "Jun", assets: 21 },
];

const employeeAssetData = [
  { name: "Laptop", value: 1 },
  { name: "Monitor", value: 1 },
  { name: "Other", value: 0 },
];

const employeeMonthlyData = [
  { month: "Jan", tickets: 1 },
  { month: "Feb", tickets: 0 },
  { month: "Mar", tickets: 2 },
  { month: "Apr", tickets: 1 },
  { month: "May", tickets: 0 },
  { month: "Jun", tickets: 1 },
];

function Dashboard() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const isAdmin = currentUser?.role === "Administrator";

  if (!isAdmin) {
    return (
      <div className="dashboard-page">

        <div className="dashboard-header">
          <div>
            <h2>
              Welcome, {currentUser?.name || "Employee"} 👋
            </h2>

            <p>
              Here's an overview of your assigned assets and
              activities.
            </p>
          </div>
        </div>

        {/* Employee Cards */}
        <div className="row g-4 mb-4">

          <div className="col-xl-4 col-md-6">
            <div className="dashboard-card">
              <div className="card-icon blue">
                <i className="bi bi-pc-display"></i>
              </div>

              <div>
                <p>My Assets</p>
                <h3>2</h3>
                <span>
                  <i className="bi bi-check-circle"></i>
                  Currently assigned
                </span>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="dashboard-card">
              <div className="card-icon green">
                <i className="bi bi-box-arrow-up-right"></i>
              </div>

              <div>
                <p>Active Assignments</p>
                <h3>2</h3>
                <span>
                  <i className="bi bi-check2-circle"></i>
                  In use
                </span>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="dashboard-card">
              <div className="card-icon red">
                <i className="bi bi-tools"></i>
              </div>

              <div>
                <p>My Tickets</p>
                <h3>1</h3>
                <span>
                  <i className="bi bi-clock"></i>
                  Needs attention
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Employee Charts */}
        <div className="row g-4 mb-4">

          <div className="col-lg-5">
            <div className="chart-card">

              <div className="chart-header">
                <h5>My Assets</h5>
                <span>Assigned assets</span>
              </div>

              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={employeeAssetData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {employeeAssetData.map(
                        (_, index) => (
                          <Cell key={`cell-${index}`} />
                        )
                      )}
                    </Pie>

                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

          <div className="col-lg-7">
            <div className="chart-card">

              <div className="chart-header">
                <h5>My Activity</h5>
                <span>Recent tickets</span>
              </div>

              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={employeeMonthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />

                    <Bar
                      dataKey="tickets"
                      name="Tickets"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

        </div>

        {/* Employee Activity */}
        <div className="activity-card">

          <div className="chart-header">
            <h5>My Recent Activities</h5>
            <span>Latest updates</span>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              <div className="activity-icon blue">
                <i className="bi bi-laptop"></i>
              </div>

              <div>
                <strong>Laptop assigned</strong>
                <p>
                  Dell Latitude 5420 is currently assigned
                  to you.
                </p>
                <small>2 days ago</small>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon red">
                <i className="bi bi-tools"></i>
              </div>

              <div>
                <strong>Repair ticket opened</strong>
                <p>
                  Battery issue has been reported.
                </p>
                <small>Yesterday</small>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <h2>
            Welcome, {currentUser?.name || "Admin User"} 👋
          </h2>

          <p>
            Here's an overview of your Smart Asset Management
            System.
          </p>
        </div>
      </div>

      {/* Admin Cards */}
      <div className="row g-4 mb-4">

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon blue">
              <i className="bi bi-pc-display"></i>
            </div>

            <div>
              <p>Total Assets</p>
              <h3>38</h3>
              <span>
                <i className="bi bi-arrow-up"></i>
                8% this month
              </span>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon green">
              <i className="bi bi-box-arrow-up-right"></i>
            </div>

            <div>
              <p>Assigned Assets</p>
              <h3>12</h3>
              <span>
                <i className="bi bi-check-circle"></i>
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon purple">
              <i className="bi bi-box-seam"></i>
            </div>

            <div>
              <p>Available Assets</p>
              <h3>18</h3>
              <span>
                <i className="bi bi-check2"></i>
                Ready to assign
              </span>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon red">
              <i className="bi bi-tools"></i>
            </div>

            <div>
              <p>Open Tickets</p>
              <h3>5</h3>
              <span>
                <i className="bi bi-clock"></i>
                Needs attention
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Admin Charts */}
      <div className="row g-4 mb-4">

        <div className="col-lg-5">
          <div className="chart-card">

            <div className="chart-header">
              <h5>Asset Status</h5>
              <span>Current overview</span>
            </div>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>

                  <Pie
                    data={adminAssetStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {adminAssetStatusData.map(
                      (_, index) => (
                        <Cell key={`cell-${index}`} />
                      )
                    )}
                  </Pie>

                  <Tooltip />
                  <Legend />

                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>

        <div className="col-lg-7">
          <div className="chart-card">

            <div className="chart-header">
              <h5>Monthly Asset Overview</h5>
              <span>Assets added</span>
            </div>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={adminMonthlyData}>

                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="assets"
                    name="Assets"
                  />

                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>

      </div>

      {/* Admin Activity */}
      <div className="activity-card">

        <div className="chart-header">
          <h5>Recent Activities</h5>
          <span>Latest updates</span>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            <div className="activity-icon blue">
              <i className="bi bi-plus-circle"></i>
            </div>

            <div>
              <strong>New asset added</strong>
              <p>
                Dell Latitude 5420 was added to inventory.
              </p>
              <small>10 minutes ago</small>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon green">
              <i className="bi bi-person-check"></i>
            </div>

            <div>
              <strong>Asset assigned</strong>
              <p>
                MacBook Pro assigned to an employee.
              </p>
              <small>1 hour ago</small>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon red">
              <i className="bi bi-tools"></i>
            </div>

            <div>
              <strong>Repair ticket created</strong>
              <p>
                Printer issue reported by an employee.
              </p>
              <small>3 hours ago</small>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;