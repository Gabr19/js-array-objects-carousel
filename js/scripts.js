const images = ['01.webp' , '02.webp' , '03.webp' , '04.webp' , '05.webp']

    for(let i = 0 ; i < images.length ; i++){
        let img = `<img id="img1" src="img/${images[i]}">`
        console.log(img)
        // richiamare il contenitore
        let cont = document.getElementById('container')
        cont.innerHTML = img;
        // inserire img nel contenitore

    }
