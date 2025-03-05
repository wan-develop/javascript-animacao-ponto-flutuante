const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Ajustando o canvas para a tela cheia
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#000';

const pontos = [];
const raioMaximo = 3;
const distanciaMaxima = 100; // Distância para conectar os pontos

// Posições do mouse
let mouseX = null;
let mouseY = null;

// Configuração do canvas para os pontos flutuantes
function criarPontos() {
  for (let i = 0; i < 100; i++) {
    pontos.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      velocidadeX: (Math.random() - 0.5) * 1,
      velocidadeY: (Math.random() - 0.5) * 1,
      raio: Math.random() * raioMaximo + 1,
    });
  }
}

// Atualizar a posição dos pontos
function atualizarPontos() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pontos.forEach((ponto) => {
    ponto.x += ponto.velocidadeX;
    ponto.y += ponto.velocidadeY;

    // Verifica as bordas do canvas
    if (ponto.x + ponto.raio > canvas.width || ponto.x - ponto.raio < 0) {
      ponto.velocidadeX = -ponto.velocidadeX;
    }
    if (ponto.y + ponto.raio > canvas.height || ponto.y - ponto.raio < 0) {
      ponto.velocidadeY = -ponto.velocidadeY;
    }

    ctx.beginPath();
    ctx.arc(ponto.x, ponto.y, ponto.raio, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
  });
}

// Conectar pontos entre si
function conectarPontos() {
  for (let i = 0; i < pontos.length; i++) {
    for (let j = i + 1; j < pontos.length; j++) {
      const distancia = Math.hypot(
        pontos[i].x - pontos[j].x,
        pontos[i].y - pontos[j].y
      );
      if (distancia < distanciaMaxima) {
        ctx.beginPath();
        ctx.moveTo(pontos[i].x, pontos[i].y);
        ctx.lineTo(pontos[j].x, pontos[j].y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${
          1 - distancia / distanciaMaxima
        })`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

// Conectar os pontos com o mouse
function conectarComOMouse() {
  if (mouseX !== null && mouseY !== null) {
    pontos.forEach((ponto) => {
      const distancia = Math.hypot(mouseX - ponto.x, mouseY - ponto.y);

      if (distancia < distanciaMaxima) {
        ctx.beginPath();
        ctx.moveTo(ponto.x, ponto.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${
          1 - distancia / distanciaMaxima
        })`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    });
  }
}

// Função principal de desenho
function desenhar() {
  atualizarPontos();
  conectarPontos();
  conectarComOMouse();
  requestAnimationFrame(desenhar);
}

// Inicia os pontos e a animação
criarPontos();
desenhar();

// Capturar o movimento do mouse
canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Redimensionar o canvas ao mudar o tamanho da janela
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  pontos.length = 0; // Limpar os pontos existentes e recriar
  criarPontos();
});
