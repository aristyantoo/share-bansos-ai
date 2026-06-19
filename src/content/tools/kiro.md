---
name: Kiro
description: IDE berbasis AI yang berfokus pada pengembangan berbasis spesifikasi (spec-driven development) untuk membantu Anda menulis kode yang lebih andal dan terstruktur.
descriptionEn: An AI-first code editor focused on spec-driven development, designed to help you plan, write, and verify code through structured agentic workflows.
category: Coding
url: https://kiro.dev/
logoUrl: ""
price: Free / $20/mo
creator: Kiro
value: Spec-Driven
valueEn: Spec-Driven
featured: false
accentColor: '#8B5CF6'

# Redesign metadata
platforms:
  - Windows
  - macOS
  - Linux
rating: 4.6
ratingCount: 128
basedOn: VS Code
aiModels: Bedrock
license: Proprietary
launchYear: "2025"

features:
  - icon: "📋"
    name: Pengembangan Berbasis Spesifikasi
    nameEn: Spec-Driven Development
    desc: Definisikan kebutuhan, desain, dan daftar tugas sebelum menulis kode. Agen AI mengikuti spesifikasi Anda, bukan tebakan.
    descEn: Define requirements, designs, and task checklists before writing a single line of code. AI agents follow your specs, not guesses.
  - icon: "🤖"
    name: Alur Kerja Agen (Agentic)
    nameEn: Agentic Workflows
    desc: Agen otonom menganalisis basis kode, menulis file, menjalankan pengujian, dan mengelola perubahan multi-file di latar belakang.
    descEn: Autonomous agents analyze your codebase, write files, run tests, and manage multi-file changes — all in the background.
  - icon: "🔌"
    name: Ekosistem VS Code
    nameEn: VS Code Ecosystem
    desc: Kompatibilitas penuh dengan ekstensi, pintasan keyboard, dan konfigurasi VS Code Anda saat ini. Tanpa hambatan migrasi.
    descEn: Full compatibility with your existing VS Code extensions, keyboard shortcuts, and configurations. Zero migration friction.
  - icon: "☁️"
    name: Cloud-Agnostic
    nameEn: Cloud-Agnostic
    desc: Jalankan secara lokal atau di cloud. Tidak memerlukan akun AWS pribadi — model dasar dilayani melalui Amazon Bedrock.
    descEn: Run locally or in the cloud. No personal AWS account required — foundation models are served via Amazon Bedrock.
  - icon: "🔒"
    name: Hook Keamanan Bawaan
    nameEn: Built-in Security Hooks
    desc: Pemindaian keamanan dan pemeriksaan kepatuhan terintegrasi sehingga masalah terdeteksi saat spesifikasi dibuat, bukan setelah deployment.
    descEn: Security scanning and compliance checks baked into the workflow so issues are caught at spec time, not after deployment.
  - icon: "📊"
    name: Koordinasi Multi-Agen
    nameEn: Multi-Agent Coordination
    desc: Orkestrasikan beberapa agen khusus untuk tugas yang berbeda secara bersamaan, lengkap dengan deteksi konflik.
    descEn: Orchestrate multiple specialized agents on different tasks simultaneously, with conflict detection and merge management.

