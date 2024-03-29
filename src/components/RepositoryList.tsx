import { useEffect, useState } from "react";
import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name: string;
  html_url: string;
  description: string;
}

export const RepositoryList = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hakuunabatata/repos")
      .then((res) => res.json())
      .then(setRepos);

    console.log(repos);
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};
