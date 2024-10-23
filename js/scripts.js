const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


  // Ambil input dari pengguna melalui prompt
  let username;
  username = window.prompt("What's your username?");

  // Cek apakah pengguna memasukkan teks
  if (username !== null && username.trim() !== "") {
      // Tampilkan username yang dimasukkan ke dalam elemen <p> di halaman
      document.getElementById("outputText").innerHTML = "Hai, " + username + "!" + "<br>Selamat datang di website ini...</br>";
  } else {
      // Jika pengguna tidak memasukkan teks atau menekan cancel
      document.getElementById("outputText").innerHTML = "Hai Pengunjung.<br>Selamat datang di website ini... ";
  }