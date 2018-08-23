import styled, {css} from 'styled-components';
import media from './media';


export const Div = styled.div`
  ${({marginBottom})=> marginBottom && css`
    margin-bottom: ${marginBottom};  
   `}
  ${({marginTop})=> marginTop && css`
    margin-top: ${marginTop};  
   `}
   ${({marginLeft})=> marginLeft && css`
    margin-left: ${marginLeft};  
   `}
   ${({marginRight})=> marginRight && css`
    margin-right: ${marginRight};  
   `}
`;

// order important.  tablet before phone or it gets
// overwritten
export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  //background-color: #80ced7;
  ${media.tablet`
    padding-left: 30px;
    padding-right:30px;
    padding-top: 15px;
  `}
  ${media.phone`
    padding-left: 10px;
    padding-right:10px;
    padding-top: 15px;
  `}
`;

export const Relative = styled(Div)`
  position: relative;
  z-index: 10;
`;

export const Flex = styled(Div)`
  display: flex;
  
  ${({column})=> column && css`
    flex-direction: ${column};  
   `}
  
  ${({justify})=> justify && css`
    justify-content: ${justify};  
   `}
   
   ${({align})=> align && css`
    align-content: ${align};  
   `}
`;

export const OutlineContainer = styled.div`
    border: 1px solid turquoise;
    padding: 17px 10px 10px 10px;
`;
