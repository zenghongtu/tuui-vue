<tu-alert  color="light" :showIcon="true" title="hello world" description="descriptiondescription">
</tu-alert>


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| description | 辅助性文字。也可通过默认 slot 传入 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| color | 颜色 | string | white / light / dark / black / text / primary / link / info / success / warning / danger |     -     |

### Slot

| Name | Description |
|------|--------|
| title | 标题的内容 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |
