// Function funcionalidad Modal
(function begin() {
  $('.modal').modal();
})();

// Function Time
const timeDate = () => {
  let data = new Date();
  let time = data.getHours() + ':' + data.getMinutes();
  let timeAbsolute = '';

  if (data.getHours() <= 12) {
    timeAbsolute = time + ' AM';
  } else {
    timeAbsolute = time + ' PM';
  }
  return timeAbsolute;
};

// Modal post
$('#post-modal').on('click', () => {
  $('#post-modal').addClass('waves-effect waves-light modal-trigger');

  const modalPostContent = `<div class="row">
        <div class="col offset-l4 post-header">
            <input type="text" name="" value="" placeholder="Title" class="title post-header" autofocus>
        </div>
        <textarea name="text" id="texto" class="text-area-height" placeholder="¿Qué estas pensando?" type="text"></textarea>
        <hr></div>`;

  const modalPostFooter = `<a id="btn-post" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat teal darken-1 white-text">
        <i class="material-icons right">send</i>Public</a>`;

  $('.modal-content').html(modalPostContent);
  $('.modal-footer').html(modalPostFooter);

  $('#btn-post').on('click', post);
});

// Post de texto
function post() {
  const postEstructure = `<div class="styleBox z-depth-5 col l5">
    <div class="title"><h5 class="center-align">${$('.post-header input').val()}</h5></div>
    <div class="styleLetter"><p class="styleLetterP">${$('#texto').val()}</p></div>
    <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
    </div>`;
  $('#post').prepend(postEstructure);
  $('.post-header input').val(' ');
  $('#texto').val(' ');
}

$('#btn-post').on('click', post);

// Post de Image
function image() {
  let imagen = $('#img-guardar');

  const imgEstructure = `<div class="styleBox z-depth-5 col l5">
    <img src="${imagen[0].src}" class="co l12"></img>
    <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
    </div>`;
  $('#post').prepend(imgEstructure);
}

