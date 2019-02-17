browser.tabs.executeScript({file: "/content_scripts/kittify.js"})
.then(()=>{
  let kittifyButton=document.querySelector(".kittify-button");
  kittifyButton.addEventListener("click",()=>{
    browser.tabs.query({active:true,currentWindow:true})
    .then((tabs)=>{
      browser.tabs.sendMessage(tabs[0].id,"kittify");
    })
  })
});
