import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { axiosInstance } from "../config";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tags = () => {
  const [videos, setVideos] = useState([]);
  const tags = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axiosInstance.get(`/videos/tags/${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Tags;
