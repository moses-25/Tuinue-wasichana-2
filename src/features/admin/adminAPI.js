// Example API functions for admin section

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Charity applications
export async function fetchPendingCharities() {
  const res = await fetch(`${API_URL}/admin/charities/pending`);
  if (!res.ok) throw new Error("Failed to fetch pending charities");
  return res.json();
}

export async function approveCharity(id) {
  const res = await fetch(`${API_URL}/admin/charities/${id}/approve`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to approve charity");
}

export async function rejectCharity(id) {
  const res = await fetch(`${API_URL}/admin/charities/${id}/reject`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to reject charity");
}

// Dashboard stats
export async function fetchAdminStats() {
  const res = await fetch(`${API_URL}/admin/stats`);
  if (!res.ok) throw new Error("Failed to fetch admin stats");
  return res.json();
}

// Recent charities
export async function fetchRecentCharities() {
  const res = await fetch(`${API_URL}/admin/charities/recent`);
  if (!res.ok) throw new Error("Failed to fetch recent charities");
  return res.json();
}

// Recent donations
export async function fetchRecentDonations() {
  const res = await fetch(`${API_URL}/admin/donations/recent`);
  if (!res.ok) throw new Error("Failed to fetch recent donations");
  return res.json();
}