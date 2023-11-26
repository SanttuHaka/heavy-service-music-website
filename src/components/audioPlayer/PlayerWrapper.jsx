import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { useState } from "react";

import { Songs } from "@/components/audioPlayer/Songs";

export default function PlayerWrapper() {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const currentSong = Songs[currentSongIndex];
  return (
    <div className="mx-2 flex h-full flex-col rounded-xl bg-black/80 text-slate-300">
      <div className="mt-auto">
        <AudioPlayer
          key={currentSongIndex}
          currentSong={currentSong}
          songCount={Songs.length}
          songIndex={currentSongIndex}
          onNext={() => setCurrentSongIndex((i) => i + 1)}
          onPrev={() => setCurrentSongIndex((i) => i - 1)}
        />
      </div>
      <div className="container mx-auto flex-1 px-6 py-8">
        <ul>
          {Songs.map((song, index) => (
            <li key={song.title} className="mb-1">
              <button
                onClick={() => setCurrentSongIndex(index)}
                className={`space-evenly flex w-full items-center  rounded px-3 py-4 ${
                  currentSongIndex === index
                    ? "bg-gray-600 text-white"
                    : " hover:bg-gray-600 hover:text-white"
                }`}
              >
                <span className="text-sm">
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                </span>
                <h2 className="flex-1">{song.title}</h2>
                <span>
                  {index === currentSongIndex ? (
                    <MdPause size={20} />
                  ) : (
                    <MdPlayArrow size={20} />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-sm text-white">
          These songs are only mixed by me, not recorded
        </p>
      </div>
    </div>
  );
}