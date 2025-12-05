import type { PageContent } from "../types/home"
import homeImage from "../assets/home_image.png"
import loginImage from "../assets/login_image.png"

export const pageContent: Record<string, PageContent> = {
    "/": {
      image: homeImage,
      description:
        "Faça seu login para salvar vídeos, ter acesso a playlists e histórico, ou acesse como visitante.",
      actionPrimary: "Entrar ou Cadastrar",
      actionSecondary: "Acessar como Visitante",
    },

    "/home": {
      image: homeImage,
      description:
        "Faça seu login para salvar vídeos, ter acesso a playlists e histórico, ou acesse como visitante.",
      actionPrimary: "Entrar ou Cadastrar",
      actionSecondary: "Acessar como Visitante",
    },

    "/login": {
      image: loginImage,
      description:
        "Digite seu Nome de Usuário e Senha",
      actionPrimary: "Nome de Usuário",
      actionSecondary: "Senha",
    },

    "/signUp": {
      image: loginImage,
      description:
        "Preencha os campos abaixo",
      actionPrimary: "Nome de Usuário",
      actionSecondary: "Senha",
    },
  };