# headless-ui

## Why
如果有人问前端轮子最多的地方在哪块？
“UI 组件”
谁没造过一两个呢。为什么会要造这么多轮子，我想有以下的原因：

* 要适应的框架太多
* 运行目标平台太多
* 外观变数太多
* 功能变数太多

我们先来思考，UI 组件的内在构成：
UI = 结构 + 样式

它的 web 形态是：
UI = HTML + CSS

如果是这样，它还不能动，是静态的情况，我们明明还写了 JavaScript
UI = HTML + CSS + JavaScript

那我们在 JavaScript 里面写了啥呢？
JavaScript = Ajax 请求 + 数据处理 + Dom 操作 + ...
如果是写的这些，那么这个轮子复用度不会太高

JavaScript = 数据处理 + 事件处理 + 状态切换

如果我们的组件只写这些，而不去

* 发送请求获取数据或更新数据
* 监听 DOM 事件
* 触发 DOM 事件
* 和外部交互
* 操作 DOM
* 操作 样式

那么它就可以不考虑太多东西，复用度就会高很多。

但界面总是要见用户的，所以你还是需要使用你喜欢的技术方案来包装它。

数据处理 prop get set converter filter
事件处理 methods
状态切换 event machine




