const template = document.createElement('template');
template.innerHTML = `
<style>
.mask  {
    animation: 0.4s moveRect both linear;
  }
  .screen {
    animation: moveScreen 7.6000000000000005s 7.2s both linear;
    transform-origin: 0 0;
  }
  .preview {
    animation: movePreview 1.5s 9s both;
    transform-origin: 0 0;
  }
  .panel {
    animation: .5s appearPanel both;
  }
  .panel rect,
  .panel circle {
    stroke-dasharray: 400px;
    stroke-dashoffset: 400px;
    animation: 1s 8.2s appearStroke both linear;
  }
  @keyframes moveRect {
    0% { transform: scaleX(0) }
    100% { transform:scaleX(1) }
  }
  @keyframes moveScreen {
    0% { transform: translateY(0) }
    100% { transform:translateY(-342px) }
  }
  @keyframes movePreview {
    0% { transform: translateY(0) }
    100% { transform:translateY(-190px) }
  }
  @keyframes appearPanel {
    0% { transform: translateY(30px); opacity: 0; }
    100% { transform:translateY(0); opacity: 1; }
  }
  @keyframes appearStroke {
    0% { stroke-dashoffset: 400px; fill: #d9d2d2; }
    100% { stroke-dashoffset: 0; fill: #FFF; }
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 678 402">
      <mask id="previewmask">
        <path fill="#fff" d="M26 57a4 4 0 014-4h283a4 4 0 014 4v313a4 4 0 01-4 4H30a4 4 0 01-4-4V57z"></path>
      </mask>
      <mask id="screenmask">
        <rect x="0" y="2" width="321" height="363" fill="white"></rect>
      </mask>
      <g>
        <rect width="324" height="382" x="10" y="8" fill="#d9d2d2" rx="4"></rect>
        <rect width="323" height="381" x="10.5" y="8.5" stroke="#dddada" rx="3.5"></rect>
      </g>
      <g>
        <path fill="#fff" d="M26 57a4 4 0 014-4h283a4 4 0 014 4v313a4 4 0 01-4 4H30a4 4 0 01-4-4V57z"></path>
        <path stroke="#dddada" d="M30 53.5h283a3.5 3.5 0 013.5 3.5v313a3.5 3.5 0 01-3.5 3.5H30a3.5 3.5 0 01-3.5-3.5V57a3.5 3.5 0 013.5-3.5z"></path>
      </g>
      <g>
        <circle cx="32.5" cy="30.5" r="6.5" fill="#fff"></circle>
        <circle cx="32.5" cy="30.5" r="6" stroke="#dddada"></circle>
      </g>
      <g>
        <circle cx="52.5" cy="30.5" r="6.5" fill="#fff"></circle>
        <circle cx="52.5" cy="30.5" r="6" stroke="#dddada"></circle>
      </g>
      <g>
        <circle cx="72.5" cy="30.5" r="6.5" fill="#fff"></circle>
        <circle cx="72.5" cy="30.5" r="6" stroke="#dddada"></circle>
      </g>
      <g mask="url(#previewmask)">
        <g class="preview">
          
          <g style="transform: translateY(0px)">
            <g stroke="#dddada" class="panel" style="animation-delay: 0.5s">
              <path fill="#d9d2d2" d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"></path>
              <circle cx="75" cy="101" r="21.5" fill="#fff" style="animation-delay: 1s"></circle>
              <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5" style="animation-delay: 1.5s"></rect>
              <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5" style="animation-delay: 2s"></rect>
              <rect width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5" style="animation-delay: 2.5s"></rect>
            </g>
          </g>
          <g style="transform: translateY(97px)">
            <g stroke="#dddada" class="panel" style="animation-delay: 3.5s">
              <path fill="#d9d2d2" d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"></path>
              <circle cx="75" cy="101" r="21.5" fill="#fff" style="animation-delay: 4s"></circle>
              <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5" style="animation-delay: 4.5s"></rect>
              <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5" style="animation-delay: 5s"></rect>
              <rect width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5" style="animation-delay: 5.5s"></rect>
            </g>
          </g>
          <g style="transform: translateY(194px)">
            <g stroke="#dddada" class="panel" style="animation-delay: 6.5s">
              <path fill="#d9d2d2" d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"></path>
              <circle cx="75" cy="101" r="21.5" fill="#fff" style="animation-delay: 7s"></circle>
              <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5" style="animation-delay: 7.5s"></rect>
              <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5" style="animation-delay: 8s"></rect>
              <rect width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5" style="animation-delay: 8.5s"></rect>
            </g>
          </g>
          <g style="transform: translateY(291px)">
            <g stroke="#dddada" class="panel" style="animation-delay: 9.5s">
              <path fill="#d9d2d2" d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"></path>
              <circle cx="75" cy="101" r="21.5" fill="#fff" style="animation-delay: 10s"></circle>
              <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5" style="animation-delay: 10.5s"></rect>
              <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5" style="animation-delay: 11s"></rect>
              <rect width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5" style="animation-delay: 11.5s"></rect>
            </g>
          </g>
          <g style="transform: translateY(388px)">
            <g stroke="#dddada" class="panel" style="animation-delay: 12.5s">
              <path fill="#d9d2d2" d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"></path>
              <circle cx="75" cy="101" r="21.5" fill="#fff" style="animation-delay: 13s"></circle>
              <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5" style="animation-delay: 13.5s"></rect>
              <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5" style="animation-delay: 14s"></rect>
              <rect width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5" style="animation-delay: 14.5s"></rect>
            </g>
          </g>
        </g>
      </g>
      <g>
        <rect width="324" height="382" x="344" y="8" fill="#d9d2d2" rx="4"></rect>
        <rect width="323" height="381" x="344.5" y="8.5" stroke="#dddada" rx="3.5"></rect>
      </g>
      <path fill="#c3bdbd" stroke="#dddada" d="M348 8.5h47.5v381H348a3.5 3.5 0 01-3.5-3.5V12a3.5 3.5 0 013.5-3.5z"></path>
      <path fill="#dddada" d="M395 8h1v383h-1z"></path>
      <path fill="#d9d2d2" d="M396 9h72v15h-72z"></path>
      <circle id="Ellipse 19" cx="460.5" cy="16.5" r="1" fill="#c3bdbd" stroke="#dddada"></circle>
      <path fill="#c3bdbd" stroke="#dddada" d="M467.5 8.5h72v15h-72z"></path>
      <path fill="#c3bdbd" stroke="#dddada" d="M539.5 8.5h72v15h-72z"></path>
      <circle id="Ellipse 20" cx="532.5" cy="16.5" r="1" fill="#c3bdbd" stroke="#dddada"></circle>
      <circle id="Ellipse 21" cx="602.5" cy="16.5" r="1" fill="#c3bdbd" stroke="#dddada"></circle>
      <rect width="50" height="4" x="404" y="14" fill="#c3bdbd" rx="2"></rect>
      <g style="transform: translate(346px, 24px)"><g mask="url(#screenmask)"><g class="screen"><mask id="line0">
        <rect x="0" y="10" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 0s" rx="5"></rect>
        </mask><rect width="37" height="10" x="90" y="10" fill="#e02424" rx="5" mask="url(#line0)"></rect><rect width="65" height="10" x="131" y="10" fill="#121212" rx="5" mask="url(#line0)"></rect><rect width="39" height="10" x="200" y="10" fill="#e02424" rx="5" mask="url(#line0)"></rect><rect width="38" height="10" x="243" y="10" fill="#e02424" rx="5" mask="url(#line0)"></rect><rect width="20" height="8" x="13" y="11" fill="#dddada" rx="5"></rect><mask id="line1">
        <rect x="0" y="28" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 0.4s" rx="5"></rect>
        </mask><rect width="54" height="10" x="110" y="28" fill="#121212" rx="5" mask="url(#line1)"></rect><rect width="36" height="10" x="168" y="28" fill="#e02424" rx="5" mask="url(#line1)"></rect><rect width="59" height="10" x="208" y="28" fill="#121212" rx="5" mask="url(#line1)"></rect><rect width="20" height="8" x="13" y="29" fill="#dddada" rx="5"></rect><mask id="line2">
        <rect x="0" y="46" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 0.8s" rx="5"></rect>
        </mask><rect width="37" height="10" x="130" y="46" fill="#e02424" rx="5" mask="url(#line2)"></rect><rect width="53" height="10" x="171" y="46" fill="#121212" rx="5" mask="url(#line2)"></rect><rect width="60" height="10" x="228" y="46" fill="#121212" rx="5" mask="url(#line2)"></rect><rect width="20" height="8" x="13" y="47" fill="#dddada" rx="5"></rect><mask id="line3">
        <rect x="0" y="64" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 1.2000000000000002s" rx="5"></rect>
        </mask><rect width="20" height="10" x="110" y="64" fill="#e02424" rx="5" mask="url(#line3)"></rect><rect width="56" height="10" x="134" y="64" fill="#121212" rx="5" mask="url(#line3)"></rect><rect width="95" height="10" x="194" y="64" fill="#121212" rx="5" mask="url(#line3)"></rect><rect width="20" height="8" x="13" y="65" fill="#dddada" rx="5"></rect><mask id="line4">
        <rect x="0" y="82" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 1.6s" rx="5"></rect>
        </mask><rect width="44" height="10" x="110" y="82" fill="#e02424" rx="5" mask="url(#line4)"></rect><rect width="54" height="10" x="158" y="82" fill="#121212" rx="5" mask="url(#line4)"></rect><rect width="20" height="8" x="13" y="83" fill="#dddada" rx="5"></rect><mask id="line5">
        <rect x="0" y="100" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 2s" rx="5"></rect>
        </mask><rect width="57" height="10" x="110" y="100" fill="#121212" rx="5" mask="url(#line5)"></rect><rect width="77" height="10" x="171" y="100" fill="#121212" rx="5" mask="url(#line5)"></rect><rect width="20" height="8" x="13" y="101" fill="#dddada" rx="5"></rect><mask id="line6">
        <rect x="0" y="118" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 2.4000000000000004s" rx="5"></rect>
        </mask><rect width="24" height="10" x="90" y="118" fill="#e02424" rx="5" mask="url(#line6)"></rect><rect width="36" height="10" x="118" y="118" fill="#e02424" rx="5" mask="url(#line6)"></rect><rect width="98" height="10" x="158" y="118" fill="#121212" rx="5" mask="url(#line6)"></rect><rect width="20" height="8" x="13" y="119" fill="#dddada" rx="5"></rect><mask id="line7">
        <rect x="0" y="136" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 2.8000000000000003s" rx="5"></rect>
        </mask><rect width="45" height="10" x="110" y="136" fill="#e02424" rx="5" mask="url(#line7)"></rect><rect width="23" height="10" x="159" y="136" fill="#e02424" rx="5" mask="url(#line7)"></rect><rect width="73" height="10" x="186" y="136" fill="#121212" rx="5" mask="url(#line7)"></rect><rect width="20" height="8" x="13" y="137" fill="#dddada" rx="5"></rect><mask id="line8">
        <rect x="0" y="154" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 3.2s" rx="5"></rect>
        </mask><rect width="94" height="10" x="110" y="154" fill="#121212" rx="5" mask="url(#line8)"></rect><rect width="28" height="10" x="208" y="154" fill="#e02424" rx="5" mask="url(#line8)"></rect><rect width="35" height="10" x="240" y="154" fill="#e02424" rx="5" mask="url(#line8)"></rect><rect width="20" height="8" x="13" y="155" fill="#dddada" rx="5"></rect><mask id="line9">
        <rect x="0" y="172" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 3.6s" rx="5"></rect>
        </mask><rect width="22" height="10" x="90" y="172" fill="#e02424" rx="5" mask="url(#line9)"></rect><rect width="82" height="10" x="116" y="172" fill="#121212" rx="5" mask="url(#line9)"></rect><rect width="44" height="10" x="202" y="172" fill="#e02424" rx="5" mask="url(#line9)"></rect><rect width="29" height="10" x="250" y="172" fill="#e02424" rx="5" mask="url(#line9)"></rect><rect width="20" height="8" x="13" y="173" fill="#dddada" rx="5"></rect><mask id="line10">
        <rect x="0" y="190" width="300" height="10" fill="white" class="mask" style="transform-origin: 70px 0px; animation-delay: 4s" rx="5"></rect>
        </mask><rect width="84" height="10" x="70" y="190" fill="#121212" rx="5" mask="url(#line10)"></rect><rect width="75" height="10" x="158" y="190" fill="#121212" rx="5" mask="url(#line10)"></rect><rect width="20" height="8" x="13" y="191" fill="#dddada" rx="5"></rect><mask id="line11">
        <rect x="0" y="208" width="300" height="10" fill="white" class="mask" style="transform-origin: 70px 0px; animation-delay: 4.4s" rx="5"></rect>
        </mask><rect width="63" height="10" x="70" y="208" fill="#121212" rx="5" mask="url(#line11)"></rect><rect width="30" height="10" x="137" y="208" fill="#e02424" rx="5" mask="url(#line11)"></rect><rect width="99" height="10" x="171" y="208" fill="#121212" rx="5" mask="url(#line11)"></rect><rect width="20" height="8" x="13" y="209" fill="#dddada" rx="5"></rect><mask id="line12">
        <rect x="0" y="226" width="300" height="10" fill="white" class="mask" style="transform-origin: 70px 0px; animation-delay: 4.800000000000001s" rx="5"></rect>
        </mask><rect width="82" height="10" x="70" y="226" fill="#121212" rx="5" mask="url(#line12)"></rect><rect width="49" height="10" x="156" y="226" fill="#e02424" rx="5" mask="url(#line12)"></rect><rect width="30" height="10" x="209" y="226" fill="#e02424" rx="5" mask="url(#line12)"></rect><rect width="48" height="10" x="243" y="226" fill="#e02424" rx="5" mask="url(#line12)"></rect><rect width="20" height="8" x="13" y="227" fill="#dddada" rx="5"></rect><mask id="line13">
        <rect x="0" y="244" width="300" height="10" fill="white" class="mask" style="transform-origin: 70px 0px; animation-delay: 5.2s" rx="5"></rect>
        </mask><rect width="96" height="10" x="70" y="244" fill="#121212" rx="5" mask="url(#line13)"></rect><rect width="78" height="10" x="170" y="244" fill="#121212" rx="5" mask="url(#line13)"></rect><rect width="20" height="8" x="13" y="245" fill="#dddada" rx="5"></rect><mask id="line14">
        <rect x="0" y="262" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 5.6000000000000005s" rx="5"></rect>
        </mask><rect width="25" height="10" x="90" y="262" fill="#e02424" rx="5" mask="url(#line14)"></rect><rect width="50" height="10" x="119" y="262" fill="#e02424" rx="5" mask="url(#line14)"></rect><rect width="35" height="10" x="173" y="262" fill="#e02424" rx="5" mask="url(#line14)"></rect><rect width="71" height="10" x="212" y="262" fill="#121212" rx="5" mask="url(#line14)"></rect><rect width="20" height="8" x="13" y="263" fill="#dddada" rx="5"></rect><mask id="line15">
        <rect x="0" y="280" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 6s" rx="5"></rect>
        </mask><rect width="82" height="10" x="90" y="280" fill="#121212" rx="5" mask="url(#line15)"></rect><rect width="30" height="10" x="176" y="280" fill="#e02424" rx="5" mask="url(#line15)"></rect><rect width="84" height="10" x="210" y="280" fill="#121212" rx="5" mask="url(#line15)"></rect><rect width="20" height="8" x="13" y="281" fill="#dddada" rx="5"></rect><mask id="line16">
        <rect x="0" y="298" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 6.4s" rx="5"></rect>
        </mask><rect width="20" height="10" x="90" y="298" fill="#e02424" rx="5" mask="url(#line16)"></rect><rect width="83" height="10" x="114" y="298" fill="#121212" rx="5" mask="url(#line16)"></rect><rect width="37" height="10" x="201" y="298" fill="#e02424" rx="5" mask="url(#line16)"></rect><rect width="42" height="10" x="242" y="298" fill="#e02424" rx="5" mask="url(#line16)"></rect><rect width="20" height="8" x="13" y="299" fill="#dddada" rx="5"></rect><mask id="line17">
        <rect x="0" y="316" width="300" height="10" fill="white" class="mask" style="transform-origin: 70px 0px; animation-delay: 6.800000000000001s" rx="5"></rect>
        </mask><rect width="78" height="10" x="70" y="316" fill="#121212" rx="5" mask="url(#line17)"></rect><rect width="32" height="10" x="152" y="316" fill="#e02424" rx="5" mask="url(#line17)"></rect><rect width="95" height="10" x="188" y="316" fill="#121212" rx="5" mask="url(#line17)"></rect><rect width="20" height="8" x="13" y="317" fill="#dddada" rx="5"></rect><mask id="line18">
        <rect x="0" y="334" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 7.2s" rx="5"></rect>
        </mask><rect width="45" height="10" x="90" y="334" fill="#e02424" rx="5" mask="url(#line18)"></rect><rect width="22" height="10" x="139" y="334" fill="#e02424" rx="5" mask="url(#line18)"></rect><rect width="73" height="10" x="165" y="334" fill="#121212" rx="5" mask="url(#line18)"></rect><rect width="49" height="10" x="242" y="334" fill="#e02424" rx="5" mask="url(#line18)"></rect><rect width="20" height="8" x="13" y="335" fill="#dddada" rx="5"></rect><mask id="line19">
        <rect x="0" y="352" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 7.6000000000000005s" rx="5"></rect>
        </mask><rect width="33" height="10" x="110" y="352" fill="#e02424" rx="5" mask="url(#line19)"></rect><rect width="98" height="10" x="147" y="352" fill="#121212" rx="5" mask="url(#line19)"></rect><rect width="20" height="8" x="13" y="353" fill="#dddada" rx="5"></rect><mask id="line20">
        <rect x="0" y="370" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 8s" rx="5"></rect>
        </mask><rect width="56" height="10" x="90" y="370" fill="#121212" rx="5" mask="url(#line20)"></rect><rect width="34" height="10" x="150" y="370" fill="#e02424" rx="5" mask="url(#line20)"></rect><rect width="43" height="10" x="188" y="370" fill="#e02424" rx="5" mask="url(#line20)"></rect><rect width="30" height="10" x="235" y="370" fill="#e02424" rx="5" mask="url(#line20)"></rect><rect width="20" height="8" x="13" y="371" fill="#dddada" rx="5"></rect><mask id="line21">
        <rect x="0" y="388" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 8.4s" rx="5"></rect>
        </mask><rect width="59" height="10" x="90" y="388" fill="#121212" rx="5" mask="url(#line21)"></rect><rect width="32" height="10" x="153" y="388" fill="#e02424" rx="5" mask="url(#line21)"></rect><rect width="73" height="10" x="189" y="388" fill="#121212" rx="5" mask="url(#line21)"></rect><rect width="20" height="8" x="13" y="389" fill="#dddada" rx="5"></rect><mask id="line22">
        <rect x="0" y="406" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 8.8s" rx="5"></rect>
        </mask><rect width="28" height="10" x="110" y="406" fill="#e02424" rx="5" mask="url(#line22)"></rect><rect width="90" height="10" x="142" y="406" fill="#121212" rx="5" mask="url(#line22)"></rect><rect width="21" height="10" x="236" y="406" fill="#e02424" rx="5" mask="url(#line22)"></rect><rect width="39" height="10" x="261" y="406" fill="#e02424" rx="5" mask="url(#line22)"></rect><rect width="20" height="8" x="13" y="407" fill="#dddada" rx="5"></rect><mask id="line23">
        <rect x="0" y="424" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 9.200000000000001s" rx="5"></rect>
        </mask><rect width="65" height="10" x="110" y="424" fill="#121212" rx="5" mask="url(#line23)"></rect><rect width="54" height="10" x="179" y="424" fill="#121212" rx="5" mask="url(#line23)"></rect><rect width="55" height="10" x="237" y="424" fill="#121212" rx="5" mask="url(#line23)"></rect><rect width="20" height="8" x="13" y="425" fill="#dddada" rx="5"></rect><mask id="line24">
        <rect x="0" y="442" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 9.600000000000001s" rx="5"></rect>
        </mask><rect width="100" height="10" x="110" y="442" fill="#121212" rx="5" mask="url(#line24)"></rect><rect width="20" height="8" x="13" y="443" fill="#dddada" rx="5"></rect><mask id="line25">
        <rect x="0" y="460" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 10s" rx="5"></rect>
        </mask><rect width="81" height="10" x="130" y="460" fill="#121212" rx="5" mask="url(#line25)"></rect><rect width="32" height="10" x="215" y="460" fill="#e02424" rx="5" mask="url(#line25)"></rect><rect width="20" height="8" x="13" y="461" fill="#dddada" rx="5"></rect><mask id="line26">
        <rect x="0" y="478" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 10.4s" rx="5"></rect>
        </mask><rect width="86" height="10" x="130" y="478" fill="#121212" rx="5" mask="url(#line26)"></rect><rect width="22" height="10" x="220" y="478" fill="#e02424" rx="5" mask="url(#line26)"></rect><rect width="21" height="10" x="246" y="478" fill="#e02424" rx="5" mask="url(#line26)"></rect><rect width="20" height="8" x="13" y="479" fill="#dddada" rx="5"></rect><mask id="line27">
        <rect x="0" y="496" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 10.8s" rx="5"></rect>
        </mask><rect width="88" height="10" x="110" y="496" fill="#121212" rx="5" mask="url(#line27)"></rect><rect width="91" height="10" x="202" y="496" fill="#121212" rx="5" mask="url(#line27)"></rect><rect width="20" height="8" x="13" y="497" fill="#dddada" rx="5"></rect><mask id="line28">
        <rect x="0" y="514" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 11.200000000000001s" rx="5"></rect>
        </mask><rect width="26" height="10" x="130" y="514" fill="#e02424" rx="5" mask="url(#line28)"></rect><rect width="59" height="10" x="160" y="514" fill="#121212" rx="5" mask="url(#line28)"></rect><rect width="34" height="10" x="223" y="514" fill="#e02424" rx="5" mask="url(#line28)"></rect><rect width="20" height="8" x="13" y="515" fill="#dddada" rx="5"></rect><mask id="line29">
        <rect x="0" y="532" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 11.600000000000001s" rx="5"></rect>
        </mask><rect width="21" height="10" x="130" y="532" fill="#e02424" rx="5" mask="url(#line29)"></rect><rect width="61" height="10" x="155" y="532" fill="#121212" rx="5" mask="url(#line29)"></rect><rect width="39" height="10" x="220" y="532" fill="#e02424" rx="5" mask="url(#line29)"></rect><rect width="20" height="8" x="13" y="533" fill="#dddada" rx="5"></rect><mask id="line30">
        <rect x="0" y="550" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 12s" rx="5"></rect>
        </mask><rect width="99" height="10" x="110" y="550" fill="#121212" rx="5" mask="url(#line30)"></rect><rect width="77" height="10" x="213" y="550" fill="#121212" rx="5" mask="url(#line30)"></rect><rect width="20" height="8" x="13" y="551" fill="#dddada" rx="5"></rect><mask id="line31">
        <rect x="0" y="568" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 12.4s" rx="5"></rect>
        </mask><rect width="49" height="10" x="110" y="568" fill="#e02424" rx="5" mask="url(#line31)"></rect><rect width="27" height="10" x="163" y="568" fill="#e02424" rx="5" mask="url(#line31)"></rect><rect width="24" height="10" x="194" y="568" fill="#e02424" rx="5" mask="url(#line31)"></rect><rect width="21" height="10" x="222" y="568" fill="#e02424" rx="5" mask="url(#line31)"></rect><rect width="20" height="8" x="13" y="569" fill="#dddada" rx="5"></rect><mask id="line32">
        <rect x="0" y="586" width="300" height="10" fill="white" class="mask" style="transform-origin: 90px 0px; animation-delay: 12.8s" rx="5"></rect>
        </mask><rect width="62" height="10" x="90" y="586" fill="#121212" rx="5" mask="url(#line32)"></rect><rect width="97" height="10" x="156" y="586" fill="#121212" rx="5" mask="url(#line32)"></rect><rect width="20" height="8" x="13" y="587" fill="#dddada" rx="5"></rect><mask id="line33">
        <rect x="0" y="604" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 13.200000000000001s" rx="5"></rect>
        </mask><rect width="64" height="10" x="110" y="604" fill="#121212" rx="5" mask="url(#line33)"></rect><rect width="74" height="10" x="178" y="604" fill="#121212" rx="5" mask="url(#line33)"></rect><rect width="25" height="10" x="256" y="604" fill="#e02424" rx="5" mask="url(#line33)"></rect><rect width="20" height="8" x="13" y="605" fill="#dddada" rx="5"></rect><mask id="line34">
        <rect x="0" y="622" width="300" height="10" fill="white" class="mask" style="transform-origin: 110px 0px; animation-delay: 13.600000000000001s" rx="5"></rect>
        </mask><rect width="85" height="10" x="110" y="622" fill="#121212" rx="5" mask="url(#line34)"></rect><rect width="66" height="10" x="199" y="622" fill="#121212" rx="5" mask="url(#line34)"></rect><rect width="31" height="10" x="269" y="622" fill="#e02424" rx="5" mask="url(#line34)"></rect><rect width="20" height="8" x="13" y="623" fill="#dddada" rx="5"></rect><mask id="line35">
        <rect x="0" y="640" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 14s" rx="5"></rect>
        </mask><rect width="20" height="10" x="130" y="640" fill="#e02424" rx="5" mask="url(#line35)"></rect><rect width="72" height="10" x="154" y="640" fill="#121212" rx="5" mask="url(#line35)"></rect><rect width="20" height="8" x="13" y="641" fill="#dddada" rx="5"></rect><mask id="line36">
        <rect x="0" y="658" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 14.4s" rx="5"></rect>
        </mask><rect width="75" height="10" x="130" y="658" fill="#121212" rx="5" mask="url(#line36)"></rect><rect width="88" height="10" x="209" y="658" fill="#121212" rx="5" mask="url(#line36)"></rect><rect width="20" height="8" x="13" y="659" fill="#dddada" rx="5"></rect><mask id="line37">
        <rect x="0" y="676" width="300" height="10" fill="white" class="mask" style="transform-origin: 130px 0px; animation-delay: 14.8s" rx="5"></rect>
        </mask><rect width="54" height="10" x="130" y="676" fill="#121212" rx="5" mask="url(#line37)"></rect><rect width="25" height="10" x="188" y="676" fill="#e02424" rx="5" mask="url(#line37)"></rect><rect width="20" height="8" x="13" y="677" fill="#dddada" rx="5"></rect></g></g></g>
    </svg>

`;

export default class HomeSvg extends HTMLElement { // (1)

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
  
  }
  