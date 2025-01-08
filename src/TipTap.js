import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from './Highlight.js';
import TextAlign from '@tiptap/extension-text-align';

const extensions = [
  StarterKit,
  Highlight,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
];

const content = '<p>Hello World!</p>';

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor} className="toolbar">
        <button className="toolbar-button" onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().toggleStrike().run()}>
          Strike
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().setTextAlign('left').run()}>
          Left
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().setTextAlign('center').run()}>
          Center
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().setTextAlign('right').run()}>
          Right
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
          Justify
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().toggleHighlight().run()}>
          Highlight
        </button>
        <button className="toolbar-button" onClick={() => editor.chain().focus().unsetHighlight().run()}>
          Unhighlight
        </button>
      </FloatingMenu>
    </div>
  );
};

export default Tiptap;