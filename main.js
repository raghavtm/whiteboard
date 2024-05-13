import "./style.css";

import { createFastboard, mount } from "@netless/fastboard";

let app;
async function mountFastboard(div) {
  app = await createFastboard({
    sdkConfig: {
      appIdentifier: "n9q1oBxDEeyuBMn1qc0iFw/fLgNSEvdwKjlil",
      region: "cn-hz",
    },
    joinRoom: {
      uid: Math.random().toString(36).slice(2),
      uuid: "684338a0ffed11eba057c9eab85067b6",
      roomToken:
        "NETLESSROOM_YWs9VWtNUk92M1JIN2I2Z284dCZub25jZT0xNjI5MjY4MDY5MDY3MDAmcm9sZT0wJnNpZz1jMTg1YjQ2ZGM0ZjNjZTVlMWQxMjk5Yzg4NWUzOWY0NmE4N2EzZGZlNTMxMjkwZDA0MmUyMTY1ZmQxYmE4NzFjJnV1aWQ9Njg0MzM4YTBmZmVkMTFlYmEwNTdjOWVhYjg1MDY3YjY",
    },
    managerConfig: {
      cursor: true,
    },
  });
  window.app = app;
  
  return mount(app, div);
}

mountFastboard(document.getElementById("app"));