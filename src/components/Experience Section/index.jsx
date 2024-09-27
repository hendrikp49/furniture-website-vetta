export default function Experience(props) {
  const { tigaSection, arrow } = props;
  const filterExperience = tigaSection.filter(
    (item) => item.divisi === "Experiences"
  );
  return (
    <section className="py-16">
      {filterExperience.map((item) => (
        <div
          key={item.divisi}
          className="container flex flex-col max-w-md gap-10 mx-auto md:justify-center lg:gap-20 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl md:flex-row"
        >
          <div className="overflow-hidden border shadow-md rounded-br-xl rounded-tl-xl">
            <img
              className="object-cover mx-auto transition-all duration-500 ease-out md:w-auto hover:scale-110"
              src={item.gambar}
              alt={item.alt}
            />
          </div>

          <div className="flex flex-col max-w-md gap-3 mx-auto md:max-w-full md:mx-0">
            <h4 className="text-sm text-center text-orange-400 uppercase md:text-left md:tracking-wider lg:tracking-widest">
              {item.divisi}
            </h4>
            <h2 className="w-4/5 mx-auto text-2xl font-bold text-center md:mx-0 md:text-left lg:text-3xl xl:text-4xl lg:w-3/5 xl:w-3/5 lg:leading-snug xl:leading-snug">
              {item.judul}
            </h2>
            <p className="text-sm leading-loose lg:text-base text-slate-600 lg:w-3/4 lg:leading-loose">
              {item.keterangan}
            </p>
            <a
              href="#"
              className="text-sm text-orange-400 hover:text-orange-600 w-fit"
            >
              More Info
              {arrow}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
