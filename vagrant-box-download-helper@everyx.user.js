// ==UserScript==
// @name         Vagrant Box Download Helper
// @namespace    http://userscript.everyx.in
// @version      2.0
// @description  Add a download button in app.vagrantup.com.
// @author       everyx
// @match        https://app.vagrantup.com/*/boxes/*
// @grant        none
// @downloadURL  https://github.com/everyx/vagrant-box-download-helper-everyx.user.js/raw/master/vagrant-box-download-helper@everyx.user.js
// @updateURL    https://github.com/everyx/vagrant-box-download-helper-everyx.user.js/raw/master/vagrant-box-download-helper@everyx.user.js
// @run-at       document-end
// ==/UserScript==

(function () {
    var versionList = document.querySelectorAll(".page-header h3 a");
    var panelList = document.querySelectorAll(".panel");

    for (var i = 0; i < versionList.length; i++) {
        var providerElements = panelList[i].querySelectorAll('.list-group-item');

        for (var j = 0; j < providerElements.length; j++) {
            var element = providerElements[j]

            var downloadButton = document.createElement('a');
            downloadButton.className = 'pull-right glyphicon glyphicon-download';
            downloadButton.title = 'download';

            var ignoreText = element.querySelector('small').innerText;
            var provider = element.innerText.replace(ignoreText, '').trim();
            downloadButton.href = versionList[i].href + '/providers/' + provider + '.box';


            element.querySelector('h4').appendChild(downloadButton);

        }
    }
})();
