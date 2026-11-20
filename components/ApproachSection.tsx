import Image from "next/image";

// Интерфейс для будущей интеграции с Headless CMS (Strapi / Sanity / JSON)
export interface ApproachItem {
  number: string;
  title: string;
  description: string;
}

export interface ApproachSectionData {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  leadText: string;
  imageSrc: string;
  imageAlt: string;
  items: ApproachItem[];
}

// Статические данные (готовы к выносу в JSON или получению при билде SSG)
export const APPROACH_DATA: ApproachSectionData = {
  badge: "02 / НАШ ПОДХОД",
  headingLine1: "Сначала — доверие.",
  headingLine2: "Потом — лечение.",
  leadText:
    "Они не могут рассказать, что болит. Поэтому мы внимательно слушаем вас и бережно знакомимся с ними.",
  imageSrc: "/approach-vet.jpg", // Положите фото в папку public/
  imageAlt: "Ветеринарный врач бережно осматривает золотистого ретривера",
  items: [
    {
      number: "01",
      title: "Без лишней тревоги",
      description: "Даём питомцу освоиться. Объясняем каждый шаг.",
    },
    {
      number: "02",
      title: "Понятный план",
      description: "Обсуждаем обследования, лечение и стоимость.",
    },
    {
      number: "03",
      title: "Внимание к деталям",
      description: "Собираем историю, а не только симптомы.",
    },
  ],
};

interface ApproachSectionProps {
  data?: ApproachSectionData;
}

export default function ApproachSection({
  data = APPROACH_DATA,
}: ApproachSectionProps) {
  return (
    <section id="approach" className="w-full bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Левая колонка: Фотография */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-[24px] bg-[#F3F2EE]">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </div>

          {/* Правая колонка: Текст и нумерованный список */}
          <div className="flex flex-col justify-center lg:col-span-6 lg:pl-2">
            {/* Надзаголовок */}
            <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.08em] text-[#8A8E8C]">
              {data.badge}
            </span>

            {/* Главный заголовок */}
            <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1C1E1D] sm:text-[40px] lg:text-[44px]">
              <span className="block">{data.headingLine1}</span>
              <span className="block">{data.headingLine2}</span>
            </h2>

            {/* Лид-абзац */}
            <p className="mt-5 max-w-[430px] text-[15px] leading-[1.6] text-[#6E7371] sm:text-[16px]">
              {data.leadText}
            </p>

            {/* Список преимуществ */}
            <div className="mt-10 space-y-7 sm:mt-12 sm:space-y-8">
              {data.items.map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-7 sm:gap-10"
                >
                  {/* Номер пункта */}
                  <span className="w-6 shrink-0 pt-[3px] text-[12px] font-medium tabular-nums text-[#9BA09E]">
                    {item.number}
                  </span>

                  {/* Заголовок и описание пункта */}
                  <div>
                    <h3 className="text-[16px] font-semibold leading-[1.3] text-[#1C1E1D] sm:text-[17px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.5] text-[#6E7371] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
