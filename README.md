# 📦 Sistem Inventaris Lab IT (Three-Tier Web App)

Proyek ini adalah implementasi **Three-Tier Web Application** di Google Cloud Platform (GCP). Aplikasi ini dirancang untuk mencatat dan memantau inventaris barang di Laboratorium IT (Komputer, Kabel, Perangkat Jaringan, dll) dengan arsitektur yang scalable dan aman.

![Architecture Diagram](./architecture.png)
*(Pastikan upload gambar diagram kalian dengan nama architecture.png)*

## 👥 Anggota Kelompok

| Nama Lengkap | NIM |
| :--- | :--- | :--- |
| **Martua** | [ISI_NIM_DISINI] | 
| **Christoper** | [ISI_NIM_DISINI] |
| **Rachel** | [ISI_NIM_DISINI] |
| **Arof** | [ISI_NIM_DISINI] |
| **Ichza Auliya Gumilar** | 120140188 |
| **Fatkhan** | [ISI_NIM_DISINI] |

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi dan layanan cloud modern:

### Infrastructure & Cloud
* **Google Cloud Platform (GCP):** Platform utama.
* **Terraform:** Infrastructure as Code (IaC) untuk provisioning resource otomatis.
* **Cloud Run:** Serverless compute untuk menjalankan Frontend dan Backend container.
* **Cloud SQL (PostgreSQL):** Database relasional terkelola.
* **Memorystore (Redis):** In-memory caching untuk meningkatkan performa.

### Application Stack
* **Backend:** Go (Golang) - Menangani logic API dan koneksi database.
* **Frontend:** HTML/CSS/JS (Containerized) - Antarmuka pengguna.
* **Containerization:** Docker.

---

## 🚀 Cara Deployment (Deployment Guide)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di Google Cloud Platform kalian sendiri.

### Prasyarat
1.  Akun Google Cloud Platform dengan Billing aktif.
2.  [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) terinstall.
3.  [Terraform](https://developer.hashicorp.com/terraform/install) terinstall.

### Langkah 1: Clone Repository
```bash
git clone [https://github.com/](https://github.com/)[USERNAME_GITHUB_KALIAN]/[NAMA_REPO].git
cd [NAMA_REPO]
