// 1. Ambil elemen dari HTML berdasarkan ID
const matkulInput = document.getElementById('matkulInput');
const hariInput = document.getElementById('hariInput');
const addBtn = document.getElementById('addBtn');
const trackerList = document.getElementById('trackerList');

// 2. Fungsi untuk menambah jadwal baru
function tambahJadwal() {
  const matkulText = matkulInput.value.trim();
  const hariText = hariInput.value.trim();

  // Validasi: Jangan tambah kalau inputan kosong
  if (matkulText === '' || hariText === '') {
    alert('Harap isi nama pelajaran dan jadwalnya ya!');
    return;
  }

  // Bikin elemen <li> baru
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="info">
      <strong>${matkulText}</strong>
      <small>${hariText}</small>
    </div>
    <button class="check-btn">Selesai</button>
  `;

  // Masukkan <li> ke dalam daftar <ul>
  trackerList.appendChild(li);

  // Kosongkan kembali form input
  matkulInput.value = '';
  hariInput.value = '';

  // Fitur tombol Selesai
  const checkBtn = li.querySelector('.check-btn');
  checkBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });
}

// 3. Jalankan fungsi saat tombol "Tambah Ke Tracker" diklik
addBtn.addEventListener('click', tambahJadwal);
