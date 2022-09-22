import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Boutton = styled.button`
  background-color: inherit;
  font-weight: 100;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  vertical-align: center;
  cursor: pointer;
  margin-left: 50px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  const deleteComment = async () => {
    await axios.delete(`/comments/${comment._id}`);
    console.log("commentaire effacé");
  };

  return (
    <Container>
      <Avatar src={channel?.img} />
      <Details>
        <Name>
          {channel?.name} <Date>1 day ago</Date>
        </Name>
        <Text>{comment?.desc}</Text>
      </Details>
      {comment?.userId === currentUser?._id ? (
        <Boutton onClick={deleteComment}>
          {" "}
          <DeleteForeverOutlinedIcon />
        </Boutton>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Comment;
