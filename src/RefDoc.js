import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import { useCallback, useState } from "react";

export default function REfDoc() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
    const keyBindingFn = useCallback((event) => {
      if (event.keyCode === 32) {
        // 32 is the key code for space
        return "apply-heading";
      }
      return getDefaultKeyBinding(event);
    }, []);
  
    const handleKeyCommand = useCallback(
      (command) => {
        let newState;
        if (command === "apply-heading") {
          const newState = RichUtils.toggleBlockType(editorState, "header-one");
          if (newState) {
            setEditorState(newState);
            return "handled";
          }
        }
        if (newState) {
          setEditorState(newState);
          return "handled";
        }
        return "not-handled";
      },
      [editorState]
    );
  
    return (
      <div style={{border: "2px solid black"}}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFn}
        />
      </div>
    );
}