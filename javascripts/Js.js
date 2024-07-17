function showPage(pageNumber) {
  const page1Icons = document.querySelectorAll(".page-1");
  const page2Icons = document.querySelectorAll(".page-2");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  if (pageNumber === 1) {
    page1Icons.forEach((icon) => (icon.style.display = "inline-block"));
    page2Icons.forEach((icon) => (icon.style.display = "none"));
    prevButton.style.display = "none";
    nextButton.style.display = "inline-block";
  } else if (pageNumber === 2) {
    page1Icons.forEach((icon) => (icon.style.display = "none"));
    page2Icons.forEach((icon) => (icon.style.display = "inline-block"));
    prevButton.style.display = "inline-block";
    nextButton.style.display = "none";
  }
}

// Initial setup to show the first page
showPage(1);

document.getElementById("menuIcon").onclick = function () {
  document.getElementById("sideMenu").style.width = "22vh";
  menuContent.style.display = "none";
};

document.getElementById("closeBtn").onclick = function () {
  document.getElementById("sideMenu").style.width = "0";
};

document.querySelectorAll(".menu-item").forEach(function (item) {
  item.onclick = function () {
    var content = this.getAttribute("data-content");
    var menuContent = document.getElementById("menuContent");
    var menuItems = document.querySelectorAll(".menu-item");

    // Hide all menu items
    menuItems.forEach(function (menuItem) {
      menuItem.style.display = "none";
    });

    // Display the back button
    document.getElementById("backBtn").style.display = "block";

    // Update and display the content
    menuContent.innerText = content;
    menuContent.style.display = "block";
  };
});

document.getElementById("backBtn").onclick = function () {
  var menuContent = document.getElementById("menuContent");
  var menuItems = document.querySelectorAll(".menu-item");

  // Show all menu items
  menuItems.forEach(function (menuItem) {
    menuItem.style.display = "block";
  });

  // Hide the back button
  document.getElementById("backBtn").style.display = "none";

  // Hide the content
  menuContent.style.display = "none";
};

document.getElementById("iconn").addEventListener("click", function (event) {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  popup.style.top = event.clientY + 10 + "px";
  popup.style.left = event.clientX + "px";
  event.stopPropagation(); // جلوگیری از رویداد کلیک پدر و مادر
});

document.addEventListener("click", function (event) {
  var popup = document.getElementById("popup");
  if (!popup.contains(event.target)) {
    popup.style.display = "none";
  }
});

document.getElementById("popup").addEventListener("click", function (event) {
  event.stopPropagation(); // جلوگیری از رویداد کلیک پدر و مادر
});

document.getElementById("iconnn").addEventListener("click", function (event) {
  var popup2 = document.getElementById("popup2");
  popup2.style.display = "block";
  popup2.style.top = event.clientY + 10 + "px";
  popup2.style.left = event.clientX + "px";
  event.stopPropagation(); // جلوگیری از رویداد کلیک پدر و مادر
});

document.addEventListener("click", function (event) {
  var popup2 = document.getElementById("popup2");
  if (!popup2.contains(event.target)) {
    popup2.style.display = "none";
  }
});

document.getElementById("popup2").addEventListener("click", function (event) {
  event.stopPropagation(); // جلوگیری از رویداد کلیک پدر و مادر
});
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "منظور شما رو نفهمیدم.",
  "متوجه نشدم.",
  "امیدوار بودم بتونم کمکت کنم.",
  "متاسفم.",
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "";
const PERSON_IMG = "''";
const BOT_NAME = "کارشناس";
const PERSON_NAME = "علی";

msgerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById("icon4").onclick = function () {
  var popup = document.getElementById("popup4");
  popup.style.display = "flex"; // نمایش پاپ آپ

  // ایجاد نقشه تنها در صورت نبود قبلی
  if (!document.getElementById("map")._leaflet_id) {
    var map = L.map("map").setView([35.6892, 51.389], 12); // موقعیت مکانی و زوم اولیه

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // اضافه کردن مارکرها برای مراکز مختلف با پنجره اطلاعات
    var locations = [
      { lat: 35.6892, lng: 51.389, info: "تهران - مرکز شماره 1" },
      { lat: 34.6399, lng: 50.8759, info: "قم - مرکز شماره 2" },
      { lat: 36.2981, lng: 59.6059, info: "مشهد - مرکز شماره 3" },
    ];

    locations.forEach(function (location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      marker.bindPopup(location.info);
    });
  }
};

document.querySelector(".close-button4").onclick = function () {
  document.getElementById("popup4").style.display = "none"; // پنهان کردن پاپ آپ
};

// تابع برای نمایش پاپ آپ
function openChat() {
  document.getElementById("chatPopup").style.display = "block";
}

// تابع برای بستن پاپ آپ
function closeChat() {
  document.getElementById("chatPopup").style.display = "none";
}

// زمانی که روی دکمه 'نمایش چت' کلیک می‌شود، پاپ آپ نمایش داده می‌شود
document.getElementById("openChat").addEventListener("click", openChat);

window.onload = function () {
  var today = new Date();
  var options = { year: "numeric", month: "long", day: "numeric" };
  var currentDate = today.toLocaleDateString("fa-IR", options);

  document.getElementById("current-date").textContent = currentDate;
};
  document.getElementById('searchInput').addEventListener('input', function() {
      let filter = this.value.toLowerCase();
      let table = document.getElementById('dataTable');
      let tr = table.getElementsByTagName('tr');

      for (let i = 1; i < tr.length; i++) { 
          let tdArray = tr[i].getElementsByTagName('td');
          let showRow = false;

          for (let j = 0; j < tdArray.length; j++) {
              if (tdArray[j].textContent.toLowerCase().indexOf(filter) > -1) {
                  showRow = true;
                  break;
              }
          }

          tr[i].style.display = showRow ? '' : 'none';
      }
  });
