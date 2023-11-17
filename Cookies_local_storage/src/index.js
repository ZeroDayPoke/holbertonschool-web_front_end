function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  document.cookie = "firstname=" + firstname;
  document.cookie = "email=" + email;
}

function showCookies() {
  const cookieDisplay = document.getElementById("cookieDisplay");
  cookieDisplay.innerHTML = "<p>Cookies: " + document.cookie + "</p>";
}
