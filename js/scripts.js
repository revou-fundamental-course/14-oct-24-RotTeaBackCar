// Section bagian Navigation 
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Section bagian windows prompt untuk mengisi nama di slider
  let username;
  username = window.prompt("Silahkan masukan nama Anda");

  // Cek apakah pengguna memasukkan teks
  if (username !== null && username.trim() !== "") {
      // Tampilkan username yang dimasukkan ke dalam elemen <p> di halaman
      document.getElementById("outputText").innerHTML = "Hai, " + username + "!" + "<br>Selamat datang di website ini...</br>";
  } else {
      // Jika pengguna tidak memasukkan teks atau menekan cancel
      document.getElementById("outputText").innerHTML = "Hai Pengunjung.<br>Selamat datang di website ini... ";
  }

  // Section bagian  form isian 
  document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mengirim popup/error kalau datanya tidak diisi

    // Input data elemet id
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Output data element id yang telah diketikan
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Data yang Dimasukkan:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    outputDiv.style.display = "block"; // Menampilkan area/data output
});