import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Словарь для перевода slug в читаемый заголовок
const SERVICES_MAP: Record<string, string> = {
  allergology: "Аллергология",
  ultrasound: "УЗИ",
  ecg: "ЭКГ",
  dentistry: "Стоматология",
  grooming: "Груминг",
  hospital: "Стационар",
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // В Next.js 15 params нужно await'ить
  const { slug } = await params;
  const title = SERVICES_MAP[slug] || "Услуга";

  return (
    <main className="min-h-screen bg-[#F5F7F2] flex flex-col items-center justify-center p-6">
      <div className="bg-white p-12 rounded-3xl shadow-sm max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4 font-manrope">
          {title}
        </h1>
        <p className="text-[#5A5A5A] mb-8">
          Это страница услуги «{title}». Здесь будет подробное описание, цены и
          форма записи.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#75C043] hover:bg-[#65a83a] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
