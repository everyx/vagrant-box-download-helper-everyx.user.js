// ==UserScript==
// @id             vagrant-box-download-helper@everyx
// @name           Vagrant Box Download Helper
// @version        1.0
// @namespace      http://userscript.everyx.in/vagrant-box-download-helper
// @author         everyx
// @description    Add a download button in atlas.hashicorp.com.
// @include        https://app.vagrantup.com/*/boxes/*
// @run-at         document-end
// ==/UserScript==

main();

function main() {
  var versionList = document.querySelectorAll(".page-header h3 a");
  var panelList = document.querySelectorAll(".panel");

  for (var i = 0; i < versionList.length; i++) {
    addDownloadButton(versionList[i].href, panelList[i]);
  }
}

function addDownloadButton(versionLink, panelElement) {
  var providerElements = panelElement.querySelectorAll('.list-group-item');

  for (var i=0; i<providerElements.length; i++) {
    var element = providerElements[i]
    console.log(element);
    var downloadButton = document.createElement('a');
    downloadButton.className ='pull-right glyphicon glyphicon-download';
    downloadButton.title = 'download';
  
    var ignoreText = element.querySelector('small').innerHTML;
    var provider = element.innerText.replace(ignoreText, '').trim();
    downloadButton.href = versionLink + '/providers/' + provider + '.box';
    console.log(downloadButton.href)
  
    element.querySelector('h4').appendChild(downloadButton);
    
  }
}
