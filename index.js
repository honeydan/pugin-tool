document.addEventListener("DOMContentLoaded", () => {
    const appBridge = new window.Storyblok.bridge();

    // 获取按钮
    const btn1 = document.getElementById('btn1');

    // 点击事件：获取当前编辑的 story
    btn1.addEventListener('click', () => {
        appBridge.getCurrentStory().then((story) => {
            console.log("当前正在编辑的 story:", story);
        }).catch((error) => {
            console.error("获取 story 失败:", error);
        });
    });

    // 实时监听编辑器操作
    appBridge.on(["input", "change"], (event) => {
        console.log("实时监听到用户操作:", event);
    });
});