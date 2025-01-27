// const StoryblokClient = require("storyblok-js-client");
const appBridge = new window.Storyblok.bridge();
const btn1 = document.getElementById('#btn1');
btn1.addEventListener('click', () => {
    appBridge.getCurrentStory().then((story) => {
        console.log("当前正在编辑的 story:", story);
      });
});

appBridge.on(["input", "change"], (event) => {
  console.log("实时监听到用户操作:", event);
});




