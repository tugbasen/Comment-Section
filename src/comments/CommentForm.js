import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  initialName = "",
}) => {
  const [text, setText] = useState(initialText);
  const [name, setName] = useState(initialName);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(name, text);
    setText("");
    setName("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="please enter name"
      />
      <textarea
        className="comment-form-textarea-comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="please enter comment"
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
