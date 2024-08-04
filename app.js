
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const colorValue = document.getElementById("color-selector").value.substring(1);
    const schemeValue = document.getElementById("scheme").value;

    const baseUrl = 'https://www.thecolorapi.com/scheme';

    const url = `${baseUrl}?hex=${colorValue}&format=json&mode=${schemeValue}&count=4`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const text1 = document.getElementById("text-1");
        const text2 = document.getElementById("text-2");
        const text3 = document.getElementById("text-3");
        const text4 = document.getElementById("text-4");
        const text5 = document.getElementById("text-5");

        const block1 = document.getElementById("block-1");
        const block2 = document.getElementById("block-2");
        const block3 = document.getElementById("block-3");
        const block4 = document.getElementById("block-4");
        const block5 = document.getElementById("block-5");


        let colors = data.colors;
        let hexArr = [`#${colorValue}`];
        for (color of colors) {
            hexArr.push(color.hex.value)
        };

        document.getElementById("main").style.borderColor = `${hexArr[0]}`;

        text1.textContent = hexArr[0];
        text2.textContent = hexArr[1];
        text3.textContent = hexArr[2];
        text4.textContent = hexArr[3];
        text5.textContent = hexArr[4];

        block1.style.backgroundColor = hexArr[0];
        block2.style.backgroundColor = hexArr[1];
        block3.style.backgroundColor = hexArr[2];
        block4.style.backgroundColor = hexArr[3];
        block5.style.backgroundColor = hexArr[4];
    })
    .catch(error => console.error('Error:', error));
})






