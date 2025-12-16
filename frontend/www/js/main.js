// --- KONFIGURASI API (BACKEND) ---
var basepath = "https://three-tier-app-api-1018358556426.us-central1.run.app/api/v1/todo"; 

// --- DAFTAR EMAIL ADMIN ---
const ADMIN_EMAILS = [
    "kevinlubis2909@gmail.com", 
    "martua.122140119@student.itera.ac.id", 
    "christopher.122140090@student.itera.ac.id", 
    "rachel.122140181@student.itera.ac.id", 
];

document.addEventListener('DOMContentLoaded', function(){
    listTodos();
});

// --- FUNGSI API (Fetch Data) ---

function listTodos() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                renderListTodos(xmlhttp.response);
            } else {
                console.error('Gagal mengambil data.');
                document.getElementById("todo-list").innerHTML = "<li style='color:red; text-align:center;'>Gagal koneksi ke Backend.</li>";
            }
        }
    };
    xmlhttp.open("GET", basepath, true);
    xmlhttp.send();
}

function createTodo(title) {
    var xmlhttp = new XMLHttpRequest();
    let form = new FormData();
    form.append("title", title);

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 201) {
                document.getElementById('title').value = "";
                document.getElementById('description').value = "";
                listTodos(); 
            } else {
                alert('Gagal menyimpan.');
            }
        }
    };
    xmlhttp.open("POST", basepath, true);
    xmlhttp.send(form);
}

function updateTodo(id, title, complete) {
    var xmlhttp = new XMLHttpRequest();
    let form = new FormData();
    form.append("title", title);
    form.append("complete", complete);

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                listTodos();
            } else {
                alert('Gagal update status.');
            }
        }
    };
    xmlhttp.open("POST", basepath+"/"+ id, true);
    xmlhttp.send(form);
}

function deleteTodo(id) {
    if(!confirm("Yakin hapus barang ini?")) return;
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 204) {
                listTodos();
            } else {
                alert('Gagal menghapus.');
            }
        }
    };
    xmlhttp.open("DELETE", basepath+"/"+ id, true);
    xmlhttp.send();
}

// --- FUNGSI LOGIKA INVENTARIS ---

function createNewTask() {
    let titleInput = document.getElementById('title').value;
    let descInput = document.getElementById('description').value;

    if (titleInput.trim() === "") {
        alert("Nama Barang wajib diisi!");
        return;
    }

    let finalTitle = titleInput;
    if (descInput.trim() !== "") {
        finalTitle = titleInput + " [" + descInput + "]";
    }

    createTodo(finalTitle);
}

function renderListTodos(resp) {
    let todos = JSON.parse(resp);
    let ul = document.getElementById("todo-list");
    ul.innerHTML = ""; 

    // Cek apakah user saat ini adalah Admin?
    // window.currentUserEmail diset dari index.html saat login
    let isAdmin = false;
    if (window.currentUserEmail && ADMIN_EMAILS.includes(window.currentUserEmail)) {
        isAdmin = true;
    }

    if (todos.length === 0) {
        ul.innerHTML = "<li style='text-align:center; color:#888; margin-top:20px;'>Belum ada barang.</li>";
        return;
    }

    todos.forEach(todo => {
        let li = document.createElement("li");
        li.className = "inventory-item";
        
        let statusText = todo.complete ? "RUSAK" : "BAIK";
        let statusClass = todo.complete ? "badge-broken" : "badge-good";

        // TAMPILAN UNTUK ADMIN (Bisa Klik Status & Ada Tombol Hapus)
        let adminActionHTML = `
            <div class="card-actions">
                <button class="badge ${statusClass}" onclick="toggleStatus('${todo.id}', '${todo.title}', ${todo.complete})">
                    ${statusText}
                </button>
                <button class="btn-delete" onclick="deleteTodo('${todo.id}')">
                    <span class="material-icons">delete</span>
                </button>
            </div>
        `;

        // TAMPILAN UNTUK USER BIASA (Status Cuma Teks, Gak Ada Tombol Hapus)
        let userActionHTML = `
            <div class="card-actions">
                <span class="badge ${statusClass}" style="cursor: default; opacity: 0.8;">
                    ${statusText}
                </span>
            </div>
        `;

        li.innerHTML = `
            <div class="card">
                <div class="card-info">
                    <span class="item-name">${todo.title}</span>
                </div>
                ${isAdmin ? adminActionHTML : userActionHTML}
            </div>
        `;
        ul.appendChild(li);
    });
}

function toggleStatus(id, title, currentStatus) {
    updateTodo(id, title, !currentStatus);
}

// --- FITUR SEARCH ---
function searchBarang() {
    let input = document.getElementById('search-input');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("todo-list");
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let span = li[i].getElementsByClassName("item-name")[0];
        if (span) {
            let txtValue = span.textContent || span.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
