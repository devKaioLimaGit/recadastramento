
// Validação básica do CPF (formato e dígitos válidos)
function validarCPF(input) {
    const cpf = input.value.replace(/\D/g, '');
    let valido = true;

    if (cpf.length !== 11) {
        valido = false;
    } else {
        const invalidos = [
            "00000000000", "11111111111", "22222222222", "33333333333",
            "44444444444", "55555555555", "66666666666", "77777777777",
            "88888888888", "99999999999"
        ];
        if (invalidos.includes(cpf)) valido = false;

        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) valido = false;

        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) valido = false;
    }

    const spanErro = document.getElementById('cpfErro');
    if (!valido) {
        spanErro.style.display = 'inline';
        input.setCustomValidity("CPF inválido!");
    } else {
        spanErro.style.display = 'none';
        input.setCustomValidity("");
    }
}

// Validação tamanho do arquivo PDF
function checkFileSize() {
    const fileInput = document.getElementById('file');
    const errorMsg = document.getElementById('fileSizeError');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            errorMsg.style.display = 'inline';
            fileInput.setCustomValidity("Arquivo muito grande");
        } else {
            errorMsg.style.display = 'none';
            fileInput.setCustomValidity("");
        }
    } else {
        errorMsg.style.display = 'none';
        fileInput.setCustomValidity("");
    }
}

// CAPTCHA simples (soma de dois números)
let captchaResult = 0;
function gerarCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaResult = num1 + num2;
    document.getElementById('captchaQuestion').textContent = `Quanto é ${num1} + ${num2}?`;
}

function validarCaptcha() {
    const resposta = document.getElementById('captchaAnswer').value;
    const captchaError = document.getElementById('captchaError');
    if (parseInt(resposta) !== captchaResult) {
        captchaError.style.display = 'inline';
        return false;
    } else {
        captchaError.style.display = 'none';
        return true;
    }
}

// Validação geral do formulário
function validarFormulario() {
    checkFileSize();
    if (!validarCaptcha()) {
        return false;
    }
    return true;
}

// Inicializa o CAPTCHA e a animação ao carregar
window.onload = function () {
    gerarCaptcha();
}

// Animação com partículas no fundo
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

for (let i = 0; i < 100; i++) {
    particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

