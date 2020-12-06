// archivo eventos // tengo en mente manejar los de la pagina
// voy a aplicar alguna magia a las zapatillas pero aun no se bien que por eso al momento dejo lo del fondo de imagen

imagen.addEventListener("mouseover", () => imagen.style.cursor = "zoom-in")
imagen.addEventListener("mouseout", () => imagen.style.cursor = "auto")

zapatillajean.addEventListener("mouseover", () => zapatillajean.style.cursor = "zoom-in")
zapatillajean.addEventListener("mouseout", () => zapatillajean.style.cursor = "auto")

zapatillacroco.addEventListener("mouseover", () => zapatillacroco.style.cursor = "zoom-in")
zapatillacroco.addEventListener("mouseout", () => zapatillacroco.style.cursor = "auto")


document.addEventListener('dblclick', () => aplicoColor())



