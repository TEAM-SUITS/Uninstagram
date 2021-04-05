import styled from 'styled-components'

const Divider = styled.hr`
    height: ${({ height }) => (height ? height + 'px' : '1px')};
    width: ${({ width }) => (width ? width + 'px' : '100%')};
    background-color: ${({ color }) => (color ? color : 'var(--color-gray)')};
    margin: ${({ margin }) => (margin ? margin + 'px' : '20px')};
`

export default Divider
