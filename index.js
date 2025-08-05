let btn1 = document.getElementById("mybutton1");
let btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copycode")

let colors1 = btn1.textContent;
let colors2 = btn2.textContent;

const generateRandomColor = () => {
    let myNumber = "0123456789abcdef";
    let colors = '#'; 
    for(let i = 0; i < 6; i++) {
        colors += myNumber[Math.floor(Math.random() * 16)];
    }
    return colors;
};


const handleButton1 = () => {
    colors1 = generateRandomColor();
    console.log(colors1)
    btn1.innerText = colors1;
    btn1.style.backgroundColor = colors1;
    btn1.style.color = "#fff";
    document.body.style.backgroundImage = `linear-gradient(to right, ${colors1}, ${colors2})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right, ${colors1}, ${colors2});`;

}

const handleButton2 = () => {
    colors2 = generateRandomColor();
    console.log(colors2)
    btn2.innerText = colors2; 
    btn2.style.backgroundColor = colors2;
    btn1.style.color = "#fff";
    document.body.style.backgroundImage = `linear-gradient(to right, ${colors1}, ${colors2})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right, ${colors1}, ${colors2});`;
}   


btn1.addEventListener('click', handleButton1)
btn2.addEventListener('click', handleButton2)

copydiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copydiv.innerText);
    alert("Code copied to clipboard!");
});