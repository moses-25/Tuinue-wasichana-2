// Example API functions for donations

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function getDonations() {
  const res = await fetch(`${API_URL}/donations`);
  if (!res.ok) throw new Error("Failed to fetch donations");
  return res.json();
}

export async function makeDonation(form) {
  const res = await fetch(`${API_URL}/donations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });
  if (!res.ok) throw new Error("Failed to make donation");
  return res.json();
}