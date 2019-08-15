function openModalInscricao(){
    var url = 'https://www.sympla.com.br/deaf-developers-conference__613913';
    var divWidth = $(window).width();
    var divHeight = ($(window).height() - 100);
    Swal.fire({
        title: '<strong>Inscreva-se</strong>',
        html:   '<div class="embed-responsive embed-responsive-16by9">' +
                '<iframe class="embed-responsive-item" src="' + url + '" ' +
                'width="100%" height="' + divHeight + '"' +
                'frameborder="0" allow="accelerometer; autoplay; encrypted-media; ' +
                'gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                '</div>',
        width: divWidth,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false
      })
}