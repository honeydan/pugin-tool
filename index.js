document.addEventListener("DOMContentLoaded", () => {
    const appBridge = new StoryblokBridge({
        accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
    });
    
//   const appBridge = new window.Storyblok.bridge();
console.log(window)
window.bridge = window.appBridge;
  const btn1 = document.getElementById("btn1");

  appBridge.on('input', (event) => {
    console.log("实时监听到用户操作:", event);
  });
});
