import { v4 as uuidv4 } from 'uuid';

export const ProjectsProgram =[
    {
        id: uuidv4(),
        portfolio: 'work1',
        name: "Project Ignite 4 Shop",
        category: "web",
        link: "https://github.com/loupprodi/project-ignite04-shop",
        techs: ["Javascript", "Typescript", "React", "API Rest"],
        description: "Este projeto foi desenvolvido com finalidade didaticas criando um pequeno shopping em NextJs consumindo a plataforma stripe de pagamentos, foi abordado a respeito da arquitetura cliente-side usando conceitos de ssg(Static Site Generation) e ssr(Server Side Rendering) dentro do framework"
      },
      {
        id: uuidv4(),
        portfolio: 'https://project-ignite03-dtmoney.vercel.app/',
        name: "Project Ignite 3 DtMoney",
        category: "web",
        link: "https://github.com/loupprodi/project-ignite03-dtmoney",
        techs: ["Javascript", "Typescript", "React"],
        description: "Este projeto foi desenvolvido com finalidade didaticas criando um sistema que contabiliza pequenas transações adicionando a uma tabela, esse projeto possuí uma arquitetura simples, foi adicionado react-hook-form para a criação do formulario, resolvers para validação."
      },
      {
        id: uuidv4(),
        portfolio: 'https://projeto-ignite02-timer.vercel.app/',
        name: "Project Ignite 2 timer",
        category: "web",
        link: "https://github.com/loupprodi/projeto-ignite02-timer",
        techs: ["Javascript", "Typescript", "React"],
        description: "Este projeto foi desenvolvido com finalidade didaticas criando um timer para tarefas e salvando históricos, esse projeto possuí uma arquitetura simples, foi adicionado react-hook-form para a criação do formulario junto com o zod"
      },
      {
        id: uuidv4(),
        portfolio: 'https://project-ignite01-ts.vercel.app/',
        name: "Project Ignite 1",
        category: "web",
        link: "https://github.com/loupprodi/project-ignite01-ts",
        techs: ["Javascript", "Typescript", "React"],
        description: "Este projeto foi desenvolvido com finalidade de estudo criando um plataforma de devs, podendo criar uma publicação e comentários."
      },
     
]