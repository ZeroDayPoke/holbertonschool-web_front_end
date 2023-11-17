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
  const cookieDisplay = document.getElementById("cookieDisplay");
  cookieDisplay.innerHTML = "<p>Cookies: " + document.cookie + "</p>";
}
