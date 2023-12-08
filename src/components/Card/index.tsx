import {CardContainer, CardFooter, CardIcons, CardLink} from './styles'

import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'

interface CardProps {
    name?: string
    category?:string
    link?:string
    description?: string
    tech?: Array<string>
}

export const Card = ({name, category, description,link,tech}:CardProps) =>{
    return(
        <CardContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <CardFooter>
            <CardIcons>
               <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
            </CardIcons>
            <CardLink href='#'target='blank' rel="noopenner norefferer">
                <BsArrowRight />
            </CardLink>
        </CardFooter>
    </CardContainer>
    )
}