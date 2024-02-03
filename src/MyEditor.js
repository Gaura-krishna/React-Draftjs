import React, { useState } from "react";
import { Editor, EditorState, ContentState, SelectionState, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const selectText = (start, end) => {
    const contentState = editorState.getCurrentContent().getPlainText();
    const blockMap = contentState.getBlockMap().getPlainText();

    console.log("contentstate",contentState)
    console.log("blockMap",blockMap)

    // blockMap.forEach((block) => {
    //   const text = block.getText();
    //   const blockKey = block.getKey();

    //   if (text.startsWith(start) && text.endsWith(end)) {
    //     const startSelection = SelectionState.createEmpty(blockKey).merge({
    //       anchorOffset: 0,
    //       focusOffset: start.length,
    //     });

    //     const endSelection = SelectionState.createEmpty(blockKey).merge({
    //       anchorOffset: text.length - end.length,
    //       focusOffset: text.length,
    //     });

    //     const newSelection = SelectionState.createEmpty(blockKey).merge({
    //       anchorOffset: start.length,
    //       focusOffset: text.length - end.length,
    //     });

    //     // Apply the new selection
    //     const newContentState = Modifier.setInlineStyleRange(
    //       contentState,
    //       startSelection,
    //       "BOLD"
    //     );

    //     const finalContentState = Modifier.setInlineStyleRange(
    //       newContentState,
    //       endSelection,
    //       "BOLD"
    //     );

    //     const finalEditorState = EditorState.set(editorState, {
    //       currentContent: finalContentState,
    //       selection: newSelection,
    //     });

    //     setEditorState(finalEditorState);
    //   }
    // });
  };

  return (
    <div className="text-area">
      <Editor editorState={editorState} onChange={handleEditorChange} />
      <button onClick={() => selectText("h", "w")}>Select Text</button>
    </div>
  );
};

export default MyEditor;
