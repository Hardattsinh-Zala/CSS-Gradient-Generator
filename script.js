let oldEvent = null;
let choice = document.querySelector(".choice");
let preview = document.querySelector(".preview");
let old = document.querySelector(".old");

const startFun = () => {
    let data = localStorage.getItem('lastItem')
    if (data != null) {
        preview.style.backgroundImage = data;
        console.log(data)
    }
}

window.onload = () => {
    startFun();
    createBtn();
    createPalate();
}

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

const pickr2 = Pickr.create({
    el: '.color-picker2',
    theme: 'classic',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true,
        }
    }
});

let data1, data2, result;
pickr.on('change', (color) => {
    data1 = color.toRGBA().toString();
    if (selector != "circle") {
        preview.style.background = `linear-gradient(to ${selector}, ${data1}, rgba(0, 0, 0, 0))`;
    } else {
        preview.style.background = `radial-gradient(${selector}, ${data1}, rgba(0, 0, 0, 0))`;
    }
})

pickr2.on('change', (color) => {
    data2 = color.toRGBA().toString();
    if (selector != "circle") {
        result = `linear-gradient(to ${selector}, ${data1}, ${color.toRGBA().toString()}`;
        preview.style.background = result;
    } else {
        result = `radial-gradient(${selector}, ${data1}, ${data2}`;
        preview.style.background = result;
    }
    localStorage.setItem('lastItem', result);
    old.innerText = result;
})

const upload = document.getElementById('upload');
const colorThief = new ColorThief();

upload.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const dominant = colorThief.getColor(img);
        const palette = colorThief.getPalette(img, 3);
        const gradient = `linear-gradient(to right, rgb(${palette[0]}), rgb(${palette[1]}), rgb(${palette[2]}))`;
        preview.style.background = gradient;
    };
});


let selector = "top right";
let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let i3 = document.querySelector(".i3");
let i4 = document.querySelector(".i4");
let i5 = document.querySelector(".i5");
let i6 = document.querySelector(".i6");
let i7 = document.querySelector(".i7");
let i8 = document.querySelector(".i8");
let i9 = document.querySelector(".i9");

i1.addEventListener("click", () => {
    selector = "right top";
    preview.style.background = `linear-gradient(to ${selector}, ${data1}, ${data2})`;
});

i2.addEventListener("click", () => {
    selector = "right";
    preview.style.background = `linear-gradient(to ${selector}, ${data1}, ${data2})`;
});

i3.addEventListener("click", () => {
    selector = "right bottom";
    preview.style.background = `linear-gradient(to ${selector}, ${data1}, ${data2})`;
});

i4.addEventListener("click", () => {
    selector = "bottom";
    preview.style.background = `linear-gradient(to ${selector}, ${data1}, ${data2})`;
});

i5.addEventListener("click", () => {
    selector = "left bottom";
    preview.style.background = `linear-gradient(to ${selector}, ${data1}, ${data2})`;
});

i6.addEventListener("click", () => {
    selector = "left";
    preview.style.background = `linear-gradient(to left, ${data1}, ${data2})`;
});

i7.addEventListener("click", () => {
    selector = "left top";
    preview.style.background = `linear-gradient(to ${selector}, ${data1}, ${data2})`;
});

i8.addEventListener("click", () => {
    selector = "top";
    preview.style.background = `linear-gradient(to top, ${data1}, ${data2})`;
});

i9.addEventListener("click", () => {
    selector = "circle";
    preview.style.background = `radial-gradient(circle, ${data1}, ${data2})`;
});

let random1 = "#000", random2 = "FFF";
const generateHash1 = () => {
    let s = "#"
    let hex = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        s = s.concat(hex[num]);
    }

    random1 = s;
    console.log(random1);
    changeColor()
}
const generateHash2 = () => {
    let s = "#"
    let hex = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        s = s.concat(hex[num]);
    }
    console.log(s);
    random2 = s;
    changeColor()
}

const changeColor = () => {
    preview.style.background = `linear-gradient(${select}, ${random1}, ${random2})`;
    localStorage.setItem('lastItem', preview.style.background)
}

choice.addEventListener('click', e => {
    preview.style.background = `linear-gradient(${select}, ${random1}, ${random2})`;
    if (select == 'circle') {
        preview.style.background = `radial-gradient(${select}, ${random1}, ${random2})`;
    }
    localStorage.setItem('orientation', select);
})

