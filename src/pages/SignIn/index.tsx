import imagemLogin from "../../assets/login_image.png"
import { MdEmail } from "react-icons/md"
import { HiUser } from "react-icons/hi2"
import { GiLovers } from "react-icons/gi"

export function SignIn() {
  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <section className="w-[160px] h-[225px]">
        <img
          src={imagemLogin}
          alt="imagem de login"
          className="w-full rounded-lg"
        />
      </section>

      <section className="w-full flex flex-col gap-15 mt-10">
        <div>
          <h2 className="text-5xl font-semibold">Boas Vindas!</h2>
          <p className="text-2xl mt-2">Faça login para salvar
            videos, ter acesso a playlists, e historico, ou acesse como visitante.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <button className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-6 rounded-xl">
            <MdEmail className="text-[#B0E2FF] text-3xl" />
            <span className="text-2xl">Entrar ou cadastrar</span>
          </button>

          <button className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-6 rounded-xl">
            <HiUser className="text-[#B0E2FF] text-3xl" />
            <span className="text-2xl">Acessar como visitante</span>
          </button>
        </div>
      </section>

      <section className="w-full flex gap-2 justify-center items-center fixed bottom-5">
        <GiLovers className="text-[#B0E2FF] text-3xl" />
        <span className="bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent">Boy Love Br</span>
      </section>
    </div>
  )
}