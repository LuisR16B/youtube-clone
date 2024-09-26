const videosRecomendados = document.getElementById('videosRecomendados');
const shortsRecomendados = document.getElementById('shortsRecomendados');

class tarjetaVideos{
  constructor(linkvideo, portadaVideo, imgperfilcanal, tituloVideo, urlCanal, nombreCanal, vistasVideo, tiempoPublicadoVideo, duracionVideo){
      this.linkvideo = linkvideo;
      this.portadaVideo = portadaVideo;
      this.imgperfilcanal = imgperfilcanal;
      this.tituloVideo = tituloVideo;
      this.urlCanal = urlCanal;
      this.nombreCanal = nombreCanal;
      this.vistasVideo = vistasVideo;
      this.tiempoPublicadoVideo = tiempoPublicadoVideo;
      this.duracionVideo = duracionVideo;
  }
}

let generarTarjetasV;
let tarjetasVerVideos = [
  new tarjetaVideos('https://www.youtube.com/watch?v=iipGCW4wYMo', 'https://i.ytimg.com/vi/iipGCW4wYMo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA-rSlGQEYQSK4e1Nd1kN7-pEdxqQ', 'https://yt3.ggpht.com/pk-jnYnbdNBUKEtBdc3buYbCM0Xu0_TDcVfYON1qAez3CVPbA-FWGyCbF4BaRF1T9MqxjG-mugk=s88-c-k-c0x00ffffff-no-rj', 'EL RETO DE MRBEAST #2 | AURONPLAY', 'https://www.youtube.com/@IbaiLlanos', 'Ibai', '3.8 M', '2 dias', '51:15'),
  new tarjetaVideos('https://www.youtube.com/watch?v=v3rejG5tKXQ', 'https://i.ytimg.com/vi/v3rejG5tKXQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDCLxS3XE3X7UdZoHX0gy2WTCA4mA', 'https://yt3.googleusercontent.com/rVYnYxq5DsXQMK4awK0b3vr8z1lAqjb-MMMcXTpJ3XQe6X0kPezhH5CypC6toFeFaSiapFcn=s160-c-k-c0x00ffffff-no-rj', 'DORMI UNA NOCHE EN UN CASTILLO EMBRUJADO', 'https://www.youtube.com/@fedevigevani', 'Fede Vigevani', '8.3 M', '7 meses', '32:47'),
  new tarjetaVideos('https://www.youtube.com/watch?v=4aipVesnVSM', 'https://i.ytimg.com/vi/4aipVesnVSM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC6SSdmfKzRmgKgT1DDjtN7BIH6uA', 'https://yt3.ggpht.com/ytc/AIdro_nyXrAAt-FJ5azOAUoNd5Iw0aGQb-_b-SLSOkW0B_N2md4=s88-c-k-c0x00ffffff-no-rj', 'Llegué a REPÚBLICA DOMINICANA y pasó de todo | ¡Terminé arrestado! 🚔', 'https://www.youtube.com/@luisitocomunica', 'Luisito Comunica', '3.3 M', '1 día', '22:03'),
  new tarjetaVideos('https://www.youtube.com/watch?v=1ZV9Aznqci8&t=7s', 'https://i.ytimg.com/vi/1ZV9Aznqci8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC2AnXyoK9tRryZNPqnT_Bty4i0RQ', 'https://yt3.ggpht.com/Op6szz6XZc-CnIOo8yObg_XNOTOoZU9UtCbObJYhbnfd1mX4X2dS14KN1YybvpDIE9zWNjZNsg=s88-c-k-c0x00ffffff-no-rj', 'COREANA EN PREPA MEXICANA!! ES TAN DIFERENTE?! Chingu Amiga', 'https://www.youtube.com/@ChinguAmiga', 'Chingu amiga', '8.6 M', '2 meses', '34:32'),
  new tarjetaVideos('https://www.youtube.com/watch?v=ndAQfTzlVjc&t=8s', 'https://i.ytimg.com/vi/ndAQfTzlVjc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCLDiH8ncrCmzBvARd3ogRl6bPjNg', 'https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj', 'Sobreviví 7 Días En Una Cueva', 'https://www.youtube.com/@MrBeast', 'MrBeast', '116 M', '1 mes', '17:59'),
  new tarjetaVideos('https://www.youtube.com/watch?v=25N0R1KnXVs', 'https://i.ytimg.com/vi/25N0R1KnXVs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAOAKE2YFkIJMyJ9VCxi85ZEzRNkQ', 'https://yt3.ggpht.com/ytc/AIdro_kwFxfJF-fQml8fUIvrd36ZstE2RO-C-IwDB-0qxQoc3Q=s88-c-k-c0x00ffffff-no-rj', 'Lava vs Láser - ¿Cuál es más destructivo?', 'https://www.youtube.com/@MarkRober', 'Mark Rober', '27 M', '3 meses', '25:08')
];

