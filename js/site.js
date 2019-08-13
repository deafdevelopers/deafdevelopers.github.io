function openModalInscricao(){
    Swal.fire({
        title: '<strong>Inscreva-se</strong>',
        html: 'Só aguardar na reunião tá ^^',
        // '<form>' +
        // '<div class="form-group">' +
        // '<label for="seuNome">Seu nome completo</label>' +
        // '<input type="text" class="form-control" id="seuNome" name="seuNome" placeholder="Ex. Tal Fulano">' +
        // '</div>' +
        // '<div class="form-group">' +
        // '<label for="seuEmail">Seu Email</label>' +
        // '<input type="email" class="form-control" id="seuEmail" placeholder="Ex.: seu-email@seu-dominio.com.br">' +
        // '</div>' +
        // '<button type="submit" class="btn btn-primary">Enviar</button>' +
        // '</form>',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false
      })
}

function sendEmail(){

    var SUBJECT = 'Inscrição - Deaf Developers';
    var API_KEY = 'E633B41065D137538A1BD2B9EDA35BF36499DD5D1F9078255023D3FDC9A1AEB09E6D0CD490ECC25181493D0283F1645B';
    var URL     = 'https://api.elasticemail.com';
    var PATH    = '/v2/email/send?apikey=' + API_KEY + '&subject=' + SUBJECT + '&msgFrom=conferencia@deafdevelopers.com&msgTo=criscompbr@gmail.com&channel=HTTP%20API&bodyText=Estou testado tá!';

    fetch(URL + PATH).then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            response.json().then(function(data) {
                console.log(data, data.success);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}