/* Students Data */
let students = [
  "Aldi Ramadhan","Bagas Pratama","Cahya Nugraha","Dewi Anggraini","Eka Saputra",
  "Fajar Maulana","Gita Ayu","Hendra Kurnia","Irfan Maulana","Jihan Salsabila",
  "Kiki Putra","Laras Pertiwi","Mohammad Rizky","Nadia Lutfiah","Oki Andrian",
  "Putri Salsabila","Rian Hidayat","Sinta Wulandari","Tegar Prasetyo","Ulfa Dwi",
  "Viki Ramdani","Wulan Sari","Yusuf Pratama","Zaki Ramadhan"
];

/* Password admin */
const ADMIN_PASSWORD = "tjktb";

/* Refresh Students Section */
function renderStudents(){
  const grid = document.getElementById('students-grid');
  grid.innerHTML = '';
  students.forEach(name=>{
    const div = document.createElement('div');
    div.className = 'student';
    div.innerHTML = `
      <div class="avatar">${name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
      <div class="name">${name}</div>
    `;
    grid.appendChild(div);
  });
}

/* Admin Login */
function adminLogin(){
  const pass = document.getElementById('admin-pass').value;
  if(pass === ADMIN_PASSWORD){
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    renderAdminList();
  } else {
    alert("Password salah bosku 😎");
  }
}

/* Display admin list */
function renderAdminList(){
  const list = document.getElementById('admin-list');
  list.innerHTML = '';
  students.forEach((name,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${name}</span>
      <button onclick="removeStudent(${i})">Hapus</button>
    `;
    list.appendChild(li);
  });
}

/* Add new student */
function addStudent(){
  const input = document.getElementById('new-student');
  const name = input.value.trim();
  if(name){
    students.push(name);
    input.value = '';
    renderStudents();
    renderAdminList();
  }
}

/* Remove student */
function removeStudent(index){
  students.splice(index,1);
  renderStudents();
  renderAdminList();
}

/* Smooth scroll init */
function smoothLinks(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* Init */
document.addEventListener('DOMContentLoaded', ()=>{
  renderStudents();
  smoothLinks();
});
