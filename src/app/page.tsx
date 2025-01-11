"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Definindo o tipo do estado selectedUnit como "arez" | "goianinha" | null
  const [selectedUnit, setSelectedUnit] = useState<"arez" | "goianinha" | null>(null);

  // Dados das unidades
  const units = {
    arez: { name: "Unidade Arez-RN", number: "84986665567" },
    goianinha: { name: "Unidade Goianinha-RN", number: "849991855545" },
  };

  // Função para aplicar a máscara ao número de celular
  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/^(\d{2})(9?)(\d{4})(\d{4})$/, "$1 $3-$4");
  };

  // Função para formatar o número para o link do WhatsApp
  const formatWhatsAppNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/^(\d{2})9(\d{8})$/, "$1$2");
  };

  if (selectedUnit) {
    const unit = units[selectedUnit];
    const formattedNumber = formatPhoneNumber(unit.number);
    const whatsappNumber = formatWhatsAppNumber(unit.number);

    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 items-center sm:items-center w-full">
          <Image
            className="mx-auto max-w-[80%] sm:max-w-[200px]"
            src="/logo.png"
            alt="Núcleo aquarela logo"
            width={200}
            height={124}
            priority
          />

          <p className="text-center text-lg sm:text-xl">Entre em contato:</p>

          <div className="flex flex-col items-center gap-4 w-full max-w-[400px] px-4">
            <a
              className="w-full flex items-center justify-center rounded-full bg-green-100 border-2 border-green-200 text-green-800 hover:bg-green-200 py-3 text-sm sm:text-base font-medium shadow-md"
              href={`https://wa.me/55${whatsappNumber}?text=Ol%C3%A1,%20gostaria%20de%20marcar%20uma%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.371 0 0 5.371 0 12c0 2.096.537 4.078 1.537 5.824L0 24l6.293-1.513C8.022 23.436 9.993 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm.006 21.672c-1.802 0-3.578-.507-5.122-1.471l-.367-.228-3.737.896.866-3.641-.239-.375A9.713 9.713 0 0 1 2.28 12.006c0-5.38 4.376-9.754 9.754-9.754 5.38 0 9.754 4.374 9.754 9.754 0 5.379-4.374 9.754-9.754 9.754zm4.327-6.926c-.239-.12-1.424-.703-1.645-.782-.221-.075-.384-.113-.539.118-.157.235-.619.782-.758.943-.139.161-.278.172-.518.057-.239-.118-1.009-.37-1.92-1.177-.709-.634-1.188-1.42-1.33-1.658-.14-.237-.015-.365.105-.484.109-.108.239-.281.357-.422.122-.143.157-.239.239-.398.081-.161.041-.301-.021-.42-.065-.118-.57-1.375-.78-1.875-.204-.494-.412-.426-.539-.426-.139-.006-.3-.007-.46-.007a.891.891 0 0 0-.646.301c-.223.258-.855.839-.855 2.042 0 1.204.876 2.367.996 2.529.12.161 1.723 2.629 4.177 3.692.582.25 1.037.398 1.391.515.582.185 1.112.159 1.533.097.469-.07 1.423-.583 1.623-1.146.2-.563.2-1.044.14-1.146-.061-.102-.221-.165-.46-.282z" />
              </svg>
              CHAME NO WHATSAPP
            </a>

            <button
              className="w-full flex items-center justify-center rounded-full bg-blue-100 border-2 border-blue-200 text-blue-800 hover:bg-blue-200 py-3 text-sm sm:text-base font-medium shadow-md"
              onClick={() => window.open(`tel:+55${unit.number}`)}
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 14.38c-.82 0-1.63-.13-2.39-.37-.37-.12-.8-.03-1.08.2l-2.54 1.91c-3.11-1.65-5.68-4.23-7.33-7.33l1.91-2.54c.23-.3.32-.71.2-1.08-.24-.77-.36-1.58-.36-2.39 0-.59-.48-1.07-1.07-1.07H4.07C3.48 1.93 1.93 3.48 1.93 4.07 1.93 14.4 9.6 22.07 20 22.07c.59 0 2.14-1.55 2.14-2.14v-2.86c0-.59-.48-1.07-1.07-1.07z" />
              </svg>
              Ligue: {formattedNumber}
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-center w-full">
        <Image
          className="mx-auto max-w-[80%] sm:max-w-[200px]"
          src="/logo.png"
          alt="Núcleo aquarela logo"
          width={200}
          height={124}
          priority
        />

        <p className="text-center text-lg sm:text-xl">Agende sua consulta:</p>

        <div className="flex flex-col items-center gap-4 w-full max-w-[400px] px-4">
          <button
            className="w-full rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 sm:h-14 px-6"
            onClick={() => setSelectedUnit("arez")}
          >
            Unidade Arez-RN
          </button>
          <button
            className="w-full rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 sm:h-14 px-6"
            onClick={() => setSelectedUnit("goianinha")}
          >
            Unidade Goianinha-RN
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
