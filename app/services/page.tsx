import Link from "next/link";

const services = [
  {
    title: "Внос на автомобили и техника по заявка",
    subtitle: "Намираме точния автомобил според бюджет и изисквания",
    bullets: [
      "Съдействие при избор според желания и бюджет.",
      "Проверка на историята на автомобила.",
      "Лицензиран и бърз транспорт до адреса ви до 5 календарни дни.",
      "Доставка на машини и техника по задание с минимален депозит.",
    ],
  },
  {
    title: "Регистрация в КАТ",
    subtitle: "Без опашки и загуба на време",
    bullets: [
      "Организираме всички документи.",
      "Наш представител регистрира автомобила вместо вас.",
      "Спестявате време и административни ангажименти.",
    ],
  },
  {
    title: "Застраховки",
    subtitle: "Преференциални цени чрез наш брокер",
    bullets: [
      "Гражданска Отговорност.",
      "Авто КАСКО.",
      "Съдействие при избор на най-подходяща оферта.",
    ],
  },
  {
    title: "Транспорт",
    subtitle: "България и Европа • лицензиран превоз",
    bullets: [
      "Транспорт до всяка точка на България.",
      "Транспорт в рамките на Европа.",
      "Бърз и лицензиран транспорт.",
    ],
  },
  {
    title: "Лизинг",
    subtitle: "Индивидуален план според вашия месечен бюджет",
    bullets: [
      "Изготвяме решение според бюджета ви.",
      "Условия според желанията ви за първоначална вноска.",
      "Подходящо за леки и товарни автомобили.",
    ],
    cta: { href: "/leasing", label: "Виж повече за лизинг" },
    badge: "Преференциални условия",
  },
  {
    title: "Продажба на автомобил на консигнация",
    subtitle: "Продаваме от ваше име от нашия шоурум",
    bullets: [
      "Приемаме автомобила за продажба в шоурума.",
      "Стремим се към най-изгодната цена в кратки срокове.",
      "Спазваме вашите изисквания как да се продава колата.",
      "Оценка и цена на пазарен принцип за успешна реализация.",
    ],
  },
];

function Icon({
  name,
}: {
  name: "import" | "kat" | "insurance" | "transport" | "leasing" | "consign";
}) {
  const common = "h-5 w-5";
  switch (name) {
    case "import":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7h18M6 7l1 14h10l1-14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "kat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "insurance":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5 11 14l3.5-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "transport":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 9h2.5L22 12v4h-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "leasing":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h16M6 7v14h12V7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8 11h8M8 15h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "consign":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 7h10l2 3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l2-3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

const iconByTitle: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  "Внос на автомобили и техника по заявка": "import",
  "Регистрация в КАТ": "kat",
  "Застраховки": "insurance",
  "Транспорт": "transport",
  "Лизинг": "leasing",
  "Продажба на автомобил на консигнация": "consign",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Услуги
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
                HIMERA HOUSE предлага цялостно съдействие при{" "}
                <span className="font-semibold text-gray-900">
                  внос, покупка, регистрация, застраховане, транспорт и финансиране
                </span>{" "}
                на автомобили и техника.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Запитване
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Разгледай автомобили
                </Link>
              </div>
            </div>

            {/* Quick stats */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700">
              <div className="space-y-1">
                <p>
                  <span className="font-semibold text-gray-900">Транспорт:</span>{" "}
                  България и Европа
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Срок за доставка:</span>{" "}
                  до 5 дни*
                </p>
                <p className="text-xs text-gray-500">
                  * при налични условия и маршрут
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-gray-900">
                      <Icon name={iconByTitle[s.title]} />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">{s.subtitle}</p>
                    </div>
                  </div>

                  {"badge" in s && s.badge ? (
                    <span className="shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                      {s.badge}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {s.cta ? (
                  <div className="mt-6">
                    <Link
                      href={s.cta.href}
                      className="inline-flex text-sm font-medium text-gray-900 underline underline-offset-4"
                    >
                      {s.cta.label}
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-900 p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Имате въпрос или конкретно запитване?
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-white/80">
                  Свържете се с нас и ще ви съдействаме възможно най-бързо.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Контакти
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Налични автомобили
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            * До 5 календарни дни при налични условия (маршрут, наличност, документи).
          </p>
        </div>
      </section>
    </main>
  );
}
