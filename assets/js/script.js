const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

const validar = () => {
    let firstName = document.getElementById("nombre").value;
    let lastName = document.getElementById("apellidos").value;
    let email = document.getElementById("correo").value;
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("pass").value;
    let foneNumber = document.getElementById("telefono").value;
    let onlyLetters = /^[a-zA-Z]+$/;
    let onlyNumbers = /^\d+$/;
    let onlyEmail = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

    if (firstName === ""){
        alert("Debes completar todos los campos.");
        return false;
    } else if (firstName.length>30){
        alert("Tu nombre es muy largo, no debe ser de más de 30 caractertes.");
        return false;
    } else if (!onlyLetters.test(firstName)){
        alert("Tu nombre no puede incluir números.");
        return false;
    } else if (lastName === ""){
        alert("Debes completar todos los campos.");
        return false;
    } else if (lastName.length>80){
        alert("Tus apellidos son muy largos, no deben superar los 80 caracteres.");
        return false;
    } else if (!onlyLetters.test(lastName)){
        alert("Tus apellidos no pueden incluir números.");
        return false;
    } else if (email === ""){
        alert("Debes completar todos los campos.");
        return false;
    } else if (email.length>100){
        alert("Tu correo es muy largo, no debe superar los 100 caracteres.");
        return false;
    } else if (!onlyEmail.test(email)) {
        alert("La dirección de correo electrónico no es válida.");
        return false;
    } else if (user === ""){
        alert("Debes completar todos los campos.");
        return false;
    } else if (user.length>20){
        alert("Tu usuario es muy largo, no debe superar los 20 caracteres.");
        return false;
    } else if (password === ""){
        alert("Debes completar todos los campos.");
        return false;
    } else if (foneNumber === ""){
        alert("Debes completar todos los campos.");
        return false;
    } else if (foneNumber.length>15){
        alert("El número de teléfono que ingresaste es muy largo, no debe superar los 15 caracteres.");
        return false;
    } else if (!onlyNumbers.test(foneNumber)) {
        alert("Tu teléfono sólo debe contener números.");
        return false;
    } else {
        alert("Hola "+firstName+", tu registro quedó listo :)");
        location.reload();
    }
};
