let buttonAcept = document.getElementById('button-acept');
// ===================Hacemos que el input sea de tipo email======================================
// let inputEmail=document.getElementById('input-email');
// inputEmail.type='email';

// ====================Funcion que se encarga de verificar si el valor del checkbox es true o false===============================
function validar() {
    let check = document.getElementById('check').checked;
    if (check) {
        buttonAcept.disabled = false;

    } else {
        buttonAcept.disabled = true;
    }

}

buttonAcept.addEventListener('click', () => {
    let check = document.getElementById('check').checked;
    // ============== Verificamos si el checkbox es true o false ===================

    if (check) {
        buttonAcept.disabled = false;
    }
    if (check) {
        console.log(check)
        let divImg = document.getElementById('div-img');
        let input = document.createElement('input')
        input.type = 'file'
        input.style.marginLeft = '20px'
        divImg.appendChild(input)
        divImg.appendChild(document.createElement('br'))
        divImg.appendChild(document.createElement('br'))
        // =========Logica para agregar la imagen seleccionada por el user=======

        input.addEventListener('change', e => {
            const reader = new FileReader(); //Leer ficheros
            reader.addEventListener('load', () => {
                let divAddImg = document.getElementById('div-add-img');
                let divBtnDelete = document.getElementById('div-add-btnDelete')
                let img = document.createElement('img')
                img.style.borderRadius = '100px'
                img.src = reader.result;
                img.width = '180'
                img.height = '180'
                divAddImg.appendChild(img)
                console.log(img)
                //=====================Creamos el boton por si queremos eliminar la imagen ========================================

                let inputDelete = document.createElement('input')
                inputDelete.type = 'button'
                inputDelete.value = 'Eliminar'
                inputDelete.style.marginBottom = '35px'
                divBtnDelete.appendChild(document.createElement('br'))
                divBtnDelete.appendChild(inputDelete)

                // =================== Desabilitamos los botones ================================
                buttonAcept.disabled = true;
                input.disabled = true;

                //=================Funcion de eliminar la imagen==========================

                inputDelete.addEventListener('click', () => {
                    divAddImg.parentNode.removeChild(divAddImg)
                    divBtnDelete.parentNode.removeChild(divBtnDelete)
                    input.parentNode.removeChild(input)

                    if (check) {
                        buttonAcept.disabled = false;
                        check.disabled=true;
                    }
                })
            });
            reader.readAsDataURL(e.target.files[0])
        })



    } else {
        console.log(false)
    }
})

function validacionForm() {
    let divAddImg = document.getElementById('div-add-img');
    let divImg = document.getElementById('div-img');
    let divBtnDelete=document.getElementById('div-add-btnDelete')
    divAddImg.parentNode.removeChild(divAddImg)
    divImg.parentNode.removeChild(divImg)
    divBtnDelete.parentNode.removeChild(divBtnDelete)
    buttonAcept.disabled = false;
}