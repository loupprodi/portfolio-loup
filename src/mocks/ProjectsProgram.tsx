import { v4 as uuidv4 } from 'uuid';

export const ProjectsProgram =[
    {
        id: uuidv4(),
        img: 'work1',
        name: "Project Ignite Shop",
        category: "web",
        link: "https://github.com/loupprodi/project-ignite04-shop",
        techs: ["Javascript", "Typescript", "React", "API Rest"],
        desc: "Este projeto foi desenvolvido com finalidade didaticas criando um pequeno shopping em NextJs consumindo a plataforma stripe de pagamentos, foi abordado a respeito da arquitetura cliente-side usando conceitos de ssg(Static Site Generation) e ssr(Server Side Rendering) dentro do framework"
      },
]