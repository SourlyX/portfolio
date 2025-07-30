import React from "react"
import styled, { css } from "styled-components"

const Timeline = styled.section`
  white-space: nowrap;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  position: relative;

  ol {
    font-size: 0;
    display: flex;
    align-items: center;
    padding: 250px 0;
    gap: 14px;
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      width: 280px; /* mismo ancho del último div */
      flex-shrink: 0;
    }
  }

  ol li {
    position: relative;
    display: inline-block;
    list-style-type: none;
    width: 160px;
    height: 3px;
    background: #4DB6AC;
  }

  ol li:last-child {
    width: 280px;
  }

  ol li::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 1px);
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4DB6AC;
  }

  ol li:last-child::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 170px;
    height: 3px;
    background: #4DB6AC;
  }

  ol li div {
    position: absolute;
    left: calc(100% + 7px);
    width: 280px;
    padding: 15px;
    font-size: 1rem;
    white-space: normal;
    color: #E0E0E0;
    background: #37474F;
  }

  ol li div::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
  }

  ol li:nth-child(odd) div {
    top: -16px;
    transform: translateY(-100%);
  }

  ol li:nth-child(odd) div::before {
    top: 100%;
    border-width: 8px 8px 0 0;
    border-color: #37474F transparent transparent transparent;
  }

  ol li:nth-child(even) div {
    top: calc(100% + 16px);
  }

  ol li:nth-child(even) div::before {
    top: -8px;
    border-width: 8px 0 0 8px;
    border-color: transparent transparent transparent #37474F;
  }
`

const Arrows = styled.div`
`

const Arrow = styled.button`
  ${(props) => props.prev && css`
  `}

  ${(props) => props.next && css`
  `}

  ${(props) => props.disabled && css`
  `}
`

const TimeLine = () => {
return (
      <Timeline>
        <ol>
          <li>
            <div>
              <time>March 2016</time>
              <br/>I initiated studying Software develpent in college. Since I was a 
              little kid I wanted to be a software developer to create lots of amazing 
              things and I was starting to achieve it.
            </div>
          </li>
          <li>
            <div>
              <time>April 2019</time>
              <br/>I got my first full-time job as a customer service representative, 
              since this moment I have had multiple jobs until the present.
            </div>
          </li>
          <li>
            <div>
              <time>2020</time>
              <br/>The pandemic started, it became very difficult to continue my carrer 
              in college. I had to stop stuying to continue working.
            </div>
          </li>
          <li>
            <div>
              <time>June 2021</time>
              <br/>I took very seriously my goal to be a developer and initiated studying 
              as a self-taught web developer and knew a lot of technologies in the web 
              development world as Django, Flask, Agular, Vue, React and also initiated
              getting to know the databases as SQL and MongoDB.
            </div>
          </li>
          <li>
            <div>
              <time>December 2021 - March 2023</time>
              <br/>QA analyst in Konrad Group: I Helped with system issues with a 
              web and mobile application. Checking it to see the releases were in a 
              good status to released them.
              <br/> I also had to replicate customer issues to find the problem they 
              were having in the application and forward the issue to the developers.
            </div>
          </li>
          <li>
            <div>
              <time>August 2025</time>
              <br/>Besides my knowledge as a sel-taught developer I wanted to continue with 
              my college carrer. I'm currently finishing college to adquire my title.
            </div>
          </li>
        </ol>

        {/*<Arrows>
          <Arrow prev disabled>
            <img src="arrowPrev.svg" alt="prev arrow"/>
          </Arrow>
          <Arrow>
            <img src="arrowNext.svg" alt="next arrow"/>
          </Arrow>
        </Arrows>*/}
      </Timeline>
  )
}

export default TimeLine