const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

const namaContainer = document.querySelector('#hero h2 span');
    namaContainer.innerText = nama;

    // jika ingin menambah parameter nama
// document.querySelector('#gift p span').innerText = nama;