class tarjetaShorts{
  constructor(linkvideo, portadaVideo, tituloVideo, vistasVideo){
      this.linkvideo = linkvideo;
      this.portadaVideo = portadaVideo;
      this.tituloVideo = tituloVideo;
      this.vistasVideo = vistasVideo;
  }
}

let generarTarjetasS;
let tarjetasVerShorts = [
  new tarjetaShorts('https://www.youtube.com/shorts/fvOOVj_dyNE', 'https://i.ytimg.com/vi/fvOOVj_dyNE/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBTiL8N5HmttCD0mdee1kuYP4P96w', '#fedevigevani #ianlucas #domelipa #teodm Video completo en canal de #dome 😍 #domelipa #shorts', '679 k'),
  new tarjetaShorts('https://www.youtube.com/shorts/ifsxDg7Vdoc', 'https://i.ytimg.com/vi/ifsxDg7Vdoc/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCqJF9hvYgHFXtcTRGWkL8Qzud1qw', 'En mi defensa no sabía que @ChinguAmiga  tenía el pelo azul.', '2.5 M'),
  new tarjetaShorts('https://www.youtube.com/shorts/Jo7sfpeWqwE', 'https://i.ytimg.com/vi/Jo7sfpeWqwE/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDpjkEDzYWCvlOiYgL8CCP1ygVEWw', '¿Un Bote De Guitarras Soportará Mi Peso?', '226 M'),
  new tarjetaShorts('https://www.youtube.com/shorts/5JUlNlGqnlw', 'https://i.ytimg.com/vi/5JUlNlGqnlw/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBkWNxhum99a_mV9MBdWiioqbfkiA', 'La piscina de gelatina más grande del mundo', '174 M'),
  new tarjetaShorts('https://www.youtube.com/shorts/MsnnN6z6ygc', 'https://i.ytimg.com/vi/MsnnN6z6ygc/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCrTmHw2C9cdV14tm4eU85NGn8jtA', 'MRBEAST ME HA RETADO', '228 k')
];

function iniciar() {
  generarTarjetasVideos();
  generarTarjetasShorts();
}

function generarTarjetasVideos() {
  tarjetasVerVideos.forEach((informacion) => {
    generarTarjetasV = `
      <div>
        <a href="${informacion.linkvideo}">
          <div class="miniaturavideo">
            <img class="borderRadius" src="${informacion.portadaVideo}" alt="video de yt" width="100%">
            <span>${informacion.duracionVideo}</span>
          </div>
        </a>
        <div class="informacionVideo">
          <div class="informacionVideo">
            <div>
              <img src="${informacion.imgperfilcanal}" alt="foto de perfil" class="img-suscripciones" width="34px">
            </div>
            <div>
              <h3>${informacion.tituloVideo}</h3>
              <div>
                <a href="${informacion.urlCanal}">${informacion.nombreCanal}</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
              <div>
                <span>${informacion.vistasVideo} vistas</span>
                <span>• hace ${informacion.tiempoPublicadoVideo}</span>
              </div>
            </div>
          </div>
          <div>
            <button style="background-color: transparent; border: transparent;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      `
    videosRecomendados.innerHTML += generarTarjetasV;
  });
}

function generarTarjetasShorts(){
  tarjetasVerShorts.forEach((informacion) => {
    generarTarjetasS = `
      <div>
        <div>
          <a href="${informacion.linkvideo}">
            <img class="borderRadius" src="${informacion.portadaVideo}" alt="portada shorts" width="100%">
          </a>
        </div>
        <div>
          <h3>${informacion.tituloVideo}</h3>
          <span>${informacion.vistasVideo} vistas</span>
        </div>
      </div>
    `
    shortsRecomendados.innerHTML += generarTarjetasS;
  });
}

window.addEventListener('load', iniciar);