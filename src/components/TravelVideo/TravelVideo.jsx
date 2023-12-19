import React, { useEffect, useRef } from 'react';
import { Video, VideoContainer } from '../../ui/TravelVideo/TravelVideo.styled';
import video from '../../assets/video/1.mp4';

const TravelVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const video = videoRef.current;
      if (!video) return;

      const entry = entries[0];
      if (entry.isIntersecting && video.paused) {
        video.play().catch((e) => console.error('Error playing video:', e));
      } else if (!entry.isIntersecting && !video.paused) {
        video.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(videoRef.current);

    return () => {
      if (observer && videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <VideoContainer>
      <Video ref={videoRef} muted loop preload="none" autoPlay playsInline >
        <source src={video} type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default TravelVideo;
