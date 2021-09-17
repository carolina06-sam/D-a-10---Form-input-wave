const labels = document.querySelectorAll(".form-control label");

//divide el label en  pequeñas cadenas (letras)
labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    console.log(label);
});

/* idx = index 
ms = milisecond*/

/* La transition-delaypropiedad especifica cuándo comenzará el efecto de transición. */

/* si el numero es mas grande es las lento */
