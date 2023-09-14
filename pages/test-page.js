import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Regional Markets Facilitator</title>
          <meta
            property="og:title"
            content="test-page - Regional Markets Facilitator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_9i3yz) => (
            <>
              <h1>{context_9i3yz?.name}</h1>
            </>
          )}
          initialData={props.context9i3yzProp}
          persistDataDuringLoading={true}
          key={props?.context9i3yzProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context9i3yzProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context9i3yzProp: context9i3yzProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
