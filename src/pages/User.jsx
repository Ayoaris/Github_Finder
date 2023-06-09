import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/Layout/Spinner";
import RepoList from "../components/Repos/Repolist";

function User() {
  const { getUser, user, loading,repos, getUsersRepo } = useContext(GithubContext);
  // console.log("error:", user);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUsersRepo(params.login)
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    user && (
      <div>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost mb-2">
              Back To Search
            </Link>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md-:gap-8">
              <div className="custom-card-image mb-6 md:mb-0">
                <div className="rounded-lg shadow-xl card image-full ">
                  <figure>
                    <img src={avatar_url} alt={name} />
                  </figure>
                  <div className="card-body mt-60 ">
                    <h2 className="card-title mb-0">{name}</h2>
                    <p className=" text-teal-200">{login}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="mb-6 ml-5">
                  <h1 className="text-4xl card-title">
                    {name}
                    <div className="ml-2 mr-3 badge badge-success">{type}</div>

                    {hireable && (
                      <div className="mx-1 badge badge-info">Hireable</div>
                    )}
                  </h1>
                  <p>{bio}</p>
                  <div className="mt-4 card-actions">
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline  text-teal-200 hover:bg-teal-200"
                    >
                      Visit Github Profile
                    </a>
                  </div>
                </div>
                <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                  {location && (
                    <div className="stat">
                      <div className="stat-title text-md">Location</div>
                      <div className="stat-value text-sm">{location}</div>
                    </div>
                  )}
                  {blog && (
                    <div className="stat">
                      <div className="stat-title text-md">Website</div>
                      <div className="stat-value text-sm">
                        <a
                          href={`https://${blog}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {blog}
                        </a>
                      </div>
                    </div>
                  )}
                  {twitter_username && (
                    <div className="stat">
                      <div className="stat-title text-md">Twitter</div>
                      <div className="stat-value text-sm">
                        <a
                          href={`https://twitter.com${twitter_username}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {twitter_username}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl  text-teal-200 md:text-5xl" />
              </div>
              <div className="stat-title text-md">Followers</div>
              <div className="stat-value text-sm">{followers}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl  text-teal-200 md:text-5xl" />
              </div>
              <div className="stat-title text-md">Following</div>
              <div className="stat-value text-sm">{following}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl  text-teal-200 md:text-5xl" />
              </div>
              <div className="stat-title text-md">Public Repos</div>
              <div className="stat-value text-sm">{public_repos}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl text-teal-200 md:text-5xl" />
              </div>
              <div className="stat-title text-md">Public Gist</div>
              <div className="stat-value text-sm">{public_gists}</div>
            </div>
          </div>
          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                {/* <FaStore className="text-3xl md:text-5xl" /> */}
                <RepoList repos={repos} />
              </div>
              {/* <div className="stat-title text-md">Public Gist</div>
              <div className="stat-value text-sm">{public_gists}</div> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default User;
