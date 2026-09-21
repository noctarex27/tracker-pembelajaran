const matkulInput = document.getElementById('matkulInput');
const hariInput = document.getElementById('hariInput');
const addBtn = document.getElementById('addBtn');
const trackerList = document.getElementById('trackerList')
function tambahJadwal() {
  const matkulText = matkulInput.value.trim();
  const hariText = hariInput.value.trim();
  if (matkulText === '' || hariText === '') {
    alert('Harap isi nama pelajaran dan jadwalnya ya!');
    return;
    const li = document.createElement('li');
  li.innerHTML = `
    <div class="info">
      <strong>${matkulText}</strong>
      <small>${hariText}</small>
    </div>
    <button class="check-btn">Selesai</button>
    trackerList.appendChild(li);
    const checkBtn = li.querySelector('.check-btn');
  checkBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });
}
ddBtn.addEventListener('click', tambahJadwal);
