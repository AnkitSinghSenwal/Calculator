let string = "";
let buttons = document.querySelectorAll('.button');
let ans = "0";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if( e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            ans = string;
        }
        else if ( e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if( e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "ANS"){
            string = string.concat(ans);        
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})