pricing:
  monthly:
    - name: Free
      tagline: Coba sebelum Anda berkomitmen
      taglineEn: Try before you commit
      price: "$0"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Tidak memerlukan kartu kredit
      annualNoteEn: No credit card required
      ctaText: Mulai Gratis
      ctaTextEn: Get Started Free
      features:
        - 50 interaksi agen/hari
        - Alur kerja berbasis spesifikasi
        - Kompatibilitas ekstensi VS Code
        - 1 proyek aktif
      featuresEn:
        - 50 agent interactions/day
        - Spec-driven workflow
        - VS Code extension compat.
        - Single project
    - name: Pro
      tagline: Untuk pengembang profesional
      taglineEn: For serious developers
      price: "$20"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Ditagih bulanan, batalkan kapan saja
      annualNoteEn: Billed monthly, cancel anytime
      ctaText: Mulai Uji Coba Pro
      ctaTextEn: Start Pro Trial
      popular: true
      features:
        - Interaksi agen tak terbatas
        - Alur kerja berbasis spesifikasi
        - Kompatibilitas ekstensi VS Code
        - Proyek aktif tak terbatas
        - Tugas agen latar belakang
        - Akses model prioritas
      featuresEn:
        - Unlimited interactions
        - Spec-driven workflow
        - VS Code extension compat.
        - Unlimited projects
        - Background agentic tasks
        - Priority model access
    - name: Team
      tagline: Dibuat untuk kolaborasi tim
      taglineEn: Built for collaboration
      price: "$35"
      period: "/kursi/bln"
      periodEn: "/seat/mo"
      annualNote: Minimal 3 kursi
      annualNoteEn: Minimum 3 seats
      ctaText: Hubungi Penjualan
      ctaTextEn: Contact Sales
      features:
        - Semua fitur paket Pro
        - Template spesifikasi bersama
        - Koordinasi agen tim
        - Penagihan terpusat
        - Dasbor admin
        - Dukungan prioritas
        - SSO / SAML
      featuresEn:
        - Everything in Pro
        - Shared spec templates
        - Team agent coordination
        - Centralized billing
        - Admin dashboard
        - Priority support
        - SSO / SAML
  annual:
    - name: Free
      tagline: Coba sebelum Anda berkomitmen
      taglineEn: Try before you commit
      price: "$0"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Selalu gratis
      annualNoteEn: Always free
      ctaText: Mulai Gratis
      ctaTextEn: Get Started Free
      features:
        - 50 interaksi agen/hari
        - Alur kerja berbasis spesifikasi
        - Kompatibilitas ekstensi VS Code
        - 1 proyek aktif
      featuresEn:
        - 50 agent interactions/day
        - Spec-driven workflow
        - VS Code extension compat.
        - Single project
    - name: Pro
      tagline: Untuk pengembang profesional
      taglineEn: For serious developers
      price: "$16"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Ditagih $192 tahunan — hemat $48
      annualNoteEn: $192 billed annually — save $48
      ctaText: Mulai Uji Coba Pro
      ctaTextEn: Start Pro Trial
      popular: true
      features:
        - Interaksi agen tak terbatas
        - Alur kerja berbasis spesifikasi
        - Kompatibilitas ekstensi VS Code
        - Proyek aktif tak terbatas
        - Tugas agen latar belakang
        - Akses model prioritas
      featuresEn:
        - Unlimited interactions
        - Spec-driven workflow
        - VS Code extension compat.
        - Unlimited projects
        - Background agentic tasks
        - Priority model access
    - name: Team
      tagline: Dibuat untuk kolaborasi tim
      taglineEn: Built for collaboration
      price: "$28"
      period: "/kursi/bln"
      periodEn: "/seat/mo"
      annualNote: $336/kursi/tahun — hemat 20%
      annualNoteEn: $336/seat/yr — save 20%
      ctaText: Hubungi Penjualan
      ctaTextEn: Contact Sales
      features:
        - Semua fitur paket Pro
        - Template spesifikasi bersama
        - Koordinasi agen tim
        - Penagihan terpusat
        - Dasbor admin
        - Dukungan prioritas
        - SSO / SAML
      featuresEn:
        - Everything in Pro
        - Shared spec templates
        - Team agent coordination
        - Centralized billing
        - Admin dashboard
        - Priority support
        - SSO / SAML

steps:
  - title: Unduh Kiro
    titleEn: Download Kiro
    desc: Kunjungi kiro.dev dan unduh penginstal untuk Windows, macOS, atau Linux. Instalasi kurang dari semenit.
    descEn: Head to kiro.dev and download the installer for Windows, macOS, or Linux. Installation takes under a minute.
  - title: Masuk
    titleEn: Sign in
    desc: Otentikasi menggunakan Google, GitHub, atau AWS SSO. Profil VS Code Anda dapat diimpor otomatis.
    descEn: Authenticate using Google, GitHub, or AWS SSO. Your existing VS Code profile can be imported automatically.
  - title: Buka Proyek & Tulis Spesifikasi
    titleEn: Open Project & Write Spec
    desc: Buka folder apa saja dan gunakan Panel Spesifikasi untuk mendefinisikan apa yang ingin Anda bangun. Kiro akan menghasilkan daftar tugas dan mengeksekusinya.
    descEn: Open any folder and use the Spec Panel to define what you want to build. Kiro will generate a task checklist and start executing.
    code: "⌘ K → \"New Spec\" untuk membuka editor spesifikasi"

comparisons:
  - name: Kiro
    specDriven: true
    baseEditor: Code OSS
    freeTier: true
    startingPrice: "$20/mo"
  - name: Cursor
    specDriven: false
    baseEditor: VS Code fork
    freeTier: true
    startingPrice: "$20/mo"
  - name: GitHub Copilot
    specDriven: false
    baseEditor: Extension
    freeTier: true
    startingPrice: "$10/mo"
  - name: Windsurf
    specDriven: false
    baseEditor: VS Code fork
    freeTier: true
    startingPrice: "$15/mo"
---

<div class="lang-en">
Kiro is an AI-powered Integrated Development Environment (IDE) built on top of Code OSS. Unlike typical AI coding assistants that generate code directly from simple prompts ("vibe coding"), Kiro guides developers to first define structured specifications, design requirements, and checklists, enabling highly reliable and maintainable code generation.
</div>

<div class="lang-id">
Kiro adalah Integrated Development Environment (IDE) berbasis AI yang dibangun di atas Code OSS. Berbeda dengan asisten coding AI biasa yang menghasilkan kode langsung dari instruksi singkat ("vibe coding"), Kiro membimbing pengembang untuk terlebih dahulu mendefinisikan spesifikasi terstruktur, kebutuhan desain, dan daftar tugas, guna menghasilkan kode yang sangat andal dan mudah dirawat.
</div>
