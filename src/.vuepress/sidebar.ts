import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "网络技术",
      icon: "network-wired",
      prefix: "notebook/01.网络技术/",
      link: "notebook/01.网络技术/",
      children: "structure",
    },
    {
      text: "系统技术",
      icon: "laptop-code",
      prefix: "notebook/02.系统技术/",
      link: "notebook/02.系统技术/",
      children: "structure",
    },
    {
      text: "应用平台",
      icon: "laptop-code",
      prefix: "notebook/03.应用平台/",
      link: "notebook/03.应用平台/",
      children: "structure",
    },
    {
      text: "实战演练",
      icon: "laptop-code",
      prefix: "notebook/04.实战演练/",
      link: "notebook/04.实战演练/",
      children: "structure",
    },
    {
      text: "包罗万象",
      icon: "earth-americas",
      prefix: "notebook/05.包罗万象/",
      link: "notebook/05.包罗万象/",
      children: "structure",
    },
    {
      text: "神秘大渊",
      icon: "laptop-code",
      prefix: "notebook/06.神秘大渊/",
      link: "notebook/06.神秘大渊/",
      children: "structure",
    },
  ],
});
