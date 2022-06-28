const template = document.createElement('template');
template.innerHTML = `
<style>
#ofBar {
  background: #fff;
  z-index: 999999999;
  font-size: 16px;
  color: #333;
  padding: 16px 40px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 40px;
  width: 80%;
  border-radius: 8px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
}

#ofBar-content {
  display: inline;
  padding: 0 15px;
}

#ofBar-right {
  display: flex;
  align-items: center;
}
#btn-bar, #btn-bar:hover, #btn-bar:focus, #btn-bar:active {
  text-decoration: none !important;
  color: #fff !important;
}

#btn-bar {
  background-image: linear-gradient(310deg, #141727 0%, #3A416F 100%);
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  opacity: .95;
  margin-right: 20px;
  box-shadow: 0 5px 10px -3px rgb(0 0 0 / 23%), 0 6px 10px -5px rgb(0 0 0 / 25%);
}
</style>
<div id="ofBar"><div id="ofBar-logo"> 
<img alt="creative-tim-logo" src="https://s3.amazonaws.com/creativetim_bucket/static-assets/logo-ct-black.png" /></div><div id="ofBar-content">🙍‍♀️ 🎁 Our Specials for <b>Women’s Month</b> are now available - <b>up to 85% OFF</b>. Grab yours now!</div><div id="ofBar-right"><a href="https://www.creative-tim.com/campaign?ref=demos-win-2021" target="_blank" id="btn-bar">View Offers</a><a id="close-bar">×</a></div></div>
`;

export default class Barner extends HTMLElement { // (1)

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
  