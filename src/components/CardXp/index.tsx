import {CardContainer, CardFooter, CardIcons, CardLink} from './styles'

import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'


interface CardXpProps {
    year: string,
    position: string,
    company: string,
    description: string
    tech?: string[]
}

export const CardXp = ({year, company, description, position, tech}:CardXpProps) =>{
    return(
        <CardContainer>
        <h3>Empresa: {company}</h3>
        <h2>Ano: {year} | Cargo: {position} </h2>
        <p>{description}</p>
        <CardFooter>
            <CardIcons>
               <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
            </CardIcons>
        </CardFooter>
    </CardContainer>
    )
}