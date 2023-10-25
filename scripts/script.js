const defaultFile = 'img/user.png'
let img = document.getElementById('img');
let file = document.getElementById('file');
let changeColorInput = document.getElementById('changeImg');
let input = document.getElementById('input-name');
let buttonSend = document.getElementById('button-send');



// console.log(check)

buttonSend.addEventListener('click', ()=> {
    let check = document.getElementById('check').checked;
    // ============== Verificamos si el checkbox es true o false ===================
    if (check) {
        console.log(check)
        let divImg = document.getElementById('div-img');
        let input = document.createElement('input')
        input.type = 'file'

        divImg.appendChild(input)
        divImg.appendChild(document.createElement('br'))
        // =========Logica para agregar la imagen seleccionada por el user=======
        let divAddImg = document.getElementById('div-add-img');

        input.addEventListener('change', e => {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                let img = document.createElement('img')
                img.style.borderRadius = '100px'
                img.src = reader.result;


                img.width = '150'
                img.height = '150'
                divAddImg.appendChild(img)
            });
            reader.readAsDataURL(e.target.files[0])
        })



    } else {
        console.log(false)
    }
})