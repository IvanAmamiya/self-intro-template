# self-intro-template

二次元扩列自介条生成器（React + TypeScript + Vite）。

## 当前进度
- 已完成项目骨架初始化
- 已完成输入表单、实时预览、模板切换
- 已完成本地草稿自动保存（localStorage）
- 已完成一键导出 PNG（html-to-image）
- 已增加基础字段校验与错误提示
- 已增加联系方式脱敏开关
- 已增加手动“保存草稿”按钮
- 已接入 i18n（中/英/日）
- 已支持本地头像上传
- 已支持多主题与多布局扩展
- 已实现依赖注入（DI）注册表架构

## 扩展机制（DI + 注册表）
- 模板注册：`TemplateRegistry`
- 主题注册：`ThemeRegistry`
- 容器入口：`createAppContainer()`
- 外部扩展入口：`src/extensions/registerExternalExtensions.ts`

后续 PR 只需注册新模板/新主题，无需改动核心渲染流程。

扩展开发请参考：`CONTRIBUTING-EXTENSIONS.md`

## 隐私与数据声明（重要）
- 本项目为**纯前端应用**，默认**没有后端服务**。
- 项目**不接入数据库**，不会把你的输入上传到服务器。
- 项目**不收集个人信息**，无埋点统计、无用户画像。
- 仅在浏览器本地使用 `localStorage` 保存草稿，数据只保存在你自己的设备中。
- 你可随时通过“重置默认值”或清理浏览器站点数据删除本地草稿。

## 本地运行
1. 安装 Node.js 18+（需包含 npm）
2. 安装依赖：
   - `npm install`
3. 启动开发：
   - `npm run dev`
4. 构建验证：
   - `npm run build`

## 说明
当前项目已完成本地构建验证，可直接继续开发与扩展。
