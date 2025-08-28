'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('[v0] Audio play error:', error);
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const handleFirstClick = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.muted = false;
        audio.play();
        setIsPlaying(true);
      }
      window.removeEventListener('click', handleFirstClick);
    };

    window.addEventListener('click', handleFirstClick);
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div
      className="fixed top-4 left-4 z-50 flex items-center space-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Audio element - replace src with your music file */}
      <audio ref={audioRef} loop preload="metadata">
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        <source src="/music/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Button */}
      <Button
        onClick={togglePlay}
        variant="outline"
        size="sm"
        className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
      >
        <Music
          className={`h-4 w-4 ${
            isPlaying ? 'text-primary animate-pulse' : 'text-muted-foreground'
          }`}
        />
      </Button>

      {/* Volume Control - appears on hover */}
      <div
        className={`flex items-center space-x-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}
      >
        <Button
          onClick={toggleMute}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Volume2 className="h-4 w-4 text-primary" />
          )}
        </Button>

        {/* Volume Slider */}
        <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-md px-3 py-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider w-20 h-2 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
