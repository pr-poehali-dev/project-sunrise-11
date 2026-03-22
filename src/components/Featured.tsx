import { useState } from "react";

const poets = [
  {
    name: "Александр Пушкин",
    years: "1799 — 1837",
    image: "https://cdn.poehali.dev/projects/3228eb66-3342-4a8b-bf49-e120a864aa4c/files/d0fee781-97e5-489d-92e4-4d4129f0a50f.jpg",
    tag: "Романтизм",
    poem: {
      title: "Я вас любил",
      lines: [
        "Я вас любил: любовь ещё, быть может,",
        "В душе моей угасла не совсем;",
        "Но пусть она вас больше не тревожит;",
        "Я не хочу печалить вас ничем.",
      ],
    },
    description: "Величайший русский поэт, основоположник современного русского литературного языка.",
  },
  {
    name: "Сергей Есенин",
    years: "1895 — 1925",
    image: "https://cdn.poehali.dev/projects/3228eb66-3342-4a8b-bf49-e120a864aa4c/files/48f28f02-14d5-4729-8d6f-083d26d783d5.jpg",
    tag: "Лирика",
    poem: {
      title: "Клён ты мой опавший",
      lines: [
        "Клён ты мой опавший, клён заледенелый,",
        "Что стоишь нагнувшись под метелью белой?",
        "Или что увидел? Или что услышал?",
        "Словно за деревню погулять ты вышел.",
      ],
    },
    description: "Певец русской деревни, природы и народной души. Один из самых любимых поэтов России.",
  },
  {
    name: "Анна Ахматова",
    years: "1889 — 1966",
    image: "https://cdn.poehali.dev/projects/3228eb66-3342-4a8b-bf49-e120a864aa4c/files/f2ff103d-0a9a-4eec-8b76-278d49aaf530.jpg",
    tag: "Акмеизм",
    poem: {
      title: "Мужество",
      lines: [
        "Мы знаем, что ныне лежит на весах",
        "И что совершается ныне.",
        "Час мужества пробил на наших часах,",
        "И мужество нас не покинет.",
      ],
    },
    description: "Голос эпохи, свидетель трагедий XX века. Её стихи — это боль, любовь и несломленный дух.",
  },
];

export default function Featured() {
  const [active, setActive] = useState(0);
  const poet = poets[active];

  return (
    <div id="poets" className="bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch min-h-screen">
        <div className="flex-1 relative overflow-hidden lg:max-w-[50%]">
          <img
            key={poet.image}
            src={poet.image}
            alt={poet.name}
            className="w-full h-[60vh] lg:h-full object-cover object-top transition-opacity duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <span className="text-xs uppercase tracking-widest text-neutral-300">{poet.tag}</span>
            <h2 className="text-3xl lg:text-4xl text-white font-bold mt-1">{poet.name}</h2>
            <p className="text-neutral-400 text-sm mt-1">{poet.years}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between px-8 py-12 lg:px-16 lg:py-16">
          <div>
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Галерея поэтов</h3>
            <div className="flex gap-4 mb-10">
              {poets.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-sm uppercase tracking-wide transition-all duration-300 pb-1 border-b-2 ${
                    i === active
                      ? "border-black text-black"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {p.name.split(" ")[1]}
                </button>
              ))}
            </div>

            <p className="text-neutral-600 text-base lg:text-lg leading-relaxed mb-10">
              {poet.description}
            </p>

            <div className="border-l-4 border-black pl-6 mb-10">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">{poet.poem.title}</p>
              {poet.poem.lines.map((line, i) => (
                <p key={i} className="text-neutral-800 text-base lg:text-lg italic leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {poets.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-black scale-125" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
