# 🐡 Share Bansos AI

> Direktori AI tools terkurasi — temukan, bandingkan, dan manfaatkan produk AI terbaik untuk meningkatkan produktivitas kamu.

[![Deploy to GitHub Pages](https://github.com/aristyantoo/share-bansos-ai/actions/workflows/deploy.yml/badge.svg)](https://github.com/aristyantoo/share-bansos-ai/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro%206-blueviolet?logo=astro)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🌐 Live Site

**[https://share.loc.cc](https://share.loc.cc)**

---

## ✨ Tentang Proyek

**Share Bansos AI** adalah website direktori AI tools yang dikurasi secara manual — mirip seperti "Product Hunt" khusus AI, tapi lebih ringan dan cepat. Dibangun dengan Astro sebagai static site untuk performa optimal.

### Fitur Utama

- 🚀 **100/100 Lighthouse** — Performa, aksesibilitas, dan SEO optimal
- 🌏 **Bilingual (ID/EN)** — Konten tersedia dalam Bahasa Indonesia dan English dengan toggle switcher
- 🗂️ **Direktori AI Tools** — ChatGPT, Claude, Gemini, Cursor, Kiro, Leonardo AI, Midjourney, OpenArt, v0, dan terus bertambah
- ⭐ **Reviews & Ratings** — Fitur ulasan dan rating interaktif terintegrasi dengan backend Supabase
- 📡 **RSS Feed** — Subscribe ke pembaruan tools terbaru
- 🗺️ **Sitemap otomatis** — SEO-friendly dengan sitemap XML
- ✍️ **Markdown & MDX** — Konten mudah dikelola lewat file `.md`
- 🔒 **Static Output** — Deploy ke GitHub Pages / CDN manapun

---

## 🛠️ Tech Stack

| Teknologi | Versi | Peran |
|-----------|-------|-------|
| [Astro](https://astro.build) | `^6.4.7` | Framework utama (Static SSG) |
| [@astrojs/mdx](https://docs.astro.build/en/guides/markdown-content/) | `^6.0.3` | Dukungan MDX |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | `^4.0.18` | RSS Feed |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/sitemap/) | `^3.7.3` | Sitemap XML |
| TypeScript | `5.9.3` | Type safety |

---

## 🚀 Struktur Proyek

```
share-bansos-ai/
├── public/              # Aset statis (favicon, gambar, CNAME)
├── src/
│   ├── components/      # Komponen Astro yang dapat digunakan ulang
│   ├── content/
│   │   └── tools/       # File Markdown tiap AI tool (chatgpt.md, claude.md, dst.)
│   ├── layouts/         # Layout halaman (BaseLayout, BlogPost, dst.)
│   ├── pages/           # Halaman & route (index, blog, rss.xml, dst.)
│   └── styles/          # CSS global
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions — auto deploy ke GitHub Pages
├── astro.config.mjs     # Konfigurasi Astro
└── package.json
```

---

## 🧞 Commands

Semua perintah dijalankan dari root proyek:

| Command | Aksi |
| :------------------------- | :----------------------------------------------- |
| `npm install` | Install semua dependensi |
| `npm run dev` | Jalankan dev server di `localhost:4321` |
| `npm run build` | Build produksi ke `./dist/` |
| `npm run preview` | Preview build lokal sebelum deploy |
| `npm run check` | Build + type-check TypeScript |
| `npm run astro ...` | Jalankan perintah Astro CLI (`astro add`, dst.) |

---

## 📝 Cara Menambah AI Tool

1. Buat file baru di `src/content/tools/nama-tool.md`
2. Isi dengan frontmatter. Skema minimal wajib:

```markdown
---
name: Nama Tool
description: Deskripsi singkat dalam Bahasa Indonesia.
descriptionEn: Short description in English.
category: Language Model
url: https://link-ke-tool.com
logoUrl: ""
price: Free / $X/mo
creator: Nama Perusahaan
value: Fitur Unggulan
valueEn: Key Feature
featured: false
accentColor: '#HEX'
---

Konten lengkap penjelasan detail tool di sini...
```

3. **Rich Metadata (Opsional)**: Halaman detail mendukung slider kalkulator harga, list fitur detail, petunjuk langkah demi langkah, dan metadata spesifikasi lainnya. Tinjau file [kiro.md](file:///src/content/tools/kiro.md) atau [chatgpt.md](file:///src/content/tools/chatgpt.md) sebagai referensi skema lengkap (`features`, `pricing`, `steps`, `comparisons`, `platforms`, dll.).
4. Commit dan push ke branch `main` — GitHub Actions akan otomatis build & deploy.

---

## 🤝 Kontribusi

Pull request dan issue sangat disambut! Silakan fork repo ini, tambahkan AI tool favorit kamu, dan buat PR.

---

## 👀 Referensi & Inspirasi

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [Bear Blog](https://github.com/HermanMartinus/bearblog/) — inspirasi desain minimalis

---

## 📄 License

MIT © [Aristyanto Heri Trimawan](https://github.com/aristyantoo)
