document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");

    forms.forEach(function(form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const formId = form.id;
            const nameInput = form.querySelector("#name");
            const emailInput = form.querySelector("#email");
            const passwordInput = form.querySelector("#password");

            if (formId === "contactForm") { 
    
                const name = nameInput ? nameInput.value.trim() : "";
                const email = emailInput ? emailInput.value.trim() : "";

                if (name === "" || email === "") {
                    alert("Los campos Nombre y Correo son obligatorios.");
                    return;
                }
            } else if (formId === "loginForm") {
                const name = nameInput ? nameInput.value.trim() : "";
                const password = passwordInput ? passwordInput.value.trim() : "";

                if (name === "" || password === "") {
                    alert("Los campos Usuario y Contraseña son obligatorios.");
                    return;
                }
            }

            alert("Formulario enviado correctamente");
            form.reset();
        });
    });
});
