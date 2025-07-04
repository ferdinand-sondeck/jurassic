const API_URL = "http://localhost:3000/api/incidents";
const TOKEN = "JurassicSecretToken";

async function loadIncidents() {
  const type = document.getElementById("filter-type").value;
  const urgence = document.getElementById("filter-urgence").value;
  const zone = document.getElementById("filter-zone").value;

  const params = new URLSearchParams();
  if (type) params.append("type", type);
  if (urgence) params.append("urgence", urgence);
  if (zone) params.append("zone", zone);

  const res = await fetch(`${API_URL}?${params.toString()}`, {
    headers: { Authorization: TOKEN },
  });
  const incidents = await res.json();

  const list = document.getElementById("incident-list");
  list.innerHTML = "";
  incidents.forEach((incident) => {
    const div = document.createElement("div");
    div.className = `incident ${incident.statut === "Résolu" ? "resolu" : ""}`;
    div.innerHTML = `
      <h3>${incident.titre}</h3>
      <p><strong>Zone :</strong> ${incident.zone}</p>
      <p><strong>Urgence :</strong> ${incident.urgence}</p>
      <p><strong>Type :</strong> ${incident.type}</p>
      <p>${incident.description}</p>
      <p><strong>Statut :</strong> ${incident.statut}</p>
      ${
        incident.statut !== "Résolu"
          ? `<button onclick="resolveIncident(${incident.id})">✅ Marquer comme résolu</button>`
          : ""
      }
    `;
    list.appendChild(div);
  });
}

async function createIncident(e) {
  e.preventDefault();
  const data = {
    titre: document.getElementById("titre").value,
    description: document.getElementById("description").value,
    type: document.getElementById("type").value,
    zone: document.getElementById("zone").value,
    urgence: document.getElementById("urgence").value,
    statut: "En cours",
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Incident ajouté !");
    loadIncidents();
  } else {
    alert("Erreur !");
  }
}

async function resolveIncident(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    body: JSON.stringify({ statut: "Résolu" }),
  });
  loadIncidents();
}

window.onload = loadIncidents;