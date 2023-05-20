# Atelier
## Pomme Baya Believers
### *HackReactor FEC*
[Business Requirements](https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#)

[Overview](https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#heading=h.jyp34n22edi5) [(Matthew Baseman)](https://www.linkedin.com/in/matthew-baseman/)\
[Ratings & Reviews](https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#heading=h.vfd2ln5ll9i6) [(Naru Sadakuni)](https://www.linkedin.com/in/naru-sadakuni-0a402310a/)\
[Related Items & Comparison](https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#heading=h.3cxtcgb7ocwa) [(Sean Winnik)](https://www.linkedin.com/in/sean-winnik-9644aa47/)

**Description:**
Client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. This new project comprises a complete redesign of the retail portal designed to address this concern and modernize the site.

**Installation:**
1. Fork and clone this repository.
2. Run `npm install` from the root directory.
3. Setup `.env` file. Use `example.env` as an outline. You will need to obtain an API key with the following scopes:
   - read:org
   - user
   - read:user
   - user:email
   - user:follow
4. `npm run cd` will build the front-end application and re-build upon any saved changes to the front-end code.
5. `npm run sd` will build the back-end server and re-build upon any saved changes to the back-end code.

**Project Dependencies:**
- @testing-library/react
- axios
- babel-jest
- date-fns
- dotenv
- express
- jest-environment-jsdom
- multer
- react
- react-dom
- react-share
- react-spinners
- styled-components