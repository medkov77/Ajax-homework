import '../components';
import axios from 'axios';

const loadBtn = document.querySelector('.js-load');
const resultsContainer = document.querySelector('.js-results');
const resultsUsersContainer = document.querySelector('.users-results');
const searchInput = document.querySelector('.js-input');

loadBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`;
    });
});

axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  const users = res.data;

  users.map((user) => {
    resultsUsersContainer.innerHTML += `<tr><td>${user.name}</td> <td>${user.username}
    </td><td>${user.email}</td><td>${user.address.city}</td><td>${user.phone}</td><td>${user.website}</td><td>${user.company.name}</td></tr>`;
  });
});
