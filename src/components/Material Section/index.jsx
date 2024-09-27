export default function Material(props) {
  const { tigaSection, arrow } = props;
  const filterMaterials = tigaSection.filter(
    (item) => item.divisi === "Materials"
  );
  return (
    <section className="py-16">
      {filterMaterials.map((item) => (
        <div
          key={item.divisi}
          className="container flex flex-col max-w-md gap-10 mx-auto md:justify-center lg:gap-20 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl md:flex-row-reverse"
        >
          <div className="grid w-full grid-cols-2 gap-2 overflow-hidden rounded-xl">
            <div className="overflow-hidden rounded-tl-lg">
              <img
                className="object-cover transition-all duration-700 ease-out hover:scale-110"
                src={item.gambar1}
                alt={item.alt1}
              />
            </div>
            <div className="h-full row-span-2 overflow-hidden rounded-r-lg">
              <img
                className="object-cover h-full transition-all duration-700 ease-out hover:scale-110"
                src={item.gambar2}
                alt={item.alt2}
              />
            </div>
            <div className="overflow-hidden rounded-bl-lg">
              <img
                className="object-cover transition-all duration-700 ease-out hover:scale-110"
                src={item.gambar3}
                alt={item.alt3}
              />
            </div>
          </div>

          <div className="flex flex-col max-w-md gap-3 mx-auto md:max-w-lg md:mx-0">
            <h4 className="text-sm text-center text-orange-400 uppercase md:text-left md:tracking-wider lg:tracking-widest">
              {item.divisi}
            </h4>
            <h2 className="w-4/5 mx-auto text-2xl font-bold text-center md:w-11/12 lg:w-4/5 md:mx-0 md:text-left lg:text-3xl xl:text-4xl xl:w-3/4 lg:leading-snug xl:leading-snug">
              {item.judul}
            </h2>
            <p className="text-sm leading-loose lg:text-base text-slate-600 lg:w-4/5 xl:w-4/5 lg:leading-loose">
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
