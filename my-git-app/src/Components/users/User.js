import React, { Fragment,useContext,useEffect } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

export const User = ({match}) => {

       const githubContext = useContext(GithubContext)
       const {getuser,loading,user,repos,getUsersRepos} = githubContext
    useEffect(() => {
       getuser(match.params.login)
       getUsersRepos(match.params.login)
    },[])

  //eslint-disable-next-line



         const {
             name,
             avatar_url,
             location,
             bio,
             blog,
             login,
             html_url,
             company,
             email,
             followers,
             following,
            public_repos,
            public_gists,
            hireable} = user

             
               if (loading) {
                   return <Spinner />
               }
        return (
           <Fragment>
               <Link to="/" className="btn btn-light">
                    Back to search
               </Link>
               hireable: {""}
               {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
             <div className="card grid-2">
                 <div className="all-center">
                   <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}}/>
                   <h1>{name}</h1>
                   <p1>
                       Location: {}
                          {location ?  `${location}` : "unavailable"}
                   </p1>
                 </div>
                 <div>
                     {bio && (<Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                         </Fragment>)}
                         <a href={html_url} className="btn btn-dark my-1">Visit github profile</a>
                         <ul>
                             <li>
                                 {login && <Fragment>
                                     <strong>Username: </strong> {login}
                                     </Fragment>}
                                     </li>
                                     <li>
                                     {company && <Fragment>
                                     <strong>Company: </strong> {company}
                                     </Fragment>}
                             </li>

                             <li>
                                     {blog && <Fragment>
                                     <strong>Website: </strong> {blog}
                                     </Fragment>}
                             </li>
                         </ul>
                 </div>
             </div>
             <div className='card text-center'>
                 <div className='badge badge-primary'>Followers:{followers}</div>
                 <div className='badge badge-success'>Following:{following}</div>
                 <div className='badge badge-danger'>Public Repos:{public_repos}</div>
                 <div className='badge badge-dark'>Public Gists:{public_gists}</div>

             </div>
             <Repos repos={repos}/>
           </Fragment>
        )
    }

export default User
