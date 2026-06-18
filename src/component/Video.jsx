import video from "../assets/Kobe Bryant_ Don’t Change Your Dreams _ Birthplace of Dreams _ Nike.mp4";

const Video = () => {
  return (
    <>
      <div className="video">
        <video width="100%" autoPlay muted loop playsInline height="30%">
          <source src={video} type="video/mp4" />
        </video>
        <section className="video-text">
          <span>SAME WORKHORSE. NEW WINGS.</span>

          <p class="small-text">
            Get inside the mind—and under the feet—of Ethan Strand and Pegasus
            42.
          </p>
          <div className="button">
            <button className="btn">
              <span>Shop</span>
            </button>

            <button className="btn">
              <span>Watch⮞ </span>
            </button>
          </div>
        </section>
      </div>

      <div className="Featured">
        <span>Featured</span>
      </div>
    </>
  );
};

export default Video;
