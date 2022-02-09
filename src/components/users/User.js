// import React,{ Component } from 'react';
//
// export class User extends Component {
//   componentDidMount() {
//     this.props.getUser(this.props.match.params.login);
//   }
//
//   render() {
//     const {
//       name,
//       avatar_url,
//       location,
//       bio,
//       blog,
//       login,
//       html_url,
//       followers,
//       following,
//       public_repos,
//       public_gists,
//       hireable
//     } = this.props.user;
//
//     const { loading } = this.props;
//
//     return (
//       <div>
//         {}
//       </div>
//     )
//   }
// }
//
// export default User

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function User({ user, loading, getUser }) {
  const params = useParams()
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    piublic_gists,
    hireable,
  } = user

  useEffect(() => {
    getUser(params.login)
  }, [])

  return <div>{name || login}</div>
}

export default User
