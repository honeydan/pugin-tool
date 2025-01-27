document.addEventListener("DOMContentLoaded", () => {
  const appBridge = new StoryblokBridge({
    accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
  });
  if (appBridge.isInEditor()) {
    console.log(window);
    window.bridge = appBridge;
    const inputlist = document.querySelectorAll("input");
    console.log({
      inputlist,
    });
    appBridge.on("change", (event) => {
      console.log("实时监听到用户操作:", event);
    });
  }
  //   const appBridge = new window.Storyblok.bridge();
});
