const translations = {
  zh: {
    skip: "跳转到正文",
    introTitle: "大模型推理与 GPU 系统",
    education: "硕0，PKU 信科本。",
    introText: "我关注大模型推理中的通信、内存和 GPU 执行效率。目前主要在看 MoE 通信与计算重叠、KV cache，以及如何从性能 trace 追到实现中的瓶颈。",
    workTitle: "开源工作",
    merged: "已合并",
    deepDescription: "为 vLLM 的 DeepEP v2 实现异步 finalize，让共享专家计算与 combine 通信重叠，再通过设备端事件汇合。工作聚焦于 MoE decode 路径中的通信等待。",
    authorNote: "PR 发起者，2026 年 9 月 15 日合并",
    detailsSummary: "执行示意与实验观测",
    figureExplanation: "同步路径先完成 combine，再执行共享专家。异步路径把两项工作交给不同的流，在需要结果时汇合。",
    serial: "同步执行",
    overlap: "异步重叠",
    timeStart: "开始",
    timeEnd: "时间",
    communication: "通信",
    computation: "计算",
    overlapResult: "两条流都完成后，再汇合。",
    serialResult: "等待 combine 完成，才开始计算。",
    figureNote: "原理示意，长度不代表实测耗时。",
    tableCaption: "PR 中报告的 decode ITL 中位数",
    concurrency: "并发",
    off: "关闭 overlap",
    on: "开启 overlap",
    change: "变化",
    experimentNote: "配置为 DeepSeek-R1-671B FP8、EP8、GB300，两节点，完整 CUDA graphs。数据是 PR 中记录的部署观测，收益取决于硬件与负载。",
    experimentSource: "查看 PR 中的实验配置与验证范围",
    open: "讨论中",
    rfcTitle: "用 CUDA fabric memory 分配 KV cache",
    rfcDescription: "探索 GB200 / GB300 NVL72 系统中的跨节点 MNNVL KV 传输，讨论缓存分配与节点间访问。这项工作目前还是 RFC。",
    rfcNote: "设计讨论与实现提案",
    allWork: "查看我发起的 vLLM PR",
    projectsTitle: "项目",
    hardwareDescription: "使用 SystemVerilog 探索 FlashAttention 硬件实现的公开项目。我也对 attention 算法如何映射到硬件感兴趣。",
    interestsTitle: "研究兴趣",
    interest1: "MoE 执行。",
    interest1Text: "通信与计算的重叠，以及多 GPU 推理中的同步开销。",
    interest2: "KV cache。",
    interest2Text: "缓存的生命周期、内存布局和跨节点数据搬运。",
    interest3: "GPU 性能分析。",
    interest3Text: "用 profiling 和对照实验，把观测到的差异与代码联系起来。",
    contactTitle: "联系",
    contactText: "欢迎交流推理优化、GPU 系统和开源项目。",
    updated: "更新于 2026 年 10 月"
  },
  en: {
    skip: "Skip to content",
    introTitle: "LLM inference & GPU systems",
    education: "硕0 (pre-master's stage), PKU EECS undergraduate.",
    introText: "I work on communication, memory, and GPU execution in LLM inference. My current interests include overlapping MoE communication with computation, KV cache, and tracing performance bottlenecks back to their implementation.",
    workTitle: "Open-source work",
    merged: "Merged",
    deepDescription: "Implemented async finalize for DeepEP v2 in vLLM. It overlaps shared-expert computation with combine communication, then joins through a device-side event. The work targets communication waits on the MoE decode path.",
    authorNote: "PR author, merged September 15, 2026",
    detailsSummary: "Execution sketch & reported observations",
    figureExplanation: "The synchronous path finishes combine before computing the shared expert. The asynchronous path runs the two operations on different streams and joins when the result is needed.",
    serial: "Synchronous",
    overlap: "Async overlap",
    timeStart: "Start",
    timeEnd: "Time",
    communication: "Comm.",
    computation: "Compute",
    overlapResult: "Join after both streams finish.",
    serialResult: "Compute waits for combine to finish.",
    figureNote: "Conceptual sketch; lengths do not represent measured durations.",
    tableCaption: "Median decode ITL reported in the PR",
    concurrency: "Concurrency",
    off: "Overlap off",
    on: "Overlap on",
    change: "Change",
    experimentNote: "DeepSeek-R1-671B FP8, EP8, GB300, two nodes, full CUDA graphs. These are deployment observations reported in the PR. Benefits depend on hardware and workload.",
    experimentSource: "Read the experiment setup and validation scope",
    open: "Open",
    rfcTitle: "CUDA fabric memory for KV cache",
    rfcDescription: "An RFC exploring cross-node MNNVL KV transfer on GB200 / GB300 NVL72 systems, including cache allocation and access across nodes. This work is still a proposal.",
    rfcNote: "Design discussion and implementation proposal",
    allWork: "View my authored vLLM PRs",
    projectsTitle: "Projects",
    hardwareDescription: "A public SystemVerilog project exploring FlashAttention hardware. I am also interested in how attention algorithms map onto hardware.",
    interestsTitle: "Research interests",
    interest1: "MoE execution.",
    interest1Text: "Overlapping communication with computation and understanding synchronization costs in multi-GPU inference.",
    interest2: "KV cache.",
    interest2Text: "Cache lifecycles, memory layouts, and moving data across nodes.",
    interest3: "GPU profiling.",
    interest3Text: "Connecting measured differences to implementation through profiling and controlled comparisons.",
    contactTitle: "Contact",
    contactText: "Happy to discuss inference optimization, GPU systems, and open-source work.",
    updated: "Updated October 2026"
  }
};

let language = "zh";
let mode = "overlap";
const languageButton = document.getElementById("language");
const timeline = document.getElementById("timeline");
const result = document.getElementById("result");

function renderResult() {
  result.textContent = translations[language][mode === "overlap" ? "overlapResult" : "serialResult"];
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const text = translations[language][element.dataset.i18n];
    if (text !== undefined) element.textContent = text;
  });
  languageButton.textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
  document.getElementById("mode-control").setAttribute("aria-label", language === "zh" ? "执行方式" : "Execution mode");
  document.title = language === "zh" ? "Mario — 大模型推理与 GPU 系统" : "Mario — LLM inference & GPU systems";
  const description = language === "zh"
    ? "Mario，硕0，PKU 信科本。关注大模型推理、MoE 通信与计算重叠、KV cache 和 GPU 性能分析。"
    : "Mario, 硕0 (pre-master's stage), PKU EECS undergraduate. LLM inference, MoE overlap, KV cache, and GPU profiling.";
  document.querySelector('meta[name="description"]').content = description;
  renderResult();
  try { localStorage.setItem("mario-language", language); } catch { /* Optional preference storage. */ }
}

languageButton.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    timeline.dataset.state = mode;
    document.querySelectorAll("[data-mode]").forEach(item => {
      const active = item.dataset.mode === mode;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderResult();
  });
});
try {
  if (localStorage.getItem("mario-language") === "en") setLanguage("en");
} catch { /* Chinese remains readable without storage or JavaScript. */ }
