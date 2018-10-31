/**
 * Created by zenghongtu on 31/10/2018.
 * Desc: row
 */

export default {
  name: 'TuRow',

  componentName: 'TuRow',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    device: String,
    gapless: Boolean,
    multiline: Boolean,
    gap: [String, Object],
    centered: Boolean,
  },

  render(h) {
    const gapList = [];
    if (typeof this.gap === 'string') {
      gapList.push(`is-${this.gap}`);
    } else if (typeof this.gap === 'object') {
      Object.keys(this.gap)
        .forEach((device) => {
          gapList.push(`is-${this.gap[device]}-${device}`);
        });
    }
    return h(this.tag, {
      class: [
        'columns',
        this.device ? `is-${this.device}` : '',
        {
          'is-gapless': this.gapless,
          'is-multiline': this.multiline,
          'is-centered': this.centered,
        },
        gapList,
      ],
    }, this.$slots.default);
  },
};
