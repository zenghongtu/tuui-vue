## Button

<tu-button>hello world</tu-button>

:::demo
```html
<tu-button>hello world</tu-button>
```
:::


### 基础用法

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

基础的按钮用法。

<tu-button icon="fas fa-underline" color="white" :round="true"  size="small"></tu-button>

<tu-button-group :addon="true">
    <tu-button icon="fas fa-underline" color="white" size="small">hello</tu-button>
    <tu-button icon="fas fa-underline" color="dark" size="small">hello</tu-button>
    <tu-button icon="fas fa-underline" color="light" size="small">hello</tu-button>
</tu-button-group>

<tu-button-list :addon="true" align="right">
    <tu-button icon="fas fa-underline" color="white" size="small" :selected="true">hello</tu-button>
    <tu-button icon="fas fa-underline" color="dark" size="small">hello</tu-button>
</tu-button-list>

:::demo
```html
<tu-button icon="fas fa-underline" color="white" :round="true"  size="small"></tu-button>

<tu-button-group :addon="true">
    <tu-button icon="fas fa-underline" color="white" size="small">hello</tu-button>
    <tu-button icon="fas fa-underline" color="dark" size="small">hello</tu-button>
    <tu-button icon="fas fa-underline" color="light" size="small">hello</tu-button>
</tu-button-group>

<tu-button-list :addon="true" align="right">
    <tu-button icon="fas fa-underline" color="white" size="small" :selected="true">hello</tu-button>
    <tu-button icon="fas fa-underline" color="dark" size="small">hello</tu-button>
</tu-button-list>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color | 颜色 | string | white / light / dark / black / text / primary / link / info / success / warning / danger |     -     |
| size  | 尺寸 | string | small / medium / large |    -     |
| fullwidth | 流体按钮(最大化适应) | boolean | - | false |
| plain | 是否朴素按钮   | boolean |-| false |
| invert | 是否反向文字与边框颜色 | boolean | - | false |
| round | 是否圆角按钮   | boolean |-| false |
| state | 状态 | string | hover / focus / active / static / loading | - |
| disabled | 是否禁用状态 | boolean |-| false |
| icon | 图标类名 | string  | - | - |
| autofocus | 是否默认聚焦 | boolean |-| false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
| addon | 是否扩展(group/list) | boolean |-| false |
| align | 对齐方式(list) |  string | centered / right | - |
| selected | 是否选中 | boolean |-| false |

