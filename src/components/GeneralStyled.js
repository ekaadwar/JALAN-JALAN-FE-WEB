import styled from "styled-components";

export const Section = styled.div`
  background-color: yellow;
`;

export const SectionHori = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SectionData = styled(SectionHori)`
  //   min-width: 300px;
  width: 100%;
  max-width: 400px;
  //   background-color: coral;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  color: #02331f;
`;

export const TextLabel = styled(Text)`
  font-size: 12px;
  font-weight: bold;
`;

export const TextCity = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

export const TextDetail = styled(Text)`
  font-size: 12px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //   background-color: yellow;
`;

const diametre = 75;
const radius = 0.5 * diametre;

export const PictureWrapper = styled.div`
  width: ${diametre}px;
  height: ${diametre}px;
  background-color: #fff;
  border-radius: ${radius}px;
`;

export const SectionBody = styled.section`
  background-color: #f5f6fa;
  padding: 40px 0;
`;

export const CardCst = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const Partition = styled.hr`
  margin: 0;
  padding: 0;
`;
