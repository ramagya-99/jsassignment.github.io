let screen = document.getElementById('screen');

let key = Array.from(document.getElementsByClassName('key'));

key.map( key => {
    key.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "Arithmetic Error";
                }
                break;
            case '←':
                if (screen.innerText){
                   screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }
    });
});