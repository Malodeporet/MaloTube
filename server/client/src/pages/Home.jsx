import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { axiosInstance } from "../config";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axiosInstance.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {Array.isArray(videos)
        ? videos.map((video) => <Card key={video?._id} video={video} />)
        : null}
    </Container>
  );
};

export default Home;
