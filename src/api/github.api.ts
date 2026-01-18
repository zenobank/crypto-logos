const GithubApi = {
  async getRepoStars(owner: string, repo: string): Promise<number> {
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 60 * 60 },
      });

      if (!res.ok) return 0;

      const data = (await res.json()) as { stargazers_count?: number };
      return typeof data.stargazers_count === 'number' ? data.stargazers_count : 0;
    } catch {
      return 0;
    }
  },
};

export default GithubApi;