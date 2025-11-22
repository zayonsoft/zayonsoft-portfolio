/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zayonsoft.vercel.app",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    try {
      const res = await fetch("https://zayonsoft.vercel.app/data/data.json");
      const projects = await res.json();

      return projects.map((project) => ({
        loc: `/projects/${project.id}`,
        changefreq: "weekly", // optional
        priority: 0.7, // optional
      }));
    } catch (err) {
      console.error("Error fetching projects for sitemap:", err);
      return [];
    }
  },
};
