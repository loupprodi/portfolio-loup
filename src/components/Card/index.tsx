import {CardContainer, CardFooter, CardIcons, CardLink} from './styles'

import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'

interface CardProps {
    name?: string
    category?:string
    link?:string
    portfolio?: string
    description?: string
    tech?: Array<string>
}

export const Card = ({name,portfolio,category, description,link,tech}:CardProps) =>{
    return(
        <CardContainer>
        <h3>{name} | Categoria:{category}</h3>
        <p>{description}</p>
        <iframe src={portfolio} width='95%' height={250}>

        </iframe>
        <CardFooter>
            <CardIcons>
               <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
            </CardIcons>
            <CardLink href={link}target='blank' rel="noopenner norefferer">
                <BsArrowRight />
            </CardLink>
        </CardFooter>
    </CardContainer>
    )
}