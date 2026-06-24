---
name: Claude
description: Asisten AI generasi berikutnya dari Anthropic, dirancang untuk membantu, tidak berbahaya, dan jujur, dengan penalaran terdepan di industri.
descriptionEn: A next-generation AI assistant built by Anthropic, designed to be helpful, harmless, and honest, with industry-leading reasoning and context window size.
category: Language Model
url: https://claude.ai
logoUrl: ""
price: Free / $20/mo
creator: Anthropic
value: Penalaran
valueEn: Reasoning
featured: true
accentColor: '#F38C3B'

# Redesign metadata
platforms:
  - Web
  - Windows
  - macOS
  - iOS
  - Android
rating: 4.9
ratingCount: 2150
basedOn: Cloud API
aiModels: Claude 3.5 Sonnet
license: Proprietary
launchYear: "2023"

features:
  - icon: "🧠"
    name: Penalaran Tingkat Lanjut
    nameEn: Advanced Reasoning
    desc: Pemahaman kontekstual yang mendalam untuk menyelesaikan tugas logika yang kompleks dan debugging kode.
    descEn: Industry-leading contextual understanding for complex logical reasoning, coding, and debugging tasks.
  - icon: "🧩"
    name: Sistem Artifacts
    nameEn: Artifacts System
    desc: Merender kode interaktif, grafis vektor, dokumen, dan halaman web secara langsung di panel samping.
    descEn: Renders interactive code, vector graphics, documents, and web previews in a dedicated side panel.
  - icon: "🌊"
    name: Konteks 200k Token
    nameEn: 200k Token Context
    desc: Mampu memproses dokumen besar atau seluruh pustaka kode dalam satu perintah tunggal.
    descEn: Process entire project directories or long-form documents in a single contextual prompt.

pricing:
  discount: Hemat s.d. 17%
  discountEn: Save up to 17%
  monthly:
    - name: Free
      tagline: Akses standar Claude
      taglineEn: Standard access to Claude
      price: "$0"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Selalu gratis
      annualNoteEn: Always free
      ctaText: Mulai Sekarang
      ctaTextEn: Start Now
      features:
        - Akses ke model Claude 3.5 Sonnet
        - Pembuatan teks dan analisis dokumen
        - Batasan pesan standar harian
      featuresEn:
        - Access to Claude 3.5 Sonnet
        - Text generation and document analysis
        - Standard daily message limits
    - name: Pro
      tagline: Untuk pengguna aktif
      taglineEn: For power users
      price: "$20"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Ditagih bulanan, batalkan kapan saja
      annualNoteEn: Billed monthly, cancel anytime
      ctaText: Berlangganan Pro
      ctaTextEn: Subscribe to Pro
      popular: true
      features:
        - Batasan penggunaan 5x lebih banyak
        - Akses prioritas saat jam sibuk
        - Akses ke fitur Projects dan Artifacts
        - Model Claude 3 Opus
      featuresEn:
        - 5x more usage limits
        - Priority access during peak hours
        - Access to Projects and Artifacts
        - Claude 3 Opus model
    - name: Team
      tagline: Untuk kolaborasi tim
      taglineEn: For team collaboration
      price: "$25"
      period: "/kursi/bln"
      periodEn: "/seat/mo"
      annualNote: Minimal 5 kursi
      annualNoteEn: Minimum 5 seats
      ctaText: Buat Tim
      ctaTextEn: Create Team
      features:
        - Batasan penggunaan lebih besar dari Pro
        - Penagihan terpusat
        - Berbagi chat dan proyek tim
        - Kontrol administratif
      featuresEn:
        - Higher usage limits than Pro
        - Centralized billing
        - Share chats and team projects
        - Administrative controls
  annual:
    - name: Free
      tagline: Akses standar Claude
      taglineEn: Standard access to Claude
      price: "$0"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Selalu gratis
      annualNoteEn: Always free
      ctaText: Mulai Sekarang
      ctaTextEn: Start Now
      features:
        - Akses ke model Claude 3.5 Sonnet
        - Pembuatan teks dan analisis dokumen
        - Batasan pesan standar harian
      featuresEn:
        - Access to Claude 3.5 Sonnet
        - Text generation and document analysis
        - Standard daily message limits
    - name: Pro
      tagline: Untuk pengguna aktif
      taglineEn: For power users
      price: "$17"
      period: "/bln"
      periodEn: "/mo"
      annualNote: Ditagih $200 tahunan — hemat 17%
      annualNoteEn: $200 billed annually — save 17%
      ctaText: Berlangganan Pro
      ctaTextEn: Subscribe to Pro
      popular: true
      features:
        - Batasan penggunaan 5x lebih banyak
        - Akses prioritas saat jam sibuk
        - Akses ke fitur Projects dan Artifacts
        - Model Claude 3 Opus
      featuresEn:
        - 5x more usage limits
        - Priority access during peak hours
        - Access to Projects and Artifacts
        - Claude 3 Opus model
    - name: Team
      tagline: Untuk kolaborasi tim
      taglineEn: For team collaboration
      price: "$25"
      period: "/kursi/bln"
      periodEn: "/seat/mo"
      annualNote: Minimal 5 kursi
      annualNoteEn: Minimum 5 seats
      ctaText: Buat Tim
      ctaTextEn: Create Team
      features:
        - Batasan penggunaan lebih besar dari Pro
        - Penagihan terpusat
        - Berbagi chat dan proyek tim
        - Kontrol administratif
      featuresEn:
        - Higher usage limits than Pro
        - Centralized billing
        - Share chats and team projects
        - Administrative controls

steps:
  - title: Daftar di Claude.ai
    titleEn: Sign up at Claude.ai
    desc: Kunjungi Claude.ai dan daftarkan akun gratis menggunakan email atau akun Google.
    descEn: Visit Claude.ai and sign up for a free account using email or Google login.
  - title: Unggah Kode Anda
    titleEn: Upload Your Code
    desc: Seret file atau tempel potongan basis kode besar langsung ke dalam obrolan asisten.
    descEn: Drag and drop files or paste large code chunks directly into the chat.
  - title: Interaksi dengan Artifacts
    titleEn: Interact with Artifacts
    desc: Lihat hasil pengkodean interaktif dan visualisasi dokumen di panel kanan yang intuitif.
    descEn: Preview interactive coding outputs and document visualization on the right panel.

comparisons:
  - name: Claude
    specDriven: false
    baseEditor: Web Interface
    freeTier: true
    startingPrice: "$20/mo"
  - name: Kiro
    specDriven: true
    baseEditor: Code OSS
    freeTier: true
    startingPrice: "$20/mo"
  - name: ChatGPT
    specDriven: false
    baseEditor: Web Interface
    freeTier: true
    startingPrice: "$20/mo"
  - name: Gemini
    specDriven: false
    baseEditor: Web Interface
    freeTier: true
    startingPrice: "$20/mo"
---

<div class="lang-en">
Claude is Anthropic's flagship conversational assistant. Built with safety and constitutional alignment in mind, Claude excels at complex reasoning, coding, writing, and logical task execution.
</div>

<div class="lang-id">
Claude adalah asisten percakapan utama dari Anthropic. Dibangun dengan fokus pada keamanan dan keselarasan konstitusional, Claude sangat unggul dalam penalaran kompleks, pemrograman, menulis, dan eksekusi tugas logis.
</div>
