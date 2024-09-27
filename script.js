const respostasCorretas = {
    q1: 'B',
    q2: 'C',
    q3: 'B',
    q4: 'D',
    q5: 'A',
    q6: 'C',
    q7: 'C',
    q8: 'B'
};

function iniciarProva() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('prova').style.display = 'block';
}

function encerrarProva() {
    const formulario = document.getElementById('prova');
    let pontuacao = 0;
    let gabarito = '';
    
    for (let i = 1; i <= 8; i++) {
        const respostaSelecionada = formulario[`q${i}`].value;
        if (respostaSelecionada === respostasCorretas[`q${i}`]) {
            pontuacao++;
            gabarito += `<li>Questão ${i}: Correta</li>`;
        } else {
            gabarito += `<li>Questão ${i}: Errada (Resposta correta: ${respostasCorretas[`q${i}`]})</li>`;
        }
    }

    document.getElementById('pontuacao').innerText = `Você acertou ${pontuacao} de 8 questões.`;
    document.getElementById('gabarito').innerHTML = gabarito;

    document.getElementById('prova').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}
