import { FaHeart } from "react-icons/fa";

const LoveStory = () => {
  const moments = [
    {
      year: "2023",
      title: "Awal Bertemu",
      description:
        "Kami beretemu pada tahun 2023. Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapih oleh Sang Maha Kuasa.",
    },
    {
      year: "2023",
      title: "Menjalin Hubungan",
      description:
        "Seiring berjalannya waktu kami berkomitmen, kisah cinta yang tetap kuat meskipun terpisah jarak.",
    },
    {
      year: "2025",
      title: "Lamaran",
      description:
        "Tepat di tanggal 27 Januari, momen lamaran berlangsung sederhana namun penuh haru, dikelilingi keluarga tercinta.",
    },
  ];

  return (
    <div className="containers" id="lovestory">
      <div className="calon-cardss">
        <div className="love-story-container">
          <h1 className="section-title">Love Story</h1>
          <div className="timeline">
            {moments.map((moment, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-content">
                  <h3 className="moment-title">
                    {moment.year} - {moment.title}
                  </h3>
                  <p className="moment-description">{moment.description}</p>
                </div>
                <div className="timeline-icon">
                  <FaHeart />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
