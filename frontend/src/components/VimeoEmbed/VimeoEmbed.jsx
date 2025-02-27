import { useState, useEffect } from "react";

const VimeoEmbed = ({ videoUrl }) => {
  const [embedHtml, setEmbedHtml] = useState("");

  useEffect(() => {
    async function fetchOEmbed() {
      const encodedUrl = encodeURIComponent(videoUrl);
      const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=${encodedUrl}&width=640&height=360&autoplay=1&muted=1&playsinline=1`;


      try {
        const response = await fetch(oEmbedUrl);
        const data = await response.json();
        setEmbedHtml(data.html);
      } catch (error) {
        console.error("Error fetching oEmbed data:", error);
      }
    }

    fetchOEmbed();
  }, [videoUrl]);

  return (
    <div
      className="vimeoEmbed"
      style={{ width: "100%", height: "100%" }}
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
};

export default VimeoEmbed;
