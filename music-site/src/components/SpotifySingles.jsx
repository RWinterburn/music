import React from "react";
import "./SpotifySingles.css"; // Import the CSS

const singles = [
  {
    title: "Single 1",
    cover: "/single1-cover.jpg", // Update path
    spotifyUrl: "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp",
  },
  {
    title: "Single 2",
    cover: "/single2-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3",
  },
  {
    title: "Single 1",
    cover: "/single1-cover.jpg", // Update path
    spotifyUrl: "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp",
  },
  {
    title: "Single 2",
    cover: "/single2-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3",
  },
  {
    title: "Single 1",
    cover: "/single1-cover.jpg", // Update path
    spotifyUrl: "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp",
  },
  {
    title: "Single 2",
    cover: "/single2-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3",
  },
];

function SpotifySingles() {
  return (
    <div className="spotify-singles-container">
      {singles.map((single, index) => (
        <div key={index} className="cd-tile">
          <img src={single.cover} alt={single.title} />
          <h3>{single.title}</h3>
          <iframe
            src={single.spotifyUrl}
            allow="encrypted-media"
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default SpotifySingles;

