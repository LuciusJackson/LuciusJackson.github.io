 function reset() { document.getElementById('output').innerHTML = ""; }

function calculate() {
    let P = Number(document.getElementById('princ').value);
    let R = Number(document.getElementById('inter').value);
    let N = 12;
    let T = Number(document.getElementById('num').value);
    let M = Number(document.getElementById('month').value);

// Variable //
    
    let NT = N * T

// Part 1 //

    let step1 = R / N 
    let step2 = step1 + 1
    let step3 = step2 * NT
    let step4 = step3 * P

// Part 2 //

    let step5 = 



// Final Product //
}