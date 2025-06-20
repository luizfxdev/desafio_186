// Função para calcular a sequência de Fibonacci e retornar a soma dos n primeiros termos
function calculateFibonacciSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let fibSequence = [1, 1]; // A sequência começa com 1, 1
  let sum = 2; // Soma inicial dos dois primeiros termos

  // Se n for 1 ou 2, retornamos valores diretos
  if (n === 1) return 1;
  if (n === 2) return 2;

  // Calcula os termos restantes da sequência
  for (let i = 2; i < n; i++) {
    const nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextTerm);
    sum += nextTerm;
  }

  return { sum, sequence: fibSequence };
}

// Função para formatar os passos do cálculo para exibição
function formatCalculationSteps(sequence, sum) {
  let steps = 'Sequência gerada: ';
  steps += sequence.join(', ');
  steps += `<br><br>Soma: `;
  steps += sequence.join(' + ');
  steps += ` = <strong>${sum}</strong>`;
  return steps;
}

// Função principal que é executada quando o DOM está carregado
document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculateBtn');
  const resetBtn = document.getElementById('resetBtn');
  const inputField = document.getElementById('fibonacciInput');
  const resultOutput = document.getElementById('resultOutput');
  const calculationSteps = document.getElementById('calculationSteps');

  // Event listener para o botão de cálculo
  calculateBtn.addEventListener('click', function () {
    const n = parseInt(inputField.value);

    // Validação da entrada
    if (isNaN(n) || n < 1 || n > 50) {
      resultOutput.textContent = 'Por favor, insira um número entre 1 e 50';
      calculationSteps.textContent = '';
      return;
    }

    // Calcula a soma de Fibonacci
    const { sum, sequence } = calculateFibonacciSum(n);

    // Exibe os resultados
    resultOutput.textContent = `${sum} metros`;
    calculationSteps.innerHTML = formatCalculationSteps(sequence, sum);
  });

  // Event listener para o botão de reset
  resetBtn.addEventListener('click', function () {
    inputField.value = '';
    resultOutput.textContent = '';
    calculationSteps.textContent = '';
  });

  // Validação em tempo real do input
  inputField.addEventListener('input', function () {
    const value = parseInt(this.value);
    if (this.value && (value < 1 || value > 50)) {
      this.setCustomValidity('Por favor, insira um número entre 1 e 50');
    } else {
      this.setCustomValidity('');
    }
  });
});
