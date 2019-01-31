
<tu-row  :gapless="false" :multiline="true">
    <tu-col :narrow="true">hello</tu-col>
    <tu-col ><tu-button>hello</tu-button></tu-col>
    <tu-col><tu-button>hello</tu-button></tu-col>
    <tu-col><tu-button>hello</tu-button></tu-col>
    <tu-col><tu-button>hello</tu-button></tu-col>
    <tu-col><tu-button>hello</tu-button></tu-col>
    <tu-col><tu-button>hello</tu-button></tu-col>
    <tu-col><tu-button>hello</tu-button></tu-col>
</tu-row>



### Row Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| device |  | string | - |
| gapless | 间距 | boolean | - |
| multiline | 多行 | boolean | - |
| gap | 间隔 | string/object | - |
| centered | 居中 | boolean | - |

### Col Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size  | 占据的列数比例 | string | three-quarters / two-thirds / half / one-third / one-quarter / full / four-fifths / three-fifths / two-fifths / one-fifth |    -     |
| span  | 栅格占据的列数(总12列) | number | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12   |    -     |
| offset  | 栅格左侧的间隔格数 | string/number | three-quarters / two-thirds / half / one-third / one-quarter / full / four-fifths / three-fifths / two-fifths / one-fifth / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12   |    -     |
| narrow |  是否为窄的/breakpoint | boolean/string | mobile / tablet / touch / desktop / widescreen / fullhd | - |
| mobile | mobile | string/object | - |
| tablet | tablet | string/object | - |
| desktop | desktop | string/object | - |
| widescreen | widescreen | string/object | - |
| fullhd | fullhd | string/object | - |








