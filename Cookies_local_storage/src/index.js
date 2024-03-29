function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);
  const expires = "expires=" + expirationDate.toUTCString();
  const path = "path=/";
  document.cookie = "firstname=" + firstname + "; " + expires + "; " + path;
  document.cookie = "email=" + email + "; " + expires + "; " + path;
}

function showCookies() {
  const firstname = getCookie("firstname");
  const email = getCookie("email");
  const cookieDisplay = document.getElementById("cookieDisplay");
  cookieDisplay.innerHTML =
    "<p>Email: " + email + " - Firstname: " + firstname + "</p>";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}

function showForm() {
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function hideForm() {
  document.getElementById("loginForm").style.display = "none";
}

function deleteCookiesAndShowForm() {
  Cookies.remove("firstname", { path: "" });
  Cookies.remove("email", { path: "" });
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstname = Cookies.get("firstname");
  if (firstname) {
    document.getElementById("username").textContent = firstname;
    document.getElementById("welcomeMessage").style.display = "block";
    hideForm();
  } else {
    showForm();
  }
}

function setCookiesAndShowWelcomeMessage() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  Cookies.set("firstname", firstname, { expires: 10, path: "" });
  Cookies.set("email", email, { expires: 10, path: "" });

  showWelcomeMessageOrForm();
}
