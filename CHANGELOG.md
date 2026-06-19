# Changelog

Semua perubahan penting pada proyek ini didokumentasikan di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
dan proyek ini menggunakan [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Tambah lebih banyak AI tools (Perplexity, Notion AI, GitHub Copilot, Runway, dll.)
- Filter & pencarian tools berdasarkan kategori dan harga
- Halaman perbandingan tools side-by-side
- Dark mode toggle

---

## [1.1.0] — 2026-06-19

### Added
- 🌐 **Dukungan Bilingual (Indonesian & English)** — Dukungan terjemahan penuh untuk deskripsi, paket harga, langkah penggunaan, dan tabel perbandingan side-by-side di file markdown serta antarmuka UI.
- 🎛️ **Bilingual Toggle & Selector** — Tombol interaktif untuk berpindah bahasa dengan penyimpanan state yang konsisten.
- ⭐ **Fitur Review & Rating Terintegrasi** — Integrasi ulasan pengguna dengan database backend Supabase (`@supabase/supabase-js`) pada halaman detail tool, menampilkan rating rata-rata, diagram distribusi bintang (rating bar), daftar ulasan, serta formulir pengiriman ulasan baru secara interaktif.
- 🛠️ **3 AI Tools baru**:
  - [Kiro](file:///src/content/tools/kiro.md) — Editor kode berbasis Code OSS dengan kecerdasan buatan.
  - [Leonardo AI](file:///src/content/tools/leonardo.md) — Pembuat gambar AI dengan warna aksen kustom dan logo SVG dinamis.
  - [OpenArt](file:///src/content/tools/openart.md) — Generator gambar kreatif berbasis AI.
- 📦 **TypeScript Support** — Penambahan dependensi TypeScript `5.9.3` untuk menjamin keamanan tipe data di dalam komponen Astro.

### Changed
- 🎨 **Redesain Halaman Detail Tool (`[slug].astro`)**:
  - Tampilan visual premium, bersih, dan modern yang selaras dengan panduan desain.
  - Penambahan slider kalkulator harga dinamis (Monthly vs. Annual billing) yang interaktif.
  - Sidebar detail tool, info harga, dan rekomendasi tool terkait yang terintegrasi secara bilingual.
  - Navigasi breadcrumbs dinamis berdasarkan kategori tool.

### Fixed
- 🚀 **GitHub Actions CI/CD** — Konfigurasi build menggunakan Node.js versi 22 secara eksplisit pada alur kerja `withastro/action@v3` untuk mencegah kegagalan kompilasi.
- 🧹 **Pembersihan Repositori** — Penghapusan file placeholder template dan artefak sistem desain lama yang tidak digunakan.

---

## [1.0.0] — 2026-06-17

### Added
- 🐡 **Inisiasi proyek** — Share Bansos AI sebagai direktori AI tools terkurasi
- 🌐 **Bilingual support** — Konten dalam Bahasa Indonesia dan English (`lang-id` / `lang-en`)
- 🗂️ **6 AI Tools perdana**:
  - [ChatGPT](https://chatgpt.com) — OpenAI
  - [Claude](https://claude.ai) — Anthropic
  - [Gemini](https://gemini.google.com) — Google
  - [Cursor](https://cursor.sh) — AI-powered code editor
  - [Midjourney](https://midjourney.com) — AI image generation
  - [v0](https://v0.dev) — Vercel's UI generator
- 📡 **RSS Feed** via `@astrojs/rss`
- 🗺️ **Sitemap XML** via `@astrojs/sitemap`
- ✍️ **MDX support** via `@astrojs/mdx`
- 🔒 **Static output** — deploy tanpa server
- 🌍 **Custom domain** `share.loc.cc` via GitHub Pages + CNAME
- 🤖 **GitHub Actions CI/CD** — auto build & deploy ke GitHub Pages saat push ke `main`

### Changed
- Migrasi dari Cloudflare Workers ke GitHub Pages untuk deployment
- Konfigurasi `astro.config.mjs`: hapus adapter Cloudflare, set `output: "static"`, set `site: "https://share.loc.cc"`

### Fixed
- Optimasi `.gitignore` untuk Astro dan Wrangler best practices
- Exclude direktori AI agent rules (`.agents/`, `.lean-ctx/`) dari git tracking

---

## [0.1.0] — 2026-06-17 *(Initial Import)*

### Added
- Import source code awal dari template Astro Blog Starter (Cloudflare)
- Struktur dasar proyek: `src/`, `public/`, `astro.config.mjs`, `package.json`

---

[Unreleased]: https://github.com/aristyantoo/share-bansos-ai/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/aristyantoo/share-bansos-ai/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/aristyantoo/share-bansos-ai/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/aristyantoo/share-bansos-ai/releases/tag/v0.1.0
