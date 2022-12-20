function pasangKaosKaki(soal) {
    input = soal.split(" ")
    input = input.sort();
    let output = 0;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] == input[i + 1]) {
            output += 1;
            i++;
        }
    }
    return output;
}

const soal1a = document.getElementById('soal1a').innerText;
const soal1b = document.getElementById('soal1b').innerText;
const soal1c = document.getElementById('soal1c').innerText;
document.getElementById('jawaban1a').innerText = pasangKaosKaki(soal1a);
document.getElementById('jawaban1b').innerText = pasangKaosKaki(soal1b);
document.getElementById('jawaban1c').innerText = pasangKaosKaki(soal1c);

const soal2a = document.getElementById('soal2a').innerText;
const soal2b = document.getElementById('soal2b').innerText;
const soal2c = document.getElementById('soal2c').innerText;

function countWord(input) {
    let output = 0;
    const pisah = input.split(" ");
    // const start = /^([a-z]|[A-Z])/
    // const end = /([?!,.]|[a-z]|[A-Z])$/
    // const center = /^([-]|[a-z]|[A-Z])/
    const regex = /^([a-z]|[A-Z])+([-]|[a-z]|[A-Z])+([?!,.]|[a-z]|[A-Z])$/

    pisah.forEach(element => {
        if (regex.test(element)) {
            output += 1;
        }
    });
    return output;
}

document.getElementById('jawaban2a').innerText = countWord(soal2a);
document.getElementById('jawaban2b').innerText = countWord(soal2b);
document.getElementById('jawaban2c').innerText = countWord(soal2c);