import { Confetti } from "@/components/confetti";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Success() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-screen-md mx-auto px-4">
      <Confetti />
      <h1 className="text-2xl md:text-5xl font-bold text-center leading-tight md:leading-tight">
        Parabéns, seu empréstimo foi confirmado com sucesso! 🎉
      </h1>
      <p className="text-base md:text-xl text-center mt-6">
        Agora é só acessar seu aplicativo imaginário e sacar sua grana. 🫡
      </p>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-6 md:mt-8">
        <Button
          className="w-full md:w-fit gap-2 bg-app-orange-500 hover:bg-app-orange-500 hover:brightness-95 text-app-gray-800 font-bold"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="size-4" />
            Quero fazer outro
          </Link>
        </Button>

        <Button
          className="w-full md:w-fit gap-2 bg-app-green-500 hover:bg-app-green-500 hover:brightness-95 font-bold"
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
