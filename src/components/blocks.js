import React from 'react'
import Reveal from 'react-reveal'
import {Link} from 'react-router-dom'
import 'animate.css/animate.css'

const Blocks = (props) => {

    return (
        <div className="home_blocks">
            {generateBlocks(props)}
        </div>
    )
}


const generateBlocks = ({blocks}) => {
    if(blocks) {
        return blocks.map((item) => {
            return (
                <Reveal key={item.id} effect = "animated fadeInUp">
                <div className = {`item ${item.type}`}>
                    <div className = "veil"></div>
                    <div className = "image"
                    style ={{background: `url(/images/blocks/${item.image}) no-repeat`}}></div>
                    <div className = "title">
                        <Link to={item.link}>{item.title}</Link>
                    </div>
                </div>
                </Reveal>
            )
        })
    }
}

export default Blocks;
