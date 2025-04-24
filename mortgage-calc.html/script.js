 function reset() { document.getElementById('output').innerHTML = ""; }

function calculate() {
    let P = Number(document.getElementById('princ').value);
    let R = Number(document.getElementById('inter').value) / 10;
    let N = 12;
    let T = Number(document.getElementById('num').value);
    let M = Number(document.getElementById('month').value);

// Variable //
    
    let part1 = P(1+(R/N))^N+T;
    let part2 = M[(1+(R/N))^N+T - 1];
    let part3 = part2 / R/N;
    let part4 = part1 - part3;
    let B = part4;


// Final Product //
    let out = "";
    out += B;   
    document.getElementById('output').innerHTML = out;
}