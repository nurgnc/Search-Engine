import styled from "styled-components";

export const ContainerFluid = styled.div`
  width: 100%;
  margin: 0;
`;

export const Container = styled.div`
  width: 1500px;
  max-width: 100%;
  padding: 0.75rem;
  margin: 0 auto;
  min-height: ${(props) => props.height};
  @media (max-width: 1400px) {
    width: 1200px;
  }
`;

export const MarginVertical = styled.div`
  margin: 3rem 0;
  width: ${(props) => props.width};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  & > svg {
    margin-right: 10px;
  }
  & > ul {
    flex: 1;
  }
  @media (max-width: 850px) {
    flex-direction: ${(props) => props.resFlexDirection};
    align-items: ${(props) => props.resAlign};
    justify-content: ${(props) => props.resJustify};
    flex-wrap: wrap;
  }
`;

export const Width = styled.div`
  width: ${(props) => props.value};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Margin = styled.div`
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const Padding = styled.div`
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
`;

export const CenterText = styled.p`
  text-align: center;
  color: #686d76;
`;
