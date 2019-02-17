browser.runtime.onMessage.addListener((message)=>{
  if (message==="kittify") {
    let pics=document.querySelectorAll("img");
    for (let pic of pics) {
      pic.src=browser.runtime.getURL("/cats/kitty"+(Math.floor(Math.random()*9)+1)+".jpg");
    }
  }
});
