import styled from 'styled-components'

export const Section = styled.section`
  width: 400px;
  height: 435px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  border-bottom: 10px solid #ff7a00;
  margin-top: 15px;
  @media (max-width: 430px) {
    width: 300px;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  color: #444;
  width: 100%;
  text-align: center;
  height: 30px;
`

export const ListOfFollowingContainer = styled.h1`
  height: 350px;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const Foll = styled.h2`
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  h2 {
    cursor: pointer;
    position: relative;
    left: 190px;
    bottom: 100px;
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #444;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.3;
    margin-top: 10px;
  }
`

export const ProfilePicture = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  border: 8px solid #fff;
`