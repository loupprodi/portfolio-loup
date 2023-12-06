import {CardContainer, CardFooter, CardIcons, CardUl} from './styles'
// import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'

interface CardJobProps {
    year: string,
    position: string,
    company: string,
    description: string,
    tech?: Array<string> | undefined,
}

export const CardJob = ({year, company, description, position, tech}:CardJobProps) =>{
    return(
        <CardContainer>
        <h3>Empresa: {company}</h3>
        <h2>Ano: {year} | Cargo: {position} </h2>
        <p>{description}</p>
        <CardFooter 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        >
            <CardIcons>
                <CardUl>
                {tech?.map((tech, index)=>{
                    return(
                        <li key={index}>{tech}</li>
                    )
                })}
                </CardUl>
            </CardIcons>
        </CardFooter>
    </CardContainer>
    )
}