let reservations = JSON.parse(localStorage.getItem('billiard_res')) || [];

const form = document.getElementById('reservations');
const resList = document.getElementById('resList'); 

const renderReservations = () => {
    if (!resList) return;
    resList.innerHTML = ''; 

const listTitle = document.getElementById('list-title');
    if (listTitle) {
        listTitle.style.display = reservations.length > 0 ? 'block' : 'none';
    }

reservations.forEach((res, index) => {
    const card = document.createElement('div');
    card.className = 'reservation-card';
    card.innerHTML = `
        <p><strong>Name:</strong> ${res.name}</p>
        <p><strong>Age:</strong> ${res.age}</p>
        <p><strong>People:</strong> ${res.people}</p>
        <p><strong>Time:</strong> ${res.date} | ${res.time}</p>
        <button class="delete-btn" onclick="deleteRes(${index})">Delete</button>
        `;
        resList.appendChild(card);
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('Name').value;
    const age = parseInt(document.getElementById('Age').value);
    const people = document.getElementById('Number Of People').value;
    const date = document.getElementById('Data').value;
    const time = document.getElementById('time').value;

if (name === "" || isNaN(age) || people === "" || date === "" || time === "") {
        alert("Please fill in all fields.");
        return;
    }

if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    const newRes = { name, age, people, date, time };
    
    reservations.push(newRes);
    localStorage.setItem('billiard_res', JSON.stringify(reservations));

    renderReservations();
    form.reset();
});

window.deleteRes = (index) => {
    reservations.splice(index, 1);
    localStorage.setItem('billiard_res', JSON.stringify(reservations));
    renderReservations();
};

renderReservations();