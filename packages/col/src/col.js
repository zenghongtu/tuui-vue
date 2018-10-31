/**
 * Created by zenghongtu on 31/10/2018.
 * Desc: col
 */

export default {
  name: 'TuCol',

  componentName: 'TuCol',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    size: String,
    span: [Number, String],
    offset: String,
    narrow: [Boolean, String],
    mobile: [String, Object],
    tablet: [String, Object],
    desktop: [String, Object],
    widescreen: [String, Object],
    fullhd: [String, Object],
  },

  render(h) {
    const classList = [];

    ['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd'].forEach((size) => {
      if (typeof this[size] === 'string') {
        classList.push(`is-${this[size]}-${size}`);
      } else if (typeof this[size] === 'object') {
        const props = this[size];
        Object.keys(props)
          .forEach((prop) => {
            classList.push(prop === 'span' ? `is-${this[prop]}`
              : `is-${this[prop]}-${prop}`);
          });
      }
    });
    let narrow = this.narrow || '';
    if (typeof narrow === 'boolean') {
      narrow = narrow ? 'is-narrow' : '';
    } else if (narrow !== '') {
      narrow = `is-narrow-${narrow}`;
    }

    return h(this.tag, {
      class: [
        'column',
        this.size ? `is-${this.size}` : '',
        this.span ? `is-${this.span}` : '',
        this.offset ? `is-offset-${this.offset}` : '',
        narrow,
        classList,
      ],
    }, this.$slots.default);
  },
};