function copy() {
    const newGradient = document.getElementById('gradient').textContent;

    navigator.clipboard.writeText(newGradient).then(() => {
        document.getElementById('copy').innerText = "Copied";
    }).catch((err) => {
        console.error('Copy failed:' + err)
    })

    document.getElementById("copy").innerText = "Copied";
    setTimeout(() => {
        document.getElementById("copy").innerText = "Copy";
    }, 5000);
}

const gencode = () => {
    let s = "#"
    let hex = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        s = s.concat(hex[num]);
    }
    return s;
}

let ButtonsPalate = document.querySelector(".buttonPratik");
const createBtn = () => {
    for (let i = 0; i < 24; i++) {
        const btnCreate = document.createElement('button');
        btnCreate.style.width = `180px`
        btnCreate.style.height = `70px`
        btnCreate.style.background = `linear-gradient(to right, ${gencode()}, ${gencode()})`
        btnCreate.style.borderRadius = '50px'
        btnCreate.textContent = 'button'
        btnCreate.style.fontWeight = "bold";
        btnCreate.style.color = "white";
        btnCreate.style.letterSpacing = "3px";
        ButtonsPalate.appendChild(btnCreate)
    }
    console.log(ButtonsPalate);
}

ButtonsPalate.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;

        const buttonHTML = `<button style="${button.getAttribute('style')}">${button.textContent}</button>`;

        navigator.clipboard.writeText(buttonHTML).then(() => {
            alert("Button HTML copied to clipboard!");
        }).catch(err => {
            console.error('Failed to copy button HTML:', err);
        });
    }
});

let ul = document.querySelector('ul')
ul.addEventListener('hover', () => {
    let block = document.querySelector('feat');
    block.style.hover = 'block'
})

const showSection = (sectionClass) => {
    document.querySelector('.main-container').classList.add('hidden');
    document.querySelector('.random-section').classList.add('hidden');
    document.querySelector('.components').classList.add('hidden');

    document.querySelector(`.${sectionClass}`).classList.remove('hidden');
    if (sectionClass === 'random-section' || sectionClass === 'main-container') {
        document.querySelector('.main-container').classList.remove('hidden');
    }
};

const Gradient = () => showSection('gradient-section');
const Random = () => showSection('random-section');
const Components = () => showSection('components');

let favourite = document.querySelector(".favourite");
let favContainer = document.querySelector(".favContainer");
let count = 0
favourite.addEventListener("click", () => {
    const div = document.createElement("div");
    const cancel = document.createElement("i");
    const section = document.createElement("section");

    div.className = "favDiv";
    div.onclick = this.copy;
    cancel.className = "fa-solid fa-xmark";
    section.className = "section";

    div.style.height = "3rem";
    div.style.width = "3rem";
    div.style.borderRadius = "2rem";

    favContainer.appendChild(section);
    section.appendChild(div);
    section.appendChild(cancel);

    cancel.addEventListener("click", () => {
        section.remove();
    })

    div.style.background = preview.style.background;
    localStorage.setItem(`${count}`, preview.style.background);
    count++;

    document.querySelector(".favourite").innerText = "Added!";
    setTimeout(() => {
        document.querySelector(".favourite").innerText = "Favourite";
    }, 2000);
})

let Palate = document.querySelector('.palate')


const createPalate = () => {
    for (let i = 0; i < 20; i++) {
        const btnCreate = document.createElement('button');
        let d1 = gencode()
        let d2 = gencode()
        btnCreate.style.width = `250px`
        btnCreate.style.height = `300px`
        btnCreate.style.background = `linear-gradient(to right, ${d1}, ${d2})`
        btnCreate.style.borderRadius = '30px'
        btnCreate.textContent = `${d1} to ${d2}`
        btnCreate.style.fontWeight = "bold";
        btnCreate.style.color = "white";
        btnCreate.style.letterSpacing = "3px";
        ButtonsPalate.appendChild(btnCreate)
    }
    console.log(ButtonsPalate);
}

Palate.addEventListener('click', (e) => {
    const div = e.target;

    const buttonHTML = `<div style="${div.getAttribute('style')}">${div.textContent}</div>`;

    navigator.clipboard.writeText(buttonHTML).then(() => {
        alert("Button HTML copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy button HTML:', err);
    });
});