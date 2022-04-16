import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
      <Box bg='blue.800' color='white'>
        <Wrapper>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box width='200px'>
                    <Heading>Lumo</Heading>
                </Box>
                <Box display='flex' justifyContent='space-between' fontSize={15}>
                    <Box mr={2}><Text>Privacy policy</Text></Box>
                    <Box mr={2}><Text>Terms of use</Text></Box>
                    <Box><Text>Cookies</Text></Box>
                </Box>
                <Box display='flex'>
                    <Box mr={2}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUxJREFUSEu1lYFNwzAQRV8nYATKBMAE7QgwAXQCYALoBLQTABMAGzAC3QA2gAlAP7Ktw7V9DlJOsiIl9r3z+ftnxsQxmzg/PYBLYAGchKGa3sN4AV5bRbYAZ8A9MHd2+QHcAILtRQ2wAa5Gtk9rBPoTJcB/ksekW+DaEnKA2vLcqPwzJLDtuANuzZpz264coH4eVgDf4ZA1x0YO0PejOMECpJaHRvVPgObEWAZ16alhI+3CAh6BiwZgDahahdfKVIwFSNvHnYC8Lfky5TrVSwv4cWRpd+ABUu4egHfb38JZ5PUN6+zimoI8wBdwkGXfRVvpOWQPUGpt8ZA9mY45gxUgVe65aeui9QJ025NBjrGKXkDTKrSrmtn1AFyzi2Io3WoPkFvJkMv74Wg30fxqgJLDJtV6EtREqUtmpgs1KKPyrmgEPQDHQdqfJwf8ArJlSRlOmzLXAAAAAElFTkSuQmCC"/>
                    </Box>
                    <Box mr={2}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg=="/>
                    </Box>
                    <Box>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOhJREFUSEvtleERATEQhb+rgA7ogA5QAR3QAR1QAhWgAypAB3RwJVAB80hm4obbOO6HmctMfuXt+7KbTZJQ8khK9qcCmBXOlqgLjIG6m23T4SHYO10KLICjjwsBMt9FGlqynoeGgA3QtyIj17fAQNoQoDQ7kQaW7ACoIk+AqxGltFdAw3J36/fNhxlYAK+dAROgZoAKA+SrLpsDwxzI14Cpy+QdozBA5ZG5ssgbHwN0yEugGXHIF7+B8JB1+1oRwTGSl236y4u2BkbZNi39qRBQEJF9nWNv9gk4u6n29Y9f9eHYDfX/f/INbvUiGfj4dkgAAAAASUVORK5CYII="/>
                    </Box>
                </Box>
            </Box>
        </Wrapper>
    </Box>
  )
}

export default Footer