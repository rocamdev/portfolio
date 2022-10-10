if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "main",
    nav: true,
    auto: false,
    time: 300000,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Error in sending!</h2><p>Try send manually a email to contato@rodolfocampos.com.</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h2>Email successfully sent!</h2><p>See you soon!.</p></div>", // mensagem de sucesso
  });
}
