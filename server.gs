var profs = JSON.parse( UrlFetchApp.fetch( 'https://raw.githubusercontent.com/Jhyrachy/Modulo-Upload-Sbobine/master/listaprof6oanno.json' ).getContentText() );

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function uploadFiles(form) {
  const rootFolder = "0B1pErR_Eg7cXWUYtOVlRN0tvZFk";

  var basefolder = DriveApp.getFolderById(rootFolder);
  var materiafolder = basefolder.getFoldersByName( form.materia );
  var subfolder = materiafolder.hasNext() ? materiafolder.next() : basefolder.createFolder(form.materia);
  // var subfolder = materiafolder.hasNext() ? materiafolder.next() : basefolder.createFolder(form.materia);

  var blob = form.myFile;
  
 
  
  var file = subfolder.createFile(blob);    
  file.setName(form.anno + '.' + form.mese + '.' + form.giorno + ' - ' + form.prof + ' - ' + form.descrizione);
  file.setDescription(form.noteextra);

   return '<center><body>File caricato correttamente!<br><br><a href="' + file.getUrl() + '" target="_blank">Premi qui per vedere il tuo file</a></body> ';
}
