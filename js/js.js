
let number = document.querySelector('.number')
let numberNum = number.dataset.num

let progressBar = document.querySelector('.progressBar')

let speed = 20
let count = 0

function countUp() {

    function num() {

        count++
        
        number.innerHTML = `${count}.${Math.floor(Math.random() * 99)}`
        
        if(count > numberNum) {

            number.innerHTML = parseInt(numberNum)

            clearInterval(countData)

            document.getElementById('btn').disabled = false;
            document.getElementById('btn').value = 'Clear';
        }
    }
    
    let countData = setInterval(num , speed)
}

function start() {

        let btn = 1

        document.getElementById('btn').addEventListener('click', function() {

        if(btn == 0) {
            number.innerHTML = 0

            progressBar.classList.remove('active') 
            
            document.getElementById('btn').value = 'Again';
            
            btn = 1

            count = 0
            
        }else{

            document.getElementById('btn').disabled = true;
            
            document.documentElement.style.setProperty('--transition', (speed / 10) + 's');
            
            progressBar.classList.add('active')

            btn = 0

            countUp()

        }
}) 
}

start()