const template = document.createElement('template');
template.innerHTML = `
<style>
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
      }
      .waves-container {
        opacity: 1!important;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        z-index: 1;
        height: 0;
        box-sizing: content-box;
        padding-bottom: 120px; 
      }
      .waves-container.no-animation * {
        animation: none!important;
      }
      .waves-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(to bottom, #DC2626, #f42635);
        transition: opacity .3s;
        animation: backgroundIn .4s;
      }
      .waves {
        position: absolute;
        left: 50%;
        right: 0;
        z-index: 3;
        bottom: 0;
        width: 100vw;
        height: auto;
        min-width: 1440px;
        transform: translateX(-50%);
        max-height: 120px ;
      }
      .waves path {
        animation: waveIn .7s both;
      }
      .waves path:last-child {
        animation: none;
      }
      @keyframes waveIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
      }
      /* Cette animation ne sert à rien mais permet d'empécher un bug de clipping (MERCI CHROME !) */
      @keyframes backgroundIn {
        from {
            transform: scaleY(1.1);
        }
        to {
            transform: scaleY(1);
        }
      }
      </style>
      <div class="waves-container " style="box-sizing: border-box; height: 542px;">
      <div class="waves-background"></div>
      
      <svg class="waves" viewBox="0 0 1440 250" style="isolation:isolate" preserveAspectRatio="none">
        <path fill="#FFF" style="animation-delay: .2s" fill-opacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72V80c-138 38-284 102-718 27C314 36 150 16 1 16l-1 8z"></path>
        <path fill="#FFF" style="animation-delay: .4s" fill-opacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72v-51l-2 1c-122 29-294 69-680-34C357 38 204 21 0 21v3z"></path>
        <path fill="#FFF" d="M1440 229v21H0V24c166 0 358 11 755 133 232 71 390 93 506 93 74 0 131-9 179-21 0-45 0-45 0 0z"></path>
      </svg>
  </div>
  `
  export default class HeroPage extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
  
  }