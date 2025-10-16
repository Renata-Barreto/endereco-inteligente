// Seleciona os elementos do formulário
const form = document.getElementById('formEndereco');
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const numeroInput = document.getElementById('numero');
const ufInput = document.getElementById('uf');
const complementoInput = document.getElementById('complemento');

// Formatação automática do CEP enquanto o usuário digita
cepInput.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    // Aplica a máscara 00000-000
    if (valor.length > 5) {
        valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
    }
    
    e.target.value = valor;
});

// Converte UF para maiúsculo automaticamente
ufInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});

// Permite apenas números no campo Número
numeroInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Validação do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtém os valores dos campos
    const cep = cepInput.value.trim();
    const logradouro = logradouroInput.value.trim();
    const numero = numeroInput.value.trim();
    const uf = ufInput.value.trim();
    
    // Regex para validação
    const cepRegex = /^(\d{5})-(\d{3})$/;
    const ufRegex = /^[A-Z]{2}$/;
    
    // Validação do CEP
    if (!cep) {
        alert('O campo CEP é obrigatório!');
        cepInput.focus();
        return;
    }
    
    if (!cepRegex.test(cep)) {
        alert('CEP inválido! Use o formato 00000-000.');
        cepInput.focus();
        return;
    }
    
    // Validação do Logradouro
    if (!logradouro) {
        alert('O campo Logradouro é obrigatório!');
        logradouroInput.focus();
        return;
    }
    
    if (logradouro.length < 5) {
        alert('O Logradouro deve conter no mínimo 5 caracteres!');
        logradouroInput.focus();
        return;
    }
    
    // Validação do Número
    if (!numero) {
        alert('O campo Número é obrigatório!');
        numeroInput.focus();
        return;
    }
    
    if (!/^\d+$/.test(numero)) {
        alert('O campo Número deve conter apenas dígitos numéricos!');
        numeroInput.focus();
        return;
    }
    
    // Validação da UF
    if (!uf) {
        alert('O campo UF é obrigatório!');
        ufInput.focus();
        return;
    }
    
    if (!ufRegex.test(uf)) {
        alert('UF inválido! Use 2 letras maiúsculas (ex: SP, RJ, MG).');
        ufInput.focus();
        return;
    }
    
    // Se todas as validações passarem
    alert('Endereço cadastrado com sucesso!');
    
});