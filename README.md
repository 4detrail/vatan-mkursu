# Özel Vatan Sürücü Kursu – Web Sitesi
Sadece HTML, CSS ve JavaScript. Kütüphane/derleme yok; `index.html`'i açmanız yeterli.
Sayfalar: index.html, hakkimizda.html, egitimler.html, sss.html, iletisim.html
- Metinleri doğrudan ilgili .html dosyasında değiştirin (hakkimizda.html'de "DÜZENLE" notu var).
- Menü ve alt kısım her sayfada tekrar eder; yeni bağlantı eklerken tüm sayfalardaki <nav> bölümünü güncelleyin.
- Renkler: css/style.css başındaki --red değişkeni. Açık/koyu tema sağ üstteki butonla.
- Açılış animasyonu yalnızca ana sayfada, oturum başına bir kez oynar (js/main.js).
- Güvenlik: CSP, harici script yok, form doğrulama + honeypot; `vercel.json` (Vercel). HTTPS ile yayınlayın.

- SEO: her sayfada title/description/anahtar kelime + OG, ana sayfa ve iletişimde JSON-LD (yerel işletme). Alan adı belli olunca canonical ve sitemap.xml eklenmeli.
- WhatsApp: iletişim formu js/main.js içinde wa.me/905437884358 numarasına gider.
- Harita linkleri: iletisim.html ve footer (Google/Yandex/Apple). Google işletme profilinizin paylaş linki varsa onunla değiştirin.

- Temiz adresler: her sayfa kendi klasöründe (hakkimizda/index.html gibi), adres /hakkimizda/ görünür. PHP veya rewrite gerekmez. Yeni sayfa için klasör açıp içine index.html koyun.
