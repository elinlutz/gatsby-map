import React from 'react'

import Button from '@material-ui/core/Button'
import Layout from 'components/Layout'
import Container from 'components/Container'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <Layout pageName="404">
      <Container className="main">
        <Container type="content" className="text-center">
          <h1>Sidan kan inte hittas</h1>
          <p>Det finns tyvärr ingen sida på den här adressen.</p>

          <Button className={'button'}>
            <Link to={'/'}>Tillbaka till kartan</Link>
          </Button>
        </Container>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
