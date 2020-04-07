import React from 'react'

import Container from 'components/Container'
import { Link } from 'gatsby'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import styled from 'styled-components'
import colors from 'assets/stylesheets/settings/_colors.scss'

const Content = styled.div`
  margin: 0;
  padding: 0 5px;
  margin-block-end: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 1;
  font-size: 12px;
  color: ${colors.black};
`

const Text = styled.p`
  margin-bottom: 3;
  font-size: 12px;
  color: ${colors.black};
`

const ContactButtons = styled.div`
  padding: 1em 0;
`

const InitiativeDetails = ({ initiative }) => {
  console.log(initiative)

  const name = initiative.Namn
  const description = initiative.Beskrivning
  const need = initiative.Beh_ver
  const website = initiative.Hemsida
  const mail = initiative.Mejl
  const twitter = initiative.Twitter
  const facebook = initiative.Facebook

  return (
    <Container className="counterCard">
      <Container className="noBubbleHeader">
        <a className="link" href={website} target="__blank">
          <div className="title">
            <p>{name}</p>
          </div>
        </a>
      </Container>

      <Content>
        <Text>
          <h3>VAD </h3>
          {description}
        </Text>
        {need ? (
          <text>
            <h3>BEHÖVER </h3>
            {need}
          </text>
        ) : null}

        <ContactButtons>
          {website ? (
            <a
              className="resp-sharing-button__link"
              href={facebook}
              target="_blank"
              rel="noopener"
            >
              <div className="resp-sharing-button resp-sharing-button--website resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  Hemsida
                </div>
              </div>
            </a>
          ) : null}
          {facebook ? (
            <a
              className="resp-sharing-button__link"
              href={facebook}
              target="_blank"
              rel="noopener"
            >
              <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </div>
              </div>
            </a>
          ) : null}
          {mail ? (
            <a
              class="resp-sharing-button__link"
              href={`mailto:${mail}`}
              target="_self"
              rel="noopener"
              aria-label=""
            >
              <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z" />
                  </svg>
                </div>
              </div>
            </a>
          ) : null}
        </ContactButtons>
      </Content>
    </Container>
  )
}

export default InitiativeDetails
