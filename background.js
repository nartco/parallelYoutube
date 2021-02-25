let button1 = document.getElementById("activate");
let button2 = document.getElementById("stop");
button1.addEventListener("click", async () => {
  //   chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  //     chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  //       document.addEventListener("pjax:end", () => {
  //         if (info.status != "complete") {
  //           return;
  //         } else {
  //           chrome.tabs.insertCSS(tabId, { file: "./styles.css" });
  //         }
  //       });
  //     });
  //   });
  // try to add extension on new created tab

  chrome.tabs.query({}, tab => {
    console.log(tab);
    for (i = 0; i < tab.length; i = i + 1) {
      console.log(tab[i].url);
      if (tab[i].url.includes("youtube")) {
        chrome.tabs.insertCSS(tab[i].id, { file: "./styles.css" });
      }
    }
  });
});

button2.addEventListener("click", async () => {
  chrome.tabs.query({}, tab => {
    console.log(tab);
    for (i = 0; i < tab.length; i = i + 1) {
      console.log(tab[i].url);
      if (tab[i].url.includes("youtube")) {
        chrome.tabs.removeCSS(tab[i].id, { file: "./styles.css" });
      }
    }
  });
});
