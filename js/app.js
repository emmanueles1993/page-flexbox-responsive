const menu =
  document.querySelector(".menu"); /*esto es un selector asi como los de css*/
const openMenuBtn =
  document.querySelector(".open-menu"); /*seleciona el menu, el hamburguesa */
const closeMenuBtn =
  document.querySelector(
    ".close-menu"
  ); /*seleciona el menu de cerrar el de la x */

function toggleMenu() {
  menu.classList.toggle("menu_opened");/*menu_opened esta en el css esa clase*/
}
/*el evento click el usuario hace click sobre el elemento, luego llamamos al menu y con el metodo classlist.toogle: si la clase no existe la añade, si no la elimina*/
openMenuBtn.addEventListener(
  "click",
  toggleMenu
); /*a este le agregamos el evento y la funcion creada que añade o elimina */
closeMenuBtn.addEventListener("click", toggleMenu);
