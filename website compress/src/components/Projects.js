import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Text, Flex, Heading} from '@chakra-ui/react'

import ProjectPart from './ProjectPart'

const Projects = () => {
    return (
        <Flex p = "10" flexDir = "column">
            <Heading fontSize = "6xl">PROJECTS</Heading>
            <Text pb = "5" fontSize = "2xl" as='i' >Explore our completed projects:</Text>
            <ProjectPart title = "HALL OF FAME CALCULATOR" date = "AUGUST 2022" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button1 = "View Rankings" buttonColor = "orange" img = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Anthony_Davis_pre-game_%28cropped%29.jpg/800px-Anthony_Davis_pre-game_%28cropped%29.jpg"/>
            <Text pb = "5" fontSize = "2xl" as='i' >See what we've been working on recently:</Text>
            <ProjectPart title = "ROOKIE SUCCESS MODEL" date = "COMING SOON" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button1 = "GitHub Repository" buttonColor = "blue" img = "https://www.thedelite.com/wp-content/uploads/2019/04/KobeBryant.jpg"/>
            <ProjectPart title = "TRADE EVALUATOR" date = "COMING SOON" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button1 = "GitHub Repository" buttonColor = "pink" img = "https://www.biography.com/.image/t_share/MTY5NjUxOTg2OTIzMjY3MzMw/bio-headers-groups-basketball-players.jpg"/>
        </Flex>
    )
}

export default Projects
