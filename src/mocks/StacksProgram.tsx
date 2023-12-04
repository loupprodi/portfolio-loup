import { v4 as uuidv4 } from 'uuid';

import html from "../assets/images/html5-svg.svg";
import css from "../assets/images/css3-svg.svg";
import js from "../assets/images/javascript-svg.svg";
import react from "../assets/images/react-svg.svg";
import node from "../assets/images/node-svg.svg";
import sql from "../assets/images/sql-svg.svg";
import java from "../assets/images/java-svg.svg";
import vue from "../assets/images/vue-svg.svg";
import php from "../assets/images/php-svg.svg";
import laravel from "../assets/images/laravel-svg.svg"
import docker from "../assets/images/docker-svg.svg"

export const StacksProgram = [
    {id:uuidv4(), src:html, alt:'html5', class:'html'},
    {id:uuidv4(), src:css, alt:'css3', class:'css'}, 
    {id:uuidv4(), src:js, alt:'js', class:'js'},
    {id:uuidv4(), src:react, alt:'react', class:'react'},
    {id:uuidv4(), src:node, alt:'node', class:'node'},
    {id:uuidv4(), src:sql, alt:'sql', class:'sql'},
    {id:uuidv4(), src:java, alt:'java', class:'java'},
    {id:uuidv4(), src:vue, alt:'vueJs', class:'vueJs'},
    {id:uuidv4(), src:php, alt:'php', class:'php'},
    {id:uuidv4(), src:laravel , alt:'laravel', class:'laravel'},
    {id:uuidv4(), src:docker, alt:'docker', class:'docker' },
]