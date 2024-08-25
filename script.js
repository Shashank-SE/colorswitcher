const body = document.querySelector('body');
const btn = document.querySelectorAll('.buttons');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
btn.forEach((btn1) => {
    btn1.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = 'red';
                h1.style.color = 'yellow';
                h2.style.color = 'yellow';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                h1.style.color = 'white';
                h2.style.color = 'white';
                break;
            case 'grey':
                body.style.backgroundColor = 'grey';
                h1.style.color = 'indigo';
                h2.style.color = 'indigo';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                h1.style.color = 'red';
                h2.style.color = 'red';
                break;
            case 'pink':
                body.style.backgroundColor = 'pink';
                h1.style.color = 'orange';
                h2.style.color = 'orange';
                break;
            default:
                break;
        }
    });
});