// ==UserScript==
// @id             vagrant-box-download-helper@everyx
// @name           Vagrant Box Download Helper
// @version        1.0
// @namespace      http://userscript.everyx.in/vagrant-box-download-helper
// @author         everyx
// @description    Add a download button in atlas.hashicorp.com.
// @include        https://atlas.hashicorp.com/*
// @run-at         document-end
// ==/UserScript==

main();

function main() {

  var elementList = document.querySelectorAll(".set-item");

  for (var i = 0; i < elementList.length; i++) {
    addDownloadButton(elementList[i]);
  }
}

function addDownloadButton(element) {
  var rows = element.querySelectorAll('.status');
  var versionHref = element.querySelector('.row a:last-child').href;

  for (var i = 0; i < rows.length; i++) {
    var currentRow = rows[i];
    var downloadBtn = document.createElement('a');
    downloadBtn.className ='button right icon ion-arrow-down-a';
    downloadBtn.title = 'download';
    downloadBtn.style = 'font-weight: bold; color:#2F88F7;';

    var provider = currentRow.querySelector('.subtitle').innerHTML.trim().replace(/\s+/g, '').replace(/<.*$/g, '');
    downloadBtn.href = versionHref + '/providers/' + provider + '.box';
    currentRow.appendChild(downloadBtn);
  }
}
