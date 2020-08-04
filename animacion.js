const form = document.querySelector ("#info")

const nombre = document.querySelector ("#nombre")
const curso = document.querySelector ("#curso")
const com = document.querySelector ("#com")
const nombrehelp = document.querySelector ("#nombrehelp")
const cursohelp = document.querySelector ("#cursohelp")
const comhelp = document.querySelector ("#comhelp")


form.addEventListener ( "submit" , (event) => {
	event.preventDefault ()
	if (nombre.value === "" || curso.value === "" || com.value === "") {
		if (nombre.value === "") {
			nombrehelp.innerText = "Por favor completá con tu nombre"
		}
		else if (curso.value === "") {
			cursohelp.innerText = "Por favor completá con tu curso"
		}
		else if (com.value === "") {
			comhelp.innerText = "Dejanos tu comentario"
		}
	} else {
		form.submit ();
	}

} )
