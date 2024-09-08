document.getElementById('form').addEventListener('submit', function(e) {

  e.preventDefault()

  const email = document.getElementById('email').value.trim()

  if(email === "") {
    console.log("Форма не заполнена")
  }
}
)

