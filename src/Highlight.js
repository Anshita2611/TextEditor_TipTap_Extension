import { Mark } from '@tiptap/core'

const Highlight = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      multicolor: true, // Optional: Support multiple colors
      defaultColor: '#F0BB78',
    }
  },

  addAttributes() {
    return {
      color: {
        default: this.options.defaultColor,
        parseHTML: (element) => element.getAttribute('data-highlight'),
        renderHTML: (attributes) => {
          if (!attributes.color) {
            return {}
          }
          return {
            'data-highlight': attributes.color,
            style: `background-color: ${attributes.color};`,
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-highlight]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0]
  },

  addCommands() {
    return {
      toggleHighlight:
        (color) =>
        ({ commands }) => {
          return commands.toggleMark(this.name, { color })
        },
      unsetHighlight:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name)
        },
    }
  },
})

export default Highlight
