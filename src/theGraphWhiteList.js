import {gql, request} from 'graphql-request'

// const query = gql`{
//   whiteListAddeds {
//     _whiteList
//   }
// }`
// const url = 'https://api.studio.thegraph.com/query/87639/test/version/latest'
const query = gql`{
  workerRegistries {
    owner
    workerId
    workerType
  }
}`


const url  = 'https://api.studio.thegraph.com/query/87639/pado-network-subgraph/version/latest';
async function fetchSubgraphData() {
    return await request(url, query)
}

fetchSubgraphData().then((data) => console.log(JSON.stringify(data))).catch(console.error)
