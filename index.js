document.addEventListener("DOMContentLoaded", async () => {
  //   const appBridge = new StoryblokBridge({
  //     accessToken: "m5HATAyyFBzgZQgnBr6lgQtt",
  //   });
  //   if (appBridge.isInEditor()) {
  //     window.parent.postMessage({
  //         action: 'get-context',
  //         tool: 'test_plugin_4',
  //         event: 'getContext'
  //       }, "*")
  //     console.log(window);
  //     window.bridge = appBridge;
  //     const inputlist = document.querySelectorAll("input");
  //     console.log({
  //       inputlist,
  //     });
  //     appBridge.on("change", (event) => {
  //       console.log("实时监听到用户操作:", event);
  //     });
  //   }
  //   const appBridge = new window.Storyblok.bridge();
});
import { StoryblokClient } from "@storyblok/js";

const storyblok = new StoryblokClient({
  accessToken: "m5HATAyyFBzgZQgnBr6lgQtt", // 替换为你的 Storyblok 访问令牌
});
window.storyblok.init(); // 初始化 Storyblok 插件

// 监听 Storyblok 输入事件
window.storyblok.on("input", (eventData) => {
  console.log("输入事件触发", eventData);

  // 假设我们想根据输入数据实时更新某些逻辑
  const content = eventData.story.content;
  console.log("当前内容：", content);

  // 例如，你可以使用 Storyblok API 获取额外数据
  storyblok.get("cdn/stories/your-story-slug").then((response) => {
    console.log("从 Storyblok 获取到的响应：", response);
  });
});

// 如果需要实时发送数据到 Storyblok Editor
function updateEditorField(fieldKey, value) {
  window.storyblok.updateField({
    [fieldKey]: value,
  });
}
