import {CardContainer, CardFooter, CardIcons} from './styles'
import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'

interface CardJobProps {
    year: string,
    position: string,
    company: string,
    description: string,
}

export const CardJob = ({year, company, description, position}:CardJobProps) =>{
    return(
        <CardContainer>
        <h3>Empresa: {company}</h3>
        <h2>Ano: {year} | Cargo: {position} </h2>
        <p>{description}</p>
        <CardFooter 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        >
            {/* <CardSkills>
                {tech}
            </CardSkills> */}
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