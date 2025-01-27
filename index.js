document.addEventListener("DOMContentLoaded", () => {
    const { window } = new StoryblokBridge({
        accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
    });
    
//   const appBridge = new window.Storyblok.bridge();
console.log(window)
window.bridge = window.StoryblokBridge;
  const btn1 = document.getElementById("btn1");

  window.StoryblokBridge.on('input', (event) => {
    console.log("实时监听到用户操作:", event);
  });
});
