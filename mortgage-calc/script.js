 function reset() { document.getElementById('output').innerHTML = ""; }

function calculate() {
    let P = Number(document.getElementById('princ').value);
    let R = Number(document.getElementById('inter').value) / 100;
    let N = 12;
    let T = Number(document.getElementById('num').value);
    let M = Number(document.getElementById('month').value);

// Variable //
    
    let R_N = R / N;
    
    let function1 = P*(1 + R_N)**(N*T);
    let function2 = M*((1 + R_N)**(N*T) - 1);
    let function3 = function2 / (R_N);

    let equasion = function3 - function1;
    
    let B = equasion;
// Final Product //
    let out = "";
    out += B;   
    document.getElementById('output').innerHTML = "$" + out;
}