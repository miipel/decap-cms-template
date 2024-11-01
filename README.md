# Setting up:

1. Create Next.js repo
2. Add folder under /public called /admin
3. Add config.yml and index.html that has cdn script in it.
4. In Netlify add new project and pull your git repo
5. Under site configuration enable Netlify Identity
6. Configure registration preferences
7. Add external provider (This time google)
8. Add git gateway so Decap can add commits
9. For local development `npx decap-server`