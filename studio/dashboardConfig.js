export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e609e3ae7136a74f384d912',
                  title: 'Sanity Studio',
                  name: 'ShareTech-studio',
                  apiId: '5f51dc3f-393d-4a82-91a4-b2746b213f63'
                },
                {
                  buildHookId: '5e609e3a08ca2252d953ce97',
                  title: 'Landing pages Website',
                  name: 'ShareTech',
                  apiId: '5344f05f-04d9-43e7-b0d7-9580b41839b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/naydwe/ShareTech',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ShareTech.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
