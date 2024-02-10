$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#formulario-cadastro').submit(function(e) {
        e.preventDefault();

        let nome = $('#nome').val();
        let email = $('#email').val();
        let telefone = $('#telefone').val();
        alert('O usuário: ' + nome + ' do e-mail: ' + email + ' e telefone: ' + telefone + ' foi cadastrado com sucesso!')
        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
    })
});