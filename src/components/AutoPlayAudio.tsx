import { useEffect, useRef } from "react";
import BirthdayAudio from "../assets/bg-music.mp3";

const AutoPlayAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, []);;

  return (
    <audio ref={audioRef} src={BirthdayAudio} autoPlay loop />
  );
};

export default AutoPlayAudio;