function previewImage() {
  let file = (this.files[0].name).toString();
  let reader = new FileReader();

  reader.onload = function(e) {
    $('#modal1 img').attr('src', e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
};

// Modal image
$('#img-modal').on('click', function() {
  $('#img-modal').addClass('waves-effect waves-light modal-trigger');
  $('.modal').addClass('modal-photo');
  const modalImgContent = `<div class="center">
                                <h6>Elige la imagen que deseas publicar</h6>
                            </div>
                            <form action="#">
                                <div class="file-field input-field">
                                    <div class="btn light-green accent-3">
                                        <i class="material-icons">linked_camera</i>
                                        <input id="file-select" type="file" multiple>
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" placeholder="Change your photo">
                                    </div>
                                </div>
                            </form>
                            <figure class="center">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2VlZSI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijg1LjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L3N2Zz4="
                                    alt="Previsualizacion Imagen" id="img-guardar" class="responsive-img post-img">
                            </figure>`;

  const modalImgFooter = `<a id="btn-img" class="modal-action modal-close waves-effect waves-green btn-flat green white-text">
    <i class="material-icons right">send</i>Public</a>`;

  $('.modal-content').html(modalImgContent);
  $('.modal-footer').html(modalImgFooter);

  // subir Image 
  $('input[type=file]').change(previewImage);
  $('#btn-img').on('click', image);
});
// 
function date() {
  function success(position) {
    let pos = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    };
        
    const dateEstructure = `<div class="styleBox z-depth-5 col l5">
        <div class="title"><h5 class="center-align">${$('#modal1 .post-header').val()}</h5></div>
        <div class="styleLetter">
        <p class="styleLetterP">${'Date of event: ' + $('input.datepicker').val()}</p>
        <p class="styleLetterP">${'Hour: ' + $('input.timepicker').val()}</p>
        </div>
        <div><img class="col l12" src="${'http://maps.googleapis.com/maps/api/staticmap?center=' + pos.lat + ',' + pos.long + '&zoom=13&size=300x300&sensor=false'}"></div>
        <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
        </div>`;
    $('#post').prepend(dateEstructure);
    $('#modal3 .post-header').val(' ');
    $('input.datepicker').val(' ');
    $('input.timepicker').val(' ');
  };
    
  function error() {
    alert('Tenemos un problema con la ubicación');
  };

  navigator.geolocation.getCurrentPosition(success, error);    
}

// Modal-Estructurando content del modal
$('#date-modal').on('click', function() {
  $('#date-modal').addClass('waves-effect waves-light modal-trigger');
  $('.modal').addClass('height');

  const modalDateContent = `<div class="row">
                                    <div class="col offset-l4">
                                            <input type="text" name="" value="" placeholder="Title of event" class="title post-header" autofocus>
                                        </div>
                                <div class="col l10 offset-l2">
                                    <div class="col l5">
                                        <label for="input_text">Date</label>
                                        <input type="text" class="datepicker">
                                    </div>
                                    <div class="col l5">
                                            <label for="input_text">Hours</label>
                                        <input type="text" class="timepicker">
                                    </div>
                                </div>
                            </div>`;
  const modalDateFooter = `<a id="btn-date" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat teal darken-1 white-text">
    <i class="material-icons right">send</i>Public</a>`;

  $('.modal-content').html(modalDateContent);
  $('.modal-footer').html(modalDateFooter);
  $('.datepicker').pickadate({
    // Dropdown 
    selectMonths: true, 
    selectYears: 15, 
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false 
  });

  $('.timepicker').pickatime({
    default: 'now',
    fromnow: 0, 
    // Formato 24 horas
    twelvehour: false, 
    donetext: 'OK', 
    cleartext: 'Clear', 
    canceltext: 'Cancel', 
    autoclose: false, 
    ampmclickable: true, 
    aftershow: function() { } 
  });
  $('#btn-date').on('click', date);
});

function clearInput() {
  localStorage.url = '';
  $('.file-path').val('');
  localStorage.type = '';
}

function playAudioAndVideo(file, type) {
  url = URL.createObjectURL(file);
  localStorage.url = url;
  localStorage.type = type;
}

function format() {
  let fileMA = this.files[0];
  let type;
  
  if (fileMA.type.match('audio.*')) {
    type = 'audio';
    playAudioAndVideo(fileMA, type);
  } else if (fileMA.type.match('video.*')) {
    type = 'video';
    playAudioAndVideo(fileMA, type);
  } else {
    alert('Solo se permite formatos de audio y video');
  }
};

// Post de Video
function videoAudio() {
  let urlAV = localStorage.url;
  let typeFile = localStorage.type;
  let contAudVi;
  if (urlAV) {
    if (typeFile === 'video') {
      contAudVi = ` <div class="styleBox col l5 center-align z-depth-5">
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
            <video class="responsive-video" src="${url}" controls></video>
            </div>
            <div class="card-content">
              <p class="title"></p>
            </div>
          </div>
        </div>
      </div>`;
    }
    if (typeFile === 'audio') {
      contAudVi = ` <div class="styleBox col l5 center-align z-depth-5">
        <div class="col s12 m12">
          <div class="card">
          <div class="card-content">
              <p class="title"></p>
            </div>
            <div class="card-image">
            <audio src="${url}" controls></audio>
            </div>
            
          </div>
        </div>
      </div>`;
    }
    $('#post').prepend(contAudVi);
  }
  clearInput();
};

// Modal video
$('#video-modal').on('click', function() {
  $('#video-modal').addClass('waves-effect waves-light modal-trigger');

  const videoContent = `<div class="center">
                                    <h6>Elige el video que deseas publicar</h6>
                                </div>
                                <form action="#">
                                    <div class="file-field input-field">
                                        <div class="btn light-green accent-3">
                                            <i class="material-icons">linked_camera</i>
                                            <input id="file-select-video" type="file" multiple>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" placeholder="Change your video">
                                        </div>
                                    </div>
                                </form>`;

  const videoModal = `<a id="btn-video" class="modal-action modal-close waves-effect waves-green btn-flat green white-text">
    <i class="material-icons right">send</i>Public</a>`;

  $('.modal-content').html(videoContent);
  $('.modal-footer').html(videoModal );
  $('#file-select-video').change(format);
  $('#btn-video').on('click', videoAudio);
});
