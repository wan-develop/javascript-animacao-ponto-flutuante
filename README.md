# Animação de Pontos Flutuantes - Projeto em JavaScript Puro

## Descrição

Este projeto em JavaScript puro cria uma animação interativa de pontos flutuantes em um **canvas HTML5**. Os pontos se movem livremente pela tela e se conectam aos pontos mais próximos. Além disso, os pontos também se conectam ao **mouse** quando este passa próximo deles, criando uma interação visual.

O código foi desenvolvido utilizando a **API do Canvas do HTML**, aproveitando a capacidade de desenhar gráficos e animações dinâmicas diretamente na tela do navegador.

## Funcionalidades

- **Pontos flutuantes**: Vários pontos se movem aleatoriamente pelo canvas.
- **Conexões entre pontos**: Os pontos próximos se conectam com uma linha, criando uma rede dinâmica.
- **Interatividade com o mouse**: Quando o cursor do mouse passa perto dos pontos, estes se conectam ao mouse, criando um efeito visual de conexão.
- **Movimento fluido**: A animação dos pontos é contínua e suave.

## Tecnologias Utilizadas

- **HTML5**: Para a estruturação do layout e o uso da API Canvas.
- **CSS3**: Para estilização básica e configuração do canvas.
- **JavaScript (puro)**: Para a lógica da animação e interação com os pontos e o mouse.

## Como Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, faça o clone deste repositório para sua máquina local.

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Navegar até o Diretório do Projeto

Após clonar o repositório, navegue até o diretório do projeto.

```bash
cd nome-do-repositorio
```

### 3. Abrir o Projeto no Navegador

Abra o arquivo `index.html` diretamente no seu navegador para ver a animação em funcionamento.


### 4. Interagir com a Animação

Movimente o mouse sobre a tela para observar os pontos flutuantes se conectando ao cursor e entre si.

## Estrutura do Projeto

```
/nome-do-repositorio
├── index.html         # Estrutura HTML do projeto
├── style.css          # Estilos para o canvas
└── script.js          # Lógica JavaScript que gerencia a animação
```

### **index.html**

- Contém a estrutura HTML, incluindo o `<canvas>` onde a animação será exibida.

### **style.css**

- Estilos básicos para o canvas, ajustando seu tamanho e centralizando a página.

### **script.js**

- Contém a lógica principal para a animação dos pontos flutuantes, cálculo das distâncias entre eles, criação das conexões e interação com o mouse.


### Explicação:
- **Criação dos pontos**: Os pontos são criados com posições aleatórias e velocidades que fazem com que se movam pelo canvas.
- **Interação com o mouse**: O mouse pode ser integrado ao código, adicionando a lógica para detectar a proximidade e conectar os pontos ao mouse.
- **Conexão de pontos próximos**: A função `conectarPontos` conecta os pontos com linhas quando estão a uma distância abaixo de um limite pré-definido.

## Contribuições

Sinta-se à vontade para contribuir com melhorias no projeto, como otimizações de código, melhorias visuais ou novas funcionalidades. Para contribuir:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b minha-branch`).
3. Faça suas alterações.
4. Envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.