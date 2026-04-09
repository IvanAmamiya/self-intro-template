# 扩展贡献指南（模板 / 主题）

本项目使用 DI + 注册表架构。新增样式与布局时，请以“新增注册项”为主，避免修改核心流程。

## 1. 目标与约束

- 目标：新增模板/主题时，不改动 `FormPanel` 与 `PreviewCanvas` 的选择逻辑。
- 约束：
  - 不在页面组件中写模板/主题硬编码 `if/switch` 分支。
  - 保持隐私边界：纯前端、无数据库、不新增用户追踪。

---

## 2. 新增模板（Template）

### 2.1 新建模板组件

在 `src/components/templates/` 下新增组件，例如：

- `MyTemplate.tsx`

组件签名需兼容：

- `ComponentType<{ data: ProfileData }>`

### 2.2 增加 i18n 文案 key

在 `src/i18n/messages.ts` 中：

1. 在 `MessageKey` 联合类型加入新 key（如 `templateMyTemplate`）。
2. 在 `zhCN` / `enUS` / `jaJP` 三个字典都补齐文案。

### 2.3 注册模板

优先在外部扩展入口注册：

- `src/extensions/registerExternalExtensions.ts`

示例：

- `templateRegistry.register({ id, labelKey, component })`

> 若是内置模板，可放到 `src/extensions/builtins.ts`。推荐一般 PR 先走外部扩展入口，降低核心冲突。

---

## 3. 新增主题（Theme）

### 3.1 增加主题样式

在 `src/styles.css` 添加主题 class，例如：

- `.theme-my-theme { ... }`

### 3.2 增加 i18n 文案 key

在 `src/i18n/messages.ts`：

1. 在 `MessageKey` 加入新 key（如 `themeMyTheme`）。
2. 三语文案补齐。

### 3.3 注册主题

在 `src/extensions/registerExternalExtensions.ts` 或 `src/extensions/builtins.ts` 注册：

- `themeRegistry.register({ id, labelKey, previewClassName })`

---

## 4. PR 最小检查清单

提交前请确认：

- [ ] `npm run build` 通过。
- [ ] 新模板可在模板下拉中显示并可预览。
- [ ] 新主题可在主题下拉中显示并可预览。
- [ ] 三语文案完整（`zh-CN` / `en-US` / `ja-JP`）。
- [ ] 未修改核心选择逻辑（无硬编码分支）。
- [ ] 未引入后端或数据采集行为。

---

## 5. 推荐提交信息格式

- `feat(template): add my-template card`
- `feat(theme): add my-theme style`
- `docs: update extension contribution guide`

---

## 6. 参考文件

- `src/extensions/contracts.ts`
- `src/extensions/builtins.ts`
- `src/extensions/registerExternalExtensions.ts`
- `src/di/appDependencies.ts`
- `src/i18n/messages.ts`
- `src/styles.css`
