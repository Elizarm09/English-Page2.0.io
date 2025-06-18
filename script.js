function startSession() {
    let userName = document.getElementById("userName").value;
    let userCourse = document.getElementById("userCourse").value;
    let userLevel = document.getElementById("userLevel").value;

    if (userName && userCourse && userLevel) {
        // Guardar datos en localStorage
        localStorage.setItem("userName", userName);
        localStorage.setItem("userCourse", userCourse);
        localStorage.setItem("userLevel", userLevel);

        // Redirigir según el nivel seleccionado
        if (userLevel === "b1") {
            window.location.href = "Levels/b1.html";
        } else if (userLevel === "b1plus") {
            window.location.href = "Levels/b1plus.html";
        } else if (userLevel === "b2") {
            window.location.href = "Levels/b2.html";
        }
    } else {
        alert("Please complete all the information.");
    }
}
