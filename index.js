document.addEventListener("DOMContentLoaded", () => {
    const appBridge = new StoryblokBridge({
        accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
    });
    
//   const appBridge = new window.Storyblok.bridge();
console.log({
    appBridge
})
  const btn1 = document.getElementById("btn1");

  appBridge.window.StoryblokBridge.on(["input", "change"], (event) => {
    console.log("实时监听到用户操作:", event);
  });
});
