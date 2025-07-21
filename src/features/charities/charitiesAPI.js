// Example API functions for charities

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function fetchCharities() {
  const res = await fetch(`${API_URL}/charities`);
  if (!res.ok) throw new Error("Failed to fetch charities");
  return res.json();
}

export async function fetchCharityDetails(id) {
  const res = await fetch(`${API_URL}/charities/${id}`);
  if (!res.ok) throw new Error("Failed to fetch charity details");
  return res.json();
}

export async function applyCharity(form) {
  const res = await fetch(`${API_URL}/charities/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });
  if (!res.ok) throw new Error("Charity application failed");
  return res.json();
}