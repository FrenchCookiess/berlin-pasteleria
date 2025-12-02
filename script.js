// --- Código para menús y compartir ---
const menuBtn = document.getElementById("menuBtn");
const menuContent = document.getElementById("menuContent");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuContent.classList.toggle("hidden");
});

const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  shareMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !menuContent.contains(e.target)) {
    menuContent.classList.add("hidden");
  }
  if (!shareBtn.contains(e.target) && !shareMenu.contains(e.target)) {
    shareMenu.classList.add("hidden");
  }
});

// Compartir enlaces dinámicamente
const pageUrl = encodeURIComponent(window.location.href);
const whatsapp = document.getElementById('shareWhatsapp');
const facebook = document.getElementById('shareFacebook');
const instagram = document.getElementById('shareInstagram');

if (whatsapp) whatsapp.href = `https://wa.me/?text=${pageUrl}`;
if (facebook) facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
if (instagram) instagram.href = `https://www.instagram.com/?url=${pageUrl}`;
