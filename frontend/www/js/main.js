var basepath = "https://three-tier-app-api-1018358556426.us-central1.run.app/api/v1/todo";

document.addEventListener("DOMContentLoaded", function () {
  listTodos();
});

// --- FUNGSI API (BACKEND) ---

function listTodos() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        renderListTodos(xmlhttp.response);
      } else {
        console.error("Gagal mengambil data");
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

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 201) {
        // Reset input form setelah sukses
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        listTodos(); // Refresh list
      } else {
        alert("Gagal menyimpan barang. Cek koneksi backend.");
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

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        listTodos();
      } else {
        alert("Gagal update status");
      }
    }
  };
  xmlhttp.open("POST", basepath + "/" + id, true);
  xmlhttp.send(form);
}

function deleteTodo(id) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 204) {
        listTodos();
      } else {
        alert("Gagal menghapus");
      }
    }
  };
  xmlhttp.open("DELETE", basepath + "/" + id, true);
  xmlhttp.send();
}

// --- FUNGSI LOGIKA BARU (INVENTARIS) ---

// Dipanggil saat tombol "Tambah Barang" diklik
function createNewTask() {
  let titleInput = document.getElementById("title").value;
  let descInput = document.getElementById("description").value;

  if (titleInput.trim() === "") {
    alert("Nama Barang wajib diisi!");
    return;
  }

  // Gabungkan Nama & Lokasi menjadi satu string untuk disimpan
  // Format: "Monitor LG [Rak A]"
  let finalTitle = titleInput;
  if (descInput.trim() !== "") {
    finalTitle = titleInput + " [" + descInput + "]";
  }

  createTodo(finalTitle);
}

// --- FUNGSI TAMPILAN (UI) ---

function renderListTodos(resp) {
  let todos = JSON.parse(resp);
  let ul = document.getElementById("todo-list");
  ul.innerHTML = ""; // Bersihkan list lama

  if (todos.length === 0) {
    ul.innerHTML =
      "<p style='text-align:center; color:#888;'>Belum ada barang inventaris.</p>";
    return;
  }

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className = "inventory-item";

    // Tentukan Status (Complete = Rusak, Incomplete = Baik)
    // Ini trik supaya tidak ubah backend tapi punya status
    let statusText = todo.complete ? "RUSAK" : "BAIK";
    let statusClass = todo.complete ? "badge-broken" : "badge-good";
    let cardClass = todo.complete ? "card-broken" : "";

    li.innerHTML = `
            <div class="card ${cardClass}">
                <div class="card-info">
                    <span class="item-name">${todo.title}</span>
                </div>
                <div class="card-actions">
                    <button class="badge ${statusClass}" onclick="toggleStatus('${todo.id}', '${todo.title}', ${todo.complete})">
                        ${statusText}
                    </button>
                    <button class="btn-delete" onclick="deleteTodo('${todo.id}')">
                        <span class="material-icons">delete</span>
                    </button>
                </div>
            </div>
        `;
    ul.appendChild(li);
  });
}

function toggleStatus(id, title, currentStatus) {
  // Balik statusnya (True jadi False, False jadi True)
  updateTodo(id, title, !currentStatus);
}
