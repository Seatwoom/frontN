function fetchUsers() {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;
      displayUsers(users);
    })
    .catch((error) => console.error("Error fetching users:", error));
}

function displayUsers(users) {
  const userContainer = document.getElementById("userContainer");

  userContainer.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User picture">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>City: ${user.location.city}</p>
            <p>Postcode: ${user.location.postcode}</p>
            <p>Cell: ${user.cell}</p>
        `;

    userContainer.appendChild(userCard);
  });
}

window.onload = fetchUsers;

document
  .getElementById("loadUsersButton")
  .addEventListener("click", fetchUsers);
