
document.querySelectorAll('input[type=color]').forEach(function(picker) {
    let targetlabel = document.querySelector('label[for="' + picker.id + '"]'),
        colorArea = document.createElement("span"),
        range = document.getElementById("fontrange"),
        content = document.getElementById("content");

    function updatefontsize() {
        const fontsize = range.value + "px";
        content.style.fontSize = fontsize;
    }

    colorArea.innerHTML = picker.value;
    targetlabel.appendChild(colorArea);
    range.addEventListener("input", updatefontsize);

    picker.addEventListener('change', function() {
        colorArea.innerHTML = picker.value;
        targetlabel.appendChild(colorArea);
        
        content.style.color = picker.value;
    });
});
