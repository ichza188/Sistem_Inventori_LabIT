<div align="center">

# 📦 Sistem Inventaris Lab IT

### *Three-Tier Web Application on Google Cloud Platform*

[![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com)
[![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://terraform.io)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://golang.org)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)

*Aplikasi web modern untuk mencatat dan memantau inventaris barang di Laboratorium IT dengan arsitektur yang scalable, secure, dan cloud-native.*

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](https://github.com/ichza188/Sistem_Inventori_LabIT/issues) • [✨ Request Feature](https://github.com/ichza188/Sistem_Inventori_LabIT/issues)

</div>

---

## 📸 Preview

![Architecture Diagram](./architecture.png)
> *Arsitektur Three-Tier menggunakan Cloud Run, Cloud SQL, dan Memorystore untuk high availability dan scalability*

---

## 👥 Tim Pengembang

<table align="center">
  <tr>
    <th>Nama</th>
    <th>NIM</th>
    <th>Role</th>
  </tr>
  <tr>
    <td><b>Martua Kevin A.M.H.Lubis</b></td>
    <td>122140119</td>
    <td>Cloud Architect & Deployment</td>
  </tr>
  <tr>
    <td><b>Rachel Olivia Manullang</b></td>
    <td>122140181</td>
    <td>Tech Writer & PM</td>
  </tr>
  <tr>
    <td><b>Christopher Benaya Tampubolon</b></td>
    <td>122140090</td>
    <td>Cloud Architect & Deployment</td>
  </tr>
  <tr>
    <td><b>Arof Andestama</b></td>
    <td>121140182</td>
    <td>Frontend/Backend Developer</td>
  </tr>
  <tr>
    <td><b>Ichza Auliya Gumilar</b></td>
    <td>120140188</td>
    <td>Frontend/Backend Developer</td>
  </tr>
  <tr>
    <td><b>Fatkhan Aziez S</b></td>
    <td>120140181</td>
    <td>Tech Writer & PM</td>
  </tr>
</table>

---

## ✨ Fitur Utama

- 🔐 **Secure Architecture** - Implementasi best practices keamanan cloud
- ⚡ **High Performance** - Redis caching untuk response time yang cepat
- 📈 **Auto Scaling** - Cloud Run yang scale otomatis sesuai traffic
- 🔄 **CI/CD Pipeline** - Automated deployment dengan Cloud Build
- 💾 **Reliable Storage** - Cloud SQL dengan automated backups
- 🌐 **CORS Enabled** - Support untuk frontend terpisah
- 📱 **Responsive UI** - Interface yang mobile-friendly

---

## 🏗️ Arsitektur Sistem

```
┌─────────────────┐
│   User/Client   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│      Frontend (Cloud Run)           │
│    HTML / CSS / JavaScript          │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│      Backend API (Cloud Run)        │
│         Golang + Gorilla            │
└────┬────────────────────────────┬───┘
     │                            │
     ▼                            ▼
┌─────────────┐          ┌────────────────┐
│  Cloud SQL  │          │  Memorystore   │
│   (MySQL)   │          │    (Redis)     │
└─────────────┘          └────────────────┘
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### **Backend**
- ![Go](https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white) **Go 1.17+**
- ![Gorilla](https://img.shields.io/badge/-Gorilla%20Mux-00ADD8?style=flat-square) **Gorilla Mux** - HTTP Router
- ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) **MySQL Driver**
- ![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white) **Redigo** - Redis Client

</td>
<td valign="top" width="50%">

### **Frontend**
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) **HTML5**
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3) **CSS3**
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **Vanilla JavaScript**
- ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?style=flat-square&logo=google&logoColor=white) **Material Icons**

</td>
</tr>
<tr>
<td valign="top" width="50%">

### **Infrastructure**
- ![GCP](https://img.shields.io/badge/-Google%20Cloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white) **Google Cloud Platform**
- ![Terraform](https://img.shields.io/badge/-Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white) **Terraform (IaC)**
- ![Cloud Run](https://img.shields.io/badge/-Cloud%20Run-4285F4?style=flat-square&logo=google-cloud&logoColor=white) **Cloud Run**
- ![Cloud SQL](https://img.shields.io/badge/-Cloud%20SQL-4285F4?style=flat-square&logo=google-cloud&logoColor=white) **Cloud SQL (MySQL)**

</td>
<td valign="top" width="50%">

### **DevOps**
- ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) **Docker**
- ![Cloud Build](https://img.shields.io/badge/-Cloud%20Build-4285F4?style=flat-square&logo=google-cloud&logoColor=white) **Cloud Build (CI/CD)**
- ![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) **Git**
- ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github) **GitHub**

</td>
</tr>
</table>

---

## 🚀 Deployment Guide

### 📋 Prerequisites

Pastikan tools berikut sudah terinstall:

- ✅ [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) - CLI untuk GCP
- ✅ [Terraform](https://developer.hashicorp.com/terraform/install) - Infrastructure as Code
- ✅ [Docker](https://docs.docker.com/get-docker/) - Containerization
- ✅ [Git](https://git-scm.com/downloads) - Version control
- ✅ Akun GCP dengan **Billing aktif**

---

### 📥 Clone Repository**

```bash
git clone https://github.com/ichza188/Sistem_Inventori_LabIT.git
cd Sistem_Inventori_LabIT
