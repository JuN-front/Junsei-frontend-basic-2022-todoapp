import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const InputSample = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = props.defaultValue;
      inputRef.current.focus();
      inputRef.current.onblur = (e) => {
        const inputText = inputRef.current.value;
        props.onEditComplete(inputText);
      };
      inputRef.current.onkeypress = (e) => {
        const inputText = inputRef.current.value;
        if (e.key === "Enter") {
          props.onEditComplete(inputText);
        }
      };
    }
  }, []);

  return <StyledInput ref={inputRef} name="input" type="text"></StyledInput>;
};

export default InputSample;

const StyledInput = styled.input`
  font-size: ${TEXT.S};
  line-height: 20px;
  border-radius: 2px;
  padding: 0px 4px;
  border: none;
  outline: none;
  width: 100%;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
`;
