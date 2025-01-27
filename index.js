document.addEventListener("DOMContentLoaded", () => {
    const appBridge = new StoryblokBridge({
        accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
    });
    
//   const appBridge = new window.Storyblok.bridge();
console.log({
    appBridge
})
  const btn1 = document.getElementById("btn1");

  btn1.addEventListener("click", () => {
    appBridge
      .getCurrentStory()
      .then((story) => {
        console.log("当前正在编辑的 story:", story);
      })
      .catch((error) => {
        console.error("获取 story 失败:", error);
      });
  });

  appBridge.on(["input", "change"], (event) => {
    console.log("实时监听到用户操作:", event);
  });
});
