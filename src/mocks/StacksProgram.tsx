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
import laravel from "../assets/images/laravel-svg.svg";
import docker from "../assets/images/docker-svg.svg";
import typescript from "../assets/images/typescript-svg.svg";

export const StacksProgram = [
    {id:uuidv4(), src:html, alt:'html5', color:'#FF573370'},
    {id:uuidv4(), src:css, alt:'css3', color:'#33ddff70'}, 
    {id:uuidv4(), src:js, alt:'js', color:'#fcbf4970'},
    {id:uuidv4(), src:typescript, alt:'typescript', color:'#3AB0FF70' },
    {id:uuidv4(), src:react, alt:'react', color:'#00304970'},
    {id:uuidv4(), src:node, alt:'node', color:'#508D6970'},
    {id:uuidv4(), src:sql, alt:'sql', color:'#EE721470'},
    {id:uuidv4(), src:java, alt:'java', color:'#B3131270'},
    {id:uuidv4(), src:vue, alt:'vueJs', color:'#508D6970'},
    {id:uuidv4(), src:php, alt:'php', color:'#11468F70'},
    {id:uuidv4(), src:laravel , alt:'laravel', color:'#F1541270'},
    {id:uuidv4(), src:docker, alt:'docker', color:'#3AB0FF70' },
]