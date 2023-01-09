# Additional steps made to tweak it

1. edited src/constants.ts - add backend and workspace id
2. export TIGER_API_TOKEN specific for my backend
3. yarn refresh-md to get full list of components in src/md/full.ts
4. src/routes/AppRouter.tsx
    - line 2+34: removed redirect
    - line 31: special content for intial dashboard
5. src/routes/Home.tsx - added dashboard content

6. \+ src/routes/Insight.tsx <br/>
   \+ src/routes/Edit.tsx
7. src/routes/AppRouter.tsx add /in and /edit address
