import React from 'react'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl   text-teal-200 my-4 font-bold">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
}

export default RepoList