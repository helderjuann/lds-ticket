function ticketPdf(nameClient, addressName, docCPF, docCNPJ, carName, carLicence, servicesOne, 
    servicesTwo, servicesThree, priceTotal, priceOne, priceTwo, priceThree, descOne, descTwo, descThree) {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
  
      const ticketContent = `
      <style>
      body {
        background-color: black;
      }
  
      @media print {
  
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Open Sans', sans-serif;
        }
        
        html, body {
            height: 100%;
        }
        
        .container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 10px 2%;
        }
        
        section.box .container .r-box {
            width: 100%;
            max-width: 800px;
            height: auto;
            border: 2px solid black;
            margin: 0 auto;
        }
        
        section.box .container .r-box .header {
            width: 100%;
            border-bottom: 1px solid black;
            display: flex;
        }
        
        section.box .container .r-box .header .header-35 {
            width: 35%;
            position: relative;
            top: 20px;
        }
        
        section.box .container .r-box .header .header-35 h2 {
            font-size: 14px;
            text-align: center;
        }
        
        section.box .container .r-box .header .header-35 .img-logo {
            background-image: url(../assets/logo.png);
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            height: 40px;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
        
        section.box .container .r-box .header .header-30 {
            width: 30%;
            border-left: 1px solid black;
            padding: 5px;
        }
        
        section.box .container .r-box .header .header-30 p {
            font-size: 13px;
            text-align: left;
        }
        
        section.box .container .r-box .table-names {
            width: 100%;
        }
        
        section.box .container .r-box .table-names p {
            font-size: 13px;
        }
        
        section.box .container .r-box .table-names .first-line {
            width: 100%;
            display: flex;
        }
        
        section.box .container .r-box .table-names .first-line .name-70 {
            width: 70%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .first-line .name-30 {
            width: 30%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .second-line .name-25 {
            width: 25%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .third-line .bname-25 {
            width: 25%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .third-line .contact-50 {
            width: 50%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .four-line .bname-100 {
            width: 100%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .fifth-line .cname-100 {
            width: 100%;
            padding: 5px;
        }
        
        section.box .container .r-box .table-names .first-line, section.box .container .r-box .table-names .second-line,
        section.box .container .r-box .table-names .third-line, section.box .container .r-box .table-names .four-line,
        section.box .container .r-box .table-names .fifth-line {
            width: 100%;
            display: flex;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .equipments {
            width: 100%;
        }
        
        section.box .container .r-box .equipments .equipments-info h2 {
            text-align: center;
            font-size: 14px;
            padding: 5px;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .menu-f {
            width: 100%;
            display: flex;
        }
        
        section.box .container .r-box .menu-f p {
            font-size: 13px;
            border-bottom: 1px solid black;
            padding: 5px;
        }
        
        section.box .container .r-box .menu-f h2 {
            text-align: center;
            font-size: 14px;
            padding: 5px;
            border-bottom: 1px solid black;
        }
        
        section.box .container .r-box .menu-f .menu-50 {
            width: 50%;
            display: flex;
            text-align: center;
        }
        
        section.box .container .r-box .menu-f .menu-50:nth-of-type(2) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .menu-f .menu-50 .title-12:nth-of-type(2) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .menu-f .menu-50 .title-25:nth-of-type(4) {
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .menu-f .menu-50 .title-25 {
            width: 50%;
        }
        
        section.box .container .r-box .menu-f .menu-50 .title-12 {
            width: 25%;
        }
        
        section.box .container .r-box .damage-wrp {
            width: 100%;
            display: flex;
        }
        
        section.box .container .r-box .damage-wrp .damages {
            width: 50%;
            padding: 5px;
        }
        
        section.box .container .r-box .damage-wrp h2 {
            font-size: 12px;
            text-align: center;
        }
        
        section.box .container .r-box .damage-wrp .damages-img {
            width: 100%;
            background-image: url(../assets/cars.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            padding-top: 170px;
            margin-top: 10px;
        }
        
        section.box .container .r-box .damage-wrp .desc-obs {
            width: 50%;
            padding: 5px;
            display: inline-block;
            border-left: 1px solid black;
        }
        
        section.box .container .r-box .damage-wrp .desc-obs p {
            text-align: justify;
            font-size: 13px;
            margin-top: 8px;
            padding: 0px 20px;
        }
        
        section.box .container .r-box .damage-wrp .dt-name {
            width: 80%;
            display: flex;
            border-top: 1px solid black;
            margin: 40px auto 0px;
        }
        
        section.box .container .r-box .damage-wrp .dt-name p {
            text-align: center;
        }
        
        section.box .container .r-box .damage-wrp .dt-name .name {
            width: 100%;
        }
        
        section.box .container .r-box .obs-title {
            width: 100%;
            border-top: 1px solid black;
        }
        
        section.box .container .r-box .obs-title h2 {
            text-align: center;
            font-size: 14px;
            padding: 5px;
        }
        
        section.box .container .r-box .obs-f {
            width: 100%;
            display: flex;
        }
        
        section.box .container .r-box .obs-f .obs-text {
            text-align: center;
            padding: 5px;
            width: 85%;
        }
        
        section.box .container .r-box .obs-f .obs-text p {
            text-align: justify;
            font-size: 13px;
            padding: 0 10px;
        }
        
        section.box .container .r-box .obs-f .img-fuel {
            width: 15%;
            background-image: url(../assets/fuel.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            padding-top: 60px;
            position: relative;
            bottom: 10px;
        }
      }
      </style>
      <section class="box">
      <div class="container">
          <div class="r-box">
              <div class="header">
                  <div class="header-35">
                      <div class="img-logo"></div><!-- img-logo -->
                  </div><!-- header-35 -->
                  <div class="header-35">
                      <h2>Laudo de Socorro</h2>
                      <h2>Acompanhado pelo cliente ou responsável</h2>
                  </div><!-- header-35 -->
                  <div class="header-30">
                      <p>Horário:</p>
                      <p>Motorista:</p>
                      <p>Veículo:</p>
                      <p>Seguradora:</p>
                  </div><!-- header-30-->
              </div><!-- header -->
              <div class="table-names">
                  <div class="first-line">
                      <div class="name-70">
                          <p>Nome:</p>
                      </div><!-- name-70 -->
                      <div class="name-30">
                          <p>CPF:</p>
                      </div><!-- name-30 -->
                  </div><!-- first-line -->
                  <div class="second-line">
                      <div class="name-25">
                          <p>Placa:</p>
                      </div><!-- name-25 -->
                      <div class="name-25">
                          <p>Marca:</p>
                      </div><!-- name-25 -->
                      <div class="name-25">
                          <p>Modelo:</p>
                      </div><!-- name-25 -->
                      <div class="name-25">
                          <p>Tipo:</p>
                      </div><!-- name-25 -->
                  </div><!-- second-line -->
                  <div class="third-line">
                      <div class="bname-25">
                          <p>Cor:</p>
                      </div><!-- bname-25 -->
                      <div class="bname-25">
                          <p>KM:</p>
                      </div><!-- bname-25 -->
                      <div class="contact-50">
                          <p>Contato Local:</p>
                      </div><!-- contact-50 -->
                  </div><!-- third-line -->
                  <div class="four-line">
                      <div class="bname-100">
                          <p>Localização do veículo:</p>
                      </div><!-- name-100 -->
                  </div><!-- four-line -->
                  <div class="fifth-line">
                      <div class="cname-100">
                          <p>Local de destino:</p>
                      </div><!-- name-100 -->
                  </div><!-- fifth-line -->
              </div><!-- table-names -->
              <div class="equipments">
                  <div class="equipments-info">
                      <h2>Acessórios, Ferramentas e Som</h2>
                  </div><!-- equipments-info -->
              </div><!-- equipments -->
              <div class="menu-f">
                  <div class="menu-50">
                      <div class="title-25">
                          <h2>Existentes</h2>
                          <p>Bancos diant.</p>
                          <p>Pneus Diant.</p>
                          <p>Cad. de Bebê</p>
                          <p>Extintor</p>
                          <p>Faróis de Milha</p>
                          <p>Frente Removível</p>
                          <p>Obj porta-luvas</p>
                          <p>Chaves</p>
                      </div><!-- title-25 -->
                      <div class="title-12">
                          <h2>Sim</h2>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-12">
                          <h2>Não</h2>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-25">
                          <h2>Condição</h2>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-25 -->
                  </div><!-- menu-50 -->
                  <div class="menu-50">
                      <div class="title-25">
                          <h2>Existentes</h2>
                          <p>Bancos tras.</p>
                          <p>Pneus Tras.</p>
                          <p>Tapetes</p>
                          <p>Relógio</p>
                          <p>Antena</p>
                          <p>Insulfilm</p>
                          <p>Documentos</p>
                          <p>Dvd</p>
                      </div><!-- title-25 -->
                      <div class="title-12">
                          <h2>Sim</h2>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-12">
                          <h2>Não</h2>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-25">
                          <h2>Condição</h2>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-25 -->
                  </div><!-- menu-50 -->
              </div><!-- menu-f -->
              <div class="menu-f">
                  <div class="menu-50">
                      <div class="title-25">
                          <p>Cd</p>
                          <p>Bagageiro</p>
                          <p>Macaco</p>
                          <p>Rádio</p>
                          <p>Ferramentas</p>
                          <p>Rodas</p>
                          <p>Obj porta-malas</p>
                          <p>Prot. Cárter</p>
                      </div><!-- title-25 -->
                      <div class="title-12">
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-12">
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-25">
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-25 -->
                  </div><!-- menu-50 -->
                  <div class="menu-50">
                      <div class="title-25">
                          <p>Porta Cd</p>
                          <p>Estepe</p>
                          <p>Caixa Selada</p>
                          <p>Toca-fitas</p>
                          <p>Triângulo</p>
                          <p>Calotas</p>
                          <p>Módulo</p>
                          <p>Console</p>
                      </div><!-- title-25 -->
                      <div class="title-12">
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-12">
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-12 -->
                      <div class="title-25">
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                          <p>.</p>
                      </div><!-- title-25 -->
                  </div><!-- menu-50 -->
              </div><!-- menu-f -->
              <div class="damage-wrp">
                  <div class="damages">
                      <h2>Avarias</h2>
                      <div class="damages-img"></div><!-- damages-img -->
                  </div><!-- damages -->
                  <div class="desc-obs">
                      <h2>Importante</h2>
                      <p>Declaro estar de acordo com o preenchimento 
                      deste formulário e com o destino do meu veículo. 
                      Declaro ainda ter retirado do interior do veículo 
                      todos os bens e valores pessoais não integrados 
                      ao automóvel. A EstetPARK fica isenta de qualquer 
                      responsabilidade sobre os mesmos.</p>
                      <div class="dt-name">
                          <div class="name">
                              <p>Assinatura</p>
                          </div><!-- name -->
                      </div><!-- dt-name -->
                  </div><!--desc-obs -->
              </div><!-- damage-wrp -->
              <div class="obs-title">
                  <h2>Combustível e Anotações</h2>
              </div>
              <div class="obs-f">
                  <div class="img-fuel"></div><!-- img-fuel -->
                  <div class="obs-text">
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                  </div><!-- obs-text -->
              </div><!-- obs-f -->
              </div><!-- r-box -->
          </div><!-- container -->
      </section><!-- box -->
      `;

      const ticketWindow = window.open("", "_blank");
      ticketWindow.document.write(ticketContent);
      ticketWindow.document.close();
      ticketWindow.onload = printIf();
      
      function printIf() {
        if (window.matchMedia("(any-pointer: coarse)").matches) {
            setTimeout(function() {
                ticketWindow.focus();
                ticketWindow.print();
                ticketWindow.close();
            }, 1000);
        } else {
            setTimeout(function() {
                ticketWindow.focus();
                ticketWindow.print();
                ticketWindow.close();
            }, 500);
        }
      };

  }
  
  const printPdf = document.querySelector('#printPdf');
  printPdf.addEventListener('click', (event) => {
    const nameClient = document.querySelector('#nameClient').value;
    const addressName = document.querySelector('#addressName').value;
    const docCPF = document.querySelector('#docCPF').value;
    const docCNPJ = document.querySelector('#docCNPJ').value;
    const carName = document.querySelector('#carName').value;
    const carLicence = document.querySelector('#carLicence').value;
    const servicesOne = document.querySelector('#servicesOne').value;
    const servicesTwo = document.querySelector('#servicesTwo').value;
    const servicesThree = document.querySelector('#servicesThree').value;
    const priceOne = Number(document.querySelector('#priceOne').value);
    const priceTwo = Number(document.querySelector('#priceTwo').value);
    const priceThree = Number(document.querySelector('#priceThree').value);
    const priceTotal = priceOne + priceTwo + priceThree;
    const descOne = document.querySelector('#descOne').value;
    const descTwo = document.querySelector('#descTwo').value;
    const descThree = document.querySelector('#descThree').value;
    ticketPdf(nameClient, addressName, docCPF, docCNPJ, carName, carLicence, servicesOne, servicesTwo, 
    servicesThree, priceTotal, priceOne, priceTwo, priceThree, descOne, descTwo, descThree);
  });