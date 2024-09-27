export default function Vetta(props) {
  const { advantage, arrow } = props;
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center gap-12 mx-auto lg:flex-row">
        <div className="lg:w-[30%]">
          <h2 className="text-2xl font-bold lg:text-3xl">Why Choosing Us</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantage.map((item) => (
            <div
              key={item.judul}
              className="flex flex-col items-center gap-2 text-center"
            >
              <h4 className="text-lg font-semibold">{item.judul}</h4>
              <p className="w-11/12 mx-auto text-sm leading-relaxed md:w-4/5 lg:leading-loose text-slate-600">
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
          ))}
        </div>
      </div>
    </section>
  );
}
