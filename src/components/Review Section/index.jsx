export default function Review(props) {
  const { tigaSection } = props;
  const filterReview = tigaSection.filter(
    (item) => item.divisi === "Testimonial"
  );
  return (
    <section className="py-16">
      {filterReview.map((item) => (
        <div
          key={item.divisi}
          className="container flex flex-col gap-2 mx-auto place-items-center"
        >
          <h4 className="text-sm text-center text-orange-400 uppercase md:text-left md:tracking-wider lg:tracking-widest">
            {item.divisi}
          </h4>
          <h2 className="w-4/5 mx-auto text-2xl font-bold text-center md:mx-0 lg:text-3xl xl:text-4xl lg:w-3/5 xl:w-3/5 lg:leading-snug xl:leading-snug">
            {item.judul}
          </h2>
          <div className="grid grid-cols-1 gap-3 mt-5 md:gap-10 w-fit lg:w-full lg:gap-0 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {item.reviewer.map((elemen) => (
              <div
                key={elemen.nama}
                className="relative overflow-hidden rounded-lg shadow-md h-96 w-72"
              >
                <img
                  className="object-cover w-full h-full"
                  src={elemen.gambar}
                  alt={elemen.alt}
                />
                <div className="absolute left-0 right-0 flex flex-col items-center w-4/5 p-3 mx-auto rounded-lg bg-white/70 backdrop-blur-sm bottom-2">
                  <h5 className="font-bold text-center">{elemen.nama}</h5>
                  <span className="text-sm font-thin text-center">
                    {elemen.pekerjaan}
                  </span>
                  <p className="mt-4 text-center">{elemen.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
