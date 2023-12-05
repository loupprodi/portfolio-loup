import {CardContainer, CardFooter, CardIcons, CardLink} from './styles'

import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'

export const Card = () =>{
    return(
        <CardContainer>
        <h3>name</h3>
        <p>description</p>
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