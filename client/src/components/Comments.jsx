import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";
import { fetchCommentSuccess } from "../redux/commentSlice";
import SelectInput from "@mui/material/Select/SelectInput";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Boutton = styled.button`
  width: 200px;
  border-radius: 20%;
  padding: 10px;
  cursor: pointer;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const textRef = useRef();

  const [comments, setComments] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
        dispatch(fetchCommentSuccess(res.data));
      } catch (err) {}
    };
    fetchComments();
  }, [videoId, dispatch]);

  const addComment = async (e) => {
    e.preventDefault();
    const newComment = textRef.current.value;
    console.log("ok");
    try {
      await axios.post("/comments", {
        desc: newComment,
        userId: currentUser._id,
        videoId: currentVideo._id,
      });
      textRef.current.value = "";
      setInput("");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  console.log(input);
  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} alt="avatar img" />
        <Input
          placeholder="Add a comment..."
          ref={textRef}
          onChange={(e) => setInput(e.target.value)}
        />
        {input.length > 0 ? (
          <Boutton
            onClick={addComment}
            type="submit"
            style={{ backgroundColor: "#6DBCFF", color: "black" }}
          >
            Add a comment
          </Boutton>
        ) : (
          <Boutton
            onClick={addComment}
            type="submit"
            style={{ backgroundColor: "#303030", color: "#717171" }}
          >
            Add a comment
          </Boutton>
        )}
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment?._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
