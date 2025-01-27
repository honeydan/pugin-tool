document.addEventListener("DOMContentLoaded", async () => {
    const { apiPlugin, storyblokInit, useStoryblokBridge} = window.storyblok;
    const { storyblokApi } = storyblokInit({
        accessToken: 'm5HATAyyFBzgZQgnBr6lgQtt',
        use: [apiPlugin],
      });
      const { data } = await storyblokApi.get('cdn/stories', { version: 'draft' });
      const story = data ? data.story : null;
      useStoryblokBridge(story.id, story => {
        console.log({story})
        return state.story = story
      });

      const sbBridge = new window.StoryblokBridge(options);

      sbBridge.on(['input', 'published', 'change'], (event) => {
        // ...
        console.log({event})
      });
  
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
