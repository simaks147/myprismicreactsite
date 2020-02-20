import React from "react"

import Layout from "../components/layouts"
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";
import {RichText} from "prismic-reactjs";

export const query = graphql`
query NewTypeElseQuery($uid: String) {
  prismic{
    allNew_type_elses(uid: $uid){
      edges{
        node{
          _meta{
            uid
          }
          title
        }
      }
    }
  }
}
`

const NewTypeElse = props => {
    const doc = props.data.prismic.allNew_type_elses.edges.slice(0,1).pop();
    if(!doc) return null;

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{RichText.asText(doc.node.title)}</title>
            </Helmet>
            <h1>{RichText.asText(doc.node.title)}</h1>
        </Layout>
    )
}

export default NewTypeElse
