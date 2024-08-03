import { Confetti } from "@/components/confetti";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Success() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-[967px] mx-auto px-4 pt-24">
      <Confetti />
      <h1 className="text-5xl font-bold text-center leading-tight">
        Parabéns, seu empréstimo foi confirmado com sucesso! 🎉
      </h1>
      <p className="text-xl text-center mt-6">
        Agora é só acessar seu aplicativo imaginário e sacar sua grana. 🫡
      </p>

      <div className="flex items-center gap-4">
        <Button
          className="gap-2 bg-app-orange-500 hover:bg-app-orange-500 hover:brightness-95 text-app-gray-800 font-bold mt-8"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="size-4" />
            Quero fazer outro
          </Link>
        </Button>

        <Button
          className="gap-2 bg-app-green-500 hover:bg-app-green-500 hover:brightness-95 font-bold mt-8"
          asChild
        >
          <Link to="/emprestimos">
            Ver todos os empréstimos
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
