document.addEventListener("DOMContentLoaded", () => {
    const appBridge = new StoryblokBridge({
        accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
    });
    
//   const appBridge = new window.Storyblok.bridge();
console.log({
    appBridge
})
window.bridge = appBridge.window.StoryblokBridge;
  const btn1 = document.getElementById("btn1");

  appBridge.window.StoryblokBridge.on('input', (event) => {
    console.log("实时监听到用户操作:", event);
  });
